import React from 'react';
import { Grid,TextField,MenuItem,Button
} from "@material-ui/core"
import './index.css'
import _ from 'lodash'

const SearchBar = (props) => {
    return (
        <> 
            <Grid container className="searchbarContainer" >
               
                    <Grid item sm={4} md={4} xs={12} lg={4}>
                            
                            <TextField id="select" label="City" name="city_id" value={props.search.city_id}   onChange={(e) => props.changeHandler(e,'city_id')} style={{width:"99%"}} select>
                            {(!_.isEmpty(props.cities)) &&
                                    props.cities.map((city,index) => {
                                        return <MenuItem key={index} value={city.id}>{city.name}</MenuItem>
                                        })
                                }
                            </TextField>
                        
                    </Grid>
                        
                    <Grid item sm={4} md={4} xs={12} lg={4}>
                        <TextField id="select" name="category_id" value={props.search.category_id}   onChange={(e) => props.changeHandler(e,'category_id')}  label="Category" style={{width:"99%"}} select>
                            {(!_.isEmpty(props.categories)) &&
                                props.categories.map((category,index) => {
                                    return <MenuItem key={index} value={category.id}>{category.title}</MenuItem>
                                    })
                            }
                        </TextField>
                    </Grid>
                    <Grid item sm={3} md={3} xs={12} lg={3}>
                        <TextField id="select" name="title" value={props.search.title}   onChange={(e) => props.changeHandler(e,'title')}  label="Title" placeholder="Please Search with Title" style={{width:"99%"}} input>
                        </TextField>
                    </Grid>
                    <Grid item sm={1} md={1} xs={12} lg={1}>
                    <Button  onClick={props.searchResult}  variant="contained" className="search_btn" color="primary">
                        Search
                    </Button>
                </Grid>
               
            </Grid>
             
        </>
    )
}
export default SearchBar;