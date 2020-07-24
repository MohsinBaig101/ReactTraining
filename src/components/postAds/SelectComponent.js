import React from 'react';
import {Grid,FormControl,InputLabel,Select} from '@material-ui/core';
import './postAd.css';
const SelectComponent = (props) => {
    return (
            <Grid item className="w-100 mt-20" md={4} sm={6} xs={12} >
                <FormControl className="formControl_ui">
                    <InputLabel htmlFor="age-native-simple">{props.title}</InputLabel>
                    <Select
                        variant="outlined"
                        inputProps={{
                            name: 'age',
                            id: 'age-native-simple',
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </Select>
                </FormControl>
            </Grid>
    )
}
export default SelectComponent;