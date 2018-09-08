import Button from "@material-ui/core/Button/Button";
import Divider from "@material-ui/core/Divider/Divider";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import React from 'react';
import {connect} from "react-redux";
import axiosBase from "../../../../axios/axios";
import FormController from "../../../../components/UI/FormControles/FormControle";
import PerfectScrollbar from "react-perfect-scrollbar";
import {EDIT_HOMEPAGE_CAROUSEL, SNACK_BAR_NEW_MESSAGE} from "../../../../dux/actions/actionTypes";


const carouselImputSchema = [
    {
        slide: [
            {value: '', label: 'Slide Header', id: 'bigHeader'},
            {value: '', label: 'Slide  word', id: 'dropedWord'},
            {value: '', label: 'Slide  imgage', id: 'SlideImg'},
        ]
    }

]

const getInputscheme = ({slideImg = '', slideLabel = '', slideWord = ''}, {count, index}) => {
    if (count >= 0) {
        return {
            id: 'side',
            controllers: [
                {value: slideImg, label: `Slide 1 image `, id: 'slideImg', extendable: true, count: count},
                {value: slideLabel, label: `Slide 1 Header `, id: "slideLabel"},
                {value: slideWord, label: `Slide 1 Word `, id: 'slideWord'},
            ]
        }
    }
    return {
        id: 'side' + index,
        controllers: [
            {value: slideImg, label: `Slide ${index + 1} image `, id: 'slideImg', extendable: false, added: true,},
            {value: slideLabel, label: `Slide ${index + 1} Header `, id: "slideLabel"},
            {value: slideWord, label: `Slide ${index + 1} Word `, id: 'slideWord'},
        ]
    }
}


class CaroselSetting extends React.Component {

    constructor(props) {
        super(props);
        const slides = [...props.slides].map((slide, index, {length}) => {
            if (index === 0) return getInputscheme(slide, {count: length - 1})
            return getInputscheme(slide, {index: index})
        })
        this.state = {
            slides: [...slides]


        }
    }

    componentDidUpdate(prevProps) {
        console.log(prevProps, this.props.slides);
        if (prevProps.slides.length === this.props.slides.length) return;
        const slides = [...this.props.slides].map((slide, index, {length}) => {
            if (index === 0) return getInputscheme(slide, {count: length - 1})
            return getInputscheme(slide, {index: index})
        })
        this.setState({slides: slides})
    }

    changeControllers = (id, action, baseid, a, other) => {
        console.log(id, action, baseid, other);
        if (action === 'add') {
            const addedSideCount = this.state.slides.length;


            /// chagne the count value on adding new slide
            const pumbedCountSlides = [...this.state.slides].map(slide => {
                if (slide.id !== 'slide') return slide;
                return {
                    ...slide,
                    controllers: slide.controllers
                        .map(controller => {
                                if (controller.count >= 0) {
                                    return {
                                        ...controller,
                                        cont: controller.count + 1
                                    }
                                }
                                return controller
                            }
                        )
                }
            })
            // adding slide to the state
            this.setState({
                ...this.state,
                slides: [...pumbedCountSlides, getInputscheme('', {index: addedSideCount})]
            })
        }

        if (action === 'remove') {
            const updatedCountSlides = [...this.state.slides].map(slide => {
                if (slide.id !== 'slide1') return slide;
                return {
                    ...slide,
                    controllers: slide.controllers
                        .map(controller => {
                                if (controller.count >= 0) {
                                    return {
                                        ...controller,
                                        cont: controller.count + -1
                                    }
                                }
                                return controller
                            }
                        )
                }
            })

            this.setState({
                ...this.state,
                slides: [...updatedCountSlides.filter(slide => slide.id !== other)]
            })

        }

    }

    changeHandler = ({target: {value}}, id, other) => {
        this.setState({
            ...this.state,
            slides: this.state.slides.map(slide => {
                if (slide.id !== other) return slide;
                return {
                    ...slide,
                    controllers: slide.controllers.map(controller => {
                        if (controller.id !== id) return controller;
                        return {...controller, value: value}
                    })
                }
            })
        })
    }


    submit = (event) => {
        event.preventDefault();
        const data = this.state.slides.map(({id, controllers}) => ({
            id,
            ...controllers.reduce((acc, {id, value}) => ({
                ...acc,
                [id]: value
            }), {})
        }))
        this.props.editSlides(data);
        console.log(data);
        axiosBase.put('/homepage/slides/-LLtvPDWdOalG2wBAhCM.json', data).then(resp => this.props.message('edits has been saved', 'success'))
            .catch(error => this.props.message('cannot save setting', 'error'))
    }


    render() {
        const {
            state: {
                slides
            },
            changeHandler,
            changeControllers,
            submit
        } = this;
        return (
            <Grid container justify="center">
                <Grid item sm={11}>
                    <PerfectScrollbar>
                        <form
                            onSubmit={submit}
                        >
                            {
                                slides.map(slide => <Paper className='caroselSettingPapper' key={slide.id}>
                                        <Grid contianer>
                                            {slide.controllers.map(controller => <Grid className="fullWidth" xs>
                                                <FormController
                                                    changeHandler={changeHandler}
                                                    changeControllers={changeControllers}
                                                    payload={{...controller, classes: ['input'], other: slide.id}}
                                                />
                                            </Grid>)}
                                        </Grid>
                                    </Paper>
                                )
                            }
                            <Button type="submit">sava</Button>
                        </form>
                    </PerfectScrollbar>
                </Grid>
            </Grid>
        )
    }
}

const mapstateToPrpos = state => {
    return {
        slides: state.UI.homepage.slides
    }
}
const mapDispatchToProps = dispatch => {
    return {
        editSlides: (slides) => dispatch({type: EDIT_HOMEPAGE_CAROUSEL, payload: {slides}}),
        message: (message, variant) => dispatch({type: SNACK_BAR_NEW_MESSAGE, payload: {open: true, message, variant}})

    }
}
export default connect(mapstateToPrpos, mapDispatchToProps)(CaroselSetting);