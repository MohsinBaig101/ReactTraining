import React from 'react';
import {Grid,FormControl,InputLabel,Select,TextField} from '@material-ui/core';
import './postAd.css';
const SelectComponent = (props) => {
    return (
            <Grid item className="w-100 mt-20" md={4} sm={6} xs={12} >
                <FormControl className="formControl_ui">
                <TextField
                id="outlined-required"
                label={props.title}
                variant="outlined"
                />
                </FormControl>
            </Grid>
    )
}
export default SelectComponent;