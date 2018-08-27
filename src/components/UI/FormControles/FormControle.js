import React, {Fragment} from 'react'
import TextField from "@material-ui/core/TextField/TextField";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import FormControl from "@material-ui/core/FormControl/FormControl";
import FormGroup from "@material-ui/core/FormGroup/FormGroup";

const FormController = props => {

    const formField = ({type = "text", label, multiline = false, value, placeHolder, classes = [], id, defaultValue, helperText, margin = "normal", options = []}, changeHandler) => {

        classes = classes || [];
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
            case 'checkBox':
                return (<FormControl component="div">
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox checked={value} onChange={(event) => changeHandler(event, id ,type)} value={value}/>
                            }
                            label={label}
                        />
                    </FormGroup>
                </FormControl>)
            default :
                return (<TextField
                    id={id}
                    name={id}
                    label={label}
                    type={multiline ? null : type}
                    multiline={multiline}
                    classes=
                        {multiline ? {
                            root: 'textArea'
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