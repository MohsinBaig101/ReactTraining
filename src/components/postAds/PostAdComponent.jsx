import React from 'react';
import {Grid,FormControl,InputLabel,Select} from '@material-ui/core';
import './postAd.css'
import SelectComponent from './SelectComponent'
import InputComponent from './InputComponent'
import EditorComponent from './EditorComponent';


const PostAdComponent = () => {
    
    return (

        <Grid container className="form_container" direction="column" alignContent="center">
            <Grid item className="w-100" md={4} sm={6} xs={12}  >
                <h4>
                   <b>Post your ad</b>
                </h4>
            </Grid>
            <SelectComponent
                title = 'Category'
            />
            <SelectComponent
                title = 'Sub Category'
            />
            <InputComponent
                title = "Ad Title"
            />
            <EditorComponent />
             
             
        </Grid>
     
    )
}
export default PostAdComponent;