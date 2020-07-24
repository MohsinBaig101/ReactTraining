import React,{useEffect,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, AppBar, Toolbar,
   Avatar} from "@material-ui/core"
import {
  Link
} from 'react-router-dom';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import _ from 'lodash'
export default function Header(props) {
  return (
        <AppBar position="static" color="default" className={props.classes.AppBar}>
          <Grid item sm={12} xs={12} className={props.classes.container}>
            <Toolbar>
              <Grid className={props.classes.grow}>
                <Button className={[props.classes.mainLogo]}>
                  <Link to="/ads">
                    <Avatar src="https://uploads.codesandbox.io/uploads/user/3e41a372-fc65-4387-bca0-70a050914db8/VIR9-logo.jpg" className={props.classes.avatar} />
                  </Link>
                </Button>
              </Grid> 
              {!_.isEmpty(props.defaultCountry) ? 
                <ReactFlagsSelect
                  defaultCountry={props.defaultCountry.id.toUpperCase()}
                  countries={props.countries}
                  ref = {props.countryRef}
                  onSelect={props.changeCountry}
                />
              :''
              }
              
              {/* <Button color="inherit" className={props.classes.buttonFontSize}>
                <Link to="/latest">Latest Ads</Link>
              </Button> */}
              
              
              {(!props.state.isAuthenticated) ?
                <Button className={[props.classes.buttonFontSize,props.classes.loginButton]}>
                  <Link to="/login">Login</Link>
                </Button>
              : ''}
              {(props.state.isAuthenticated) ? 
                <>
                  <Button color="inherit" className={props.classes.buttonFontSize}>
                    <Link to="/post-ad">Post Ad</Link>
                  </Button>
                  <Button color="inherit" className={props.classes.buttonFontSize}>
                    <Link to="/profile">Profile</Link>
                  </Button>
                  <Button onClick={props.logout}  className={[props.classes.buttonFontSize,props.classes.loginButton]}>
                    Logout
                  </Button>
                </>
              : ''}
            </Toolbar>
          </Grid>
        </AppBar>
  );
}