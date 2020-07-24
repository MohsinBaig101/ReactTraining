import React, { useState,useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import Alert from '@material-ui/lab/Alert';
import {signIN, fakeAuthCentralState} from '../../../actions/index';
import {
  useHistory
} from 'react-router-dom';
import {Context} from '../../../context/index';
import ErrorMessageHOC from '../../shared/hoc/ErrorMessageComponent';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignInComponent = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [isAuthenticated,dispatch] = useContext(Context)
  const { register, handleSubmit, errors } = useForm();
 
  const onSubmit = async(data) => {
    const res = await signIN(data);
    if(res.status === 200){
      const promise = new Promise((resolve,reject) => {
        localStorage.setItem('token',res.data.token);
        if(localStorage.getItem('token')){
          resolve();
        }
      })

      promise.then(() => {
        fakeAuthCentralState.isAuthenticated = true;
        dispatch({type:'login',payload:true});
        history.push('/profile')
      })
      
    }else{
     props.error(res);
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
       
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        {(props.errorMsg.status) ? 
          <Alert severity="error">{props.errorMsg.message}</Alert>
        : ''}
        <TextField
          name="email"
          inputRef={
            register({
              required: 'Email is Required',
            })}
          label="Enter email"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          fullWidth
          error={errors.email ? true : false}
        />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            inputRef={
              register({
                required: 'Password is Required',
              })}
            label="Password"
            type="password"
            id="password"
            error={errors.password ? true : false}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      
      </div>
      
    </Container>
  );
}
const abc = ErrorMessageHOC(SignInComponent);
export default abc;