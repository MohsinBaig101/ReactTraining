import React,{useEffect,useContext,useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, AppBar, Toolbar,
   Avatar} from "@material-ui/core"
import {
  useHistory
} from 'react-router-dom';
import {Context} from '../../../context/index'
import {fakeAuthCentralState,countries} from '../../../actions/index'
import { getThemeProps } from '@material-ui/styles';
import HeaderComponent from '../header';
import _ from 'lodash';
const useStyles = makeStyles({
  row:{
    flexGrow:1
  },
  grow:{
    flexGrow:1
  },
  container:{
    width:1170,
    margin:"auto"
  },
  buttonFontSize:{
    fontSize:"11px",
    color:"#a1a1a1"
  },

  AppBar:{
    backgroundColor:"#fff",
    backgroundSize:"cover"
  },
  mainLogo:{
    color: "#a1a1a1",
    justifyContent:"left",
    '&:hover':{
      background:"transparent"
    }
  },

  avatar:{
    height:"100%",
    borderRadius:0,
  },

  loginButton:{
  }

});

export default function Header(props) {
  const classes = useStyles()
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(0);
  const [state, dispatch] = useContext(Context);
  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  };
  const countryRef = useRef();
  const handleClose = () => {
    setAnchorEl(false)
  };
  useEffect(() => {
    if(fakeAuthCentralState.isAuthenticated){
      dispatch({type:'login',payload:true})
    }

  },[])
  useEffect(() => {
    
    if(_.isEmpty(state.countries)){
      console.log(state)
      abc();
    } 
  },[state.countries])

  const abc = async () => {
    try{
        const res = await countries()
        dispatch({type:'countries',payload:res.data})
        dispatch({type:'country',payload:res.data.data[0]})
      }catch(err){
          console.log(err)
      }
  };
  const logout = () => {
    localStorage.removeItem('token');
    dispatch({type:'login',payload:false})
    history.push('/ads')
  }
  const arrangeCountries = () => {
    const arr =  [];
    if(!_.isEmpty(state.countries)){
        state.countries.data.map((country,index) => {  
            arr.push(country.id);
        })
    }
    return arr;
  }
  const countryGetById = (id) => {
    let country_obj =  {};
    if(!_.isEmpty(state.countries)){
        state.countries.data.map((country,index) => {  
            if(country.id === id){
              country_obj = {...country};
              return country_obj;
            }
        })
    }
    return country_obj;
  }
  const changeCountry = (e) => {
    const country = countryGetById(e);
    dispatch({type:'country',payload:country});
    dispatch({type:'loader',payload:true})
    dispatch({type:'no_record',payload:false})

  }
  return (
       <HeaderComponent
        classes = {classes}
        logout = {logout}
        handleClose = {handleClose}
        handleMenu = {handleMenu}
        state = {state}
        countries = {arrangeCountries()}
        defaultCountry = {(!_.isEmpty(state.country) ? state.country : {})}
        countryRef = {countryRef}
        changeCountry = {changeCountry}
       />
  );
}