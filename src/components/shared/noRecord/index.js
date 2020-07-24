import React from 'react';
import { Grid
    } from "@material-ui/core";
import {Alert} from '@material-ui/lab'
import _ from 'lodash';
const Index = (props) => {
    
    return (
        <>
        <Grid container justify="center" alignContent="center" style={{minHeight:"59vh"}}>
            <Grid item >
                <Alert severity="error">No Record Found</Alert>
            </Grid>
        </Grid>
        </>
    )
}
export default Index;