import React,{useContext} from 'react'
import SearchBar from '../shared/searchBar/container/SearchBarContainer'
 import {fakeAuthCentralState} from '../../actions/index'
import { Grid,TextField,MenuItem,Button,CardMedia
} from "@material-ui/core"
import './index.css';
import EmailIcon from '@material-ui/icons/Email';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AppsIcon from '@material-ui/icons/Apps';
import FavoriteIcon from '@material-ui/icons/Favorite';
import _ from 'lodash'

const ProfileComponent = (props) => {
   
    return (
        <>
        {/* {console.log(props.auth)} */}
            <Grid container className="menu_profile" >
                <Grid item className="left_profile_menu" md={3} sm={4} lg={3} xs={12}>
                    <div className="img-outer">
                        <CardMedia
                            className="img-profile"
                            component='img'
                            src="http://mongostaging.demo.commersys.com//storage/files/pk/5cb85afb5f117e09a7343382/c21ca8ccd74e6728c14c4d45689a28ec.jpeg"
                            title="Paella dish"
                        />
                    </div>
                    <div className="name_outer">
                        <h4><b>Mohsin Nawaz Baig</b></h4>
                    </div>
                    <div className="ul_outer_profile">
                        <ul className="ul_profile">
                            <li>
                                <span className="profile_svg"><EmailIcon /></span>
                                <span className="flex">50</span>
                                <span className="flex">Mails</span>
                            </li>
                            <li>
                                <span className="profile_svg"><VisibilityIcon /></span>
                                <span className="flex">50</span>
                                <span className="flex">Mails</span>
                            </li>
                            <li>
                                <span className="profile_svg"><AppsIcon /></span>
                                <span className="flex">50</span>
                                <span className="flex">Mails</span>
                            </li>
                            <li>
                                <span className="profile_svg"><FavoriteIcon /></span>
                                <span className="flex">50</span>
                                <span className="flex">Mails</span>
                            </li>
                        </ul>
                    </div>
                </Grid>
                <Grid item className="p-4" md={9} sm={9} xs={12}>
                    <Grid item className="profile_tag">
                        <Grid item >
                            <h4><b>Profile</b></h4>
                        </Grid>
                        <Grid item >
                            <ul className="btn_profile_change_password">
                                <li style={{paddingRight:"15px"}}>Change Password</li>
                                <li style={{paddingRight:"15px"}}>|</li>
                                <li>Edit</li>
                            </ul>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item sm={5} className="custom_m-2" md={5} xs={12} lg={5}>
                            <TextField id="select" label="Gender" value='Mr.' style={{width:"99%"}} input>
                                 
                            </TextField>
                        </Grid>
                        <Grid item sm={5} className="custom_m-2" md={5} xs={12} lg={5}>
                            <TextField id="select" label="Full Name" value={!_.isEmpty(props.auth) ? props.auth.user.name : ''} style={{width:"99%"}} input>
                                
                            </TextField>
                        </Grid>
                        <Grid item sm={5} className="custom_m-2" md={5} xs={12} lg={5}>
                            <TextField id="select" label="UserName" value={!_.isEmpty(props.auth) ? props.auth.user.username : ''} style={{width:"99%"}} input>
                               
                            </TextField>
                        </Grid>
                        <Grid item sm={5} className="custom_m-2" md={5} xs={12} lg={5}>
                            <TextField id="select" label="Email" value={!_.isEmpty(props.auth) ? props.auth.user.email : ''} style={{width:"99%"}} input>
                                
                            </TextField>
                        </Grid>
                        <Grid item sm={5} className="custom_m-2" md={5} xs={12} lg={5}>
                            <TextField id="select" label="Phone" value={!_.isEmpty(props.auth) ? props.auth.user.phone : ''} style={{width:"99%"}} input>
                                
                            </TextField>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
export default ProfileComponent;