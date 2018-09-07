import React from 'react'
import Typography from "@material-ui/core/Typography/Typography";

const Lettering = props => {
    const {variant, className, letterClass, text ,component} = props;
    return (
        <Typography variant={variant} className={className} component={component}>
            {text.split('').map((letter, index) => {
                if (letter.search(/ /g) >= 0) {
                    return <span key={text + index} className="space"> </span>
                }
                return <span className={[letterClass, `letter${index}`].join(' ')}>{letter}</span>
            })}
        </Typography>
    )
};
export default Lettering