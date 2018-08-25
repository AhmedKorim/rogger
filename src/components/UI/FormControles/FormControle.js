import React, {Fragment} from 'react'
import TextField from "@material-ui/core/TextField/TextField";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

const FormController = props => {

    const formField = ({type = "text", label, multiline = false, value, placeHolder, classes = [], id, defaultValue, helperText, margin = "normal", options = []}, changeHandler) => {
        switch (type) {
            case 'select':
                return (
                    <TextField
                        select
                        name={id}
                        id={id}
                        label={label}
                        className={classes.join(' ')}
                        helperText={helperText}
                        value={value}
                        onChange={(event) => changeHandler(event, id)}
                    >
                        {options.map(option => <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>)}
                    </TextField>
                )

            default :
                return (<TextField
                    id={id}
                    name={id}
                    label={label}
                    type={multiline ? null : type}
                    multiline={multiline}
                    classes=
                        {multiline ? {
                            root:'textArea'
                        } : null}
                    rows={multiline ? '8' : null}
                    placeholder={placeHolder}
                    className={classes.join(' ')}
                    value={value}
                    onChange={(event) => changeHandler(event, id)}
                    margin="normal"
                />)

        }
    }

    const {payload, changeHandler} = props
    return (
        <Fragment>
            {formField(payload, changeHandler)}
        </Fragment>
    )
}
export default FormController