import React from 'react';
import {Spinner} from "../../Spinner/Spinner";
import './Image.scss';

class Image extends React.Component {
    state = {
        loaded: false
    }
    imgLoaded = () => {
        // hide the spinner add class to image to show it
        this.setState({
            loaded: true
        });
        console.log('hide spinner');
    };

    render() {
        const {
            state: {
                loaded
            },
            props: {
                src,
                title,
                alt
            }
            , imgLoaded
        } = this;

        return (
            <div className="custom-img-wrapper">
                {<Spinner fade={loaded}/>}
                <img
                    className={loaded ? 'loaded' : null}
                    src={src} alt={alt}
                    title={title ? title : null}
                    onLoad={imgLoaded}/>
            </div>

        )
    }

}

export default Image;