import React from 'react'
import './VitrineControler.scss';
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/es/Typography/Typography";
import ExpansionPanelSummary from "@material-ui/core/es/ExpansionPanelSummary/ExpansionPanelSummary";
import ExpansionPanel from "@material-ui/core/ExpansionPanel/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/es/ExpansionPanelDetails/ExpansionPanelDetails";
import Icon from "@material-ui/core/Icon/Icon";
import Slider from '@material-ui/lab/Slider';
import Pannel from "../../../UI/Pannel/Pannel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: 600
    },
    panel: {
        borderRadius: 0,
        margin: 0,

    },
    fullWidthController: {
        width: "100%",
    },
    details: {
        padding: 0
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
        minWidth: 150
    },

});

class VitrineControler extends React.Component {
    state = {
        from: 70,
        to: 2050,
        productState: 'all',
        deleveryTime: 7
    };

    handleChangeFrom = (event, from) => {
        this.setState({from: from.toFixed(0)});
    };
    handleChangeTo = (event, to) => {
        this.setState({to: to.toFixed(0)});
    };
    handelDeliveyTime = (event, deleveryTime) => {
        this.setState({deleveryTime: deleveryTime.toFixed(0)});
    };

    render() {
        const {classes} = this.props;
        const {from, to, deleveryTime} = this.state;
        return (
            <div>
                <Pannel
                    heading="categories"
                >
                    <div className="flex">
                        <div>
                            <div className={classes.fullWidthController}>
                                <Typography id="label">from {from} $</Typography>
                                <Slider value={from} aria-labelledby="label" onChange={this.handleChangeFrom} reverse/>
                            </div>
                        </div>
                        <div>
                            <div className={classes.fullWidthController}>
                                <Typography id="label">to {to} $</Typography>
                                <Slider value={to} aria-labelledby="label" onChange={this.handleChangeTo} min={100} max={200000}/>
                            </div>
                        </div>
                    </div>
                </Pannel>
                <Pannel
                heading="Price Range"
            >
                <div className="flex">
                    <div>
                        <div className={classes.fullWidthController}>
                            <Typography id="label">from {from} $</Typography>
                            <Slider value={from} aria-labelledby="label" onChange={this.handleChangeFrom} reverse/>
                        </div>
                    </div>
                    <div>
                        <div className={classes.fullWidthController}>
                            <Typography id="label">to {to} $</Typography>
                            <Slider value={to} aria-labelledby="label" onChange={this.handleChangeTo} min={100} max={200000}/>
                        </div>
                    </div>
                </div>
            </Pannel>
                <Pannel
                    heading="delivery"
                >
                    <div className="AlignmentFlex">
                        <div className={classes.fullWidthController}>
                            <Typography id="label">{deleveryTime} working days</Typography>
                            <Slider value={deleveryTime} aria-labelledby="label" onChange={this.handelDeliveyTime} min={1} max={15}/>
                        </div>
                    </div>
                </Pannel>
                <Pannel
                    heading="product state"
                >
                    <div className="AlignmentFlex">
                        <Select
                            value={this.state.productState}
                            onChange={this.handleChange}
                            displayEmpty
                            name="age"
                            className={classes.selectEmpty}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="new">new</MenuItem>
                            <MenuItem value='used'>used</MenuItem>
                            <MenuItem value="all">all</MenuItem>
                        </Select>
                    </div>
                </Pannel>
            </div>

        )
    }
}

export default withStyles(styles)(VitrineControler);

