import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card,
    Typography, CardMedia, CardContent,CircularProgress,
    Backdrop
    } from "@material-ui/core"
import {api_baseUrl} from '../../config'
import './Ad.css';
import _ from 'lodash'
import Pagination from '@material-ui/lab/Pagination';
import NoRecord from '../shared/noRecord/index'
const useStyles = makeStyles((theme)=>({
  media: {
    height: 140,
  },
  mt:{
      marginTop:20
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));
 const Ads = (props) => {
     const classes = useStyles()
     const [page, setPage] = React.useState(1);
     const handleChange = (event, value) => {
         if(value !== page){
            props.pagination(value)
            setPage(value);
         }
         
      };
    return (
        <>
       
            <Grid container className={classes.root} >
                <div>
                    <Backdrop className={classes.backdrop} open={props.loader}>
                        <CircularProgress color="inherit" />
                    </Backdrop>
                </div>
                {props.posts && props.posts.map((data,index)=>{
                    return (
                        <Grid md={4} sm={4} xs={12} style={{maxHeight:"300px",overflow:"auto"}}>
                            <Card className={`${classes.mt} ml-10`} key={index}>
                                    <CardMedia
                                    className={classes.media}
                                    image={`${(data.pictures.length > 0) ? api_baseUrl + data.pictures[0].name : ''}`}
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" >
                                        {data.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {data.details}
                                    </Typography>
                                    </CardContent>
                            </Card>
                        </Grid>
                    )
                })}

            
            </Grid>
             {console.log(props)}
            {(!_.isEmpty(props.links)    && !_.isEmpty(props.posts)) ? 
                <Grid container className="mt-10 pagination-container" >
                    <Pagination page={page} 
                                onChange={handleChange}  
                                count={(props.meta) ? props.meta.last_page : 0} 
                                color="primary"
                     />
                </Grid>
            : (props.noRecord === true) ? <NoRecord /> : ''}
        </>
    )
}
export default Ads;