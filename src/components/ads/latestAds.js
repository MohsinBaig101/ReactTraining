import React,{useContext, useState, useEffect} from 'react';
import {Context} from '../../context/index'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
 const LatestAds = () => {
    // const [state, dispatch] = useContext(Context);
    // const [posts,setPosts] = useState(state.posts);
    // const classes = useStyles();
    // useEffect(()=>{
    //     setPosts(state.posts)
    // },[state.posts])
    return (
        <>
            <div className="row" style={{marginTop:"20px"}}>
                {posts && posts.map((post,index)=>{
                    return (
                        <Card className={classes.root} key={index}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {post.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {post.details}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                                <Button size="small" color="primary">
                                Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    )
                })}
                
            </div>
        </>
    )
}
export default LatestAds;