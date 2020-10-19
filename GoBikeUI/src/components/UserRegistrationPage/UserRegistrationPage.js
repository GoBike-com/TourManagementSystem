import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import img from '../../assets/img/image15.jpg';
import UserRegistrationForm from './UserRegistrationForm';



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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  logo:{
    color:'green',
    click:'cursor',
},
websitename:{
    color:'white',
    fontSize: '30px',
},

}));

export default function UserRegistrationPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  // const websitename = "GoBike"

  return (
    
    <div >
    {/* // style={{padding:'30px',backgroundImage: "url(" + img + ")", */}
    {/* // backgroundSize:'cover',
    // backgroundPosition: "center",
    // // height:"800px",
    // // marginTop:'20px'
    // }}
    // >

        
    //     <CssBaseline />
    // <Container component="main" maxWidth="xs" style={{marginTop:'100px'}}> */}
      <UserRegistrationForm />
    {/* //   <Box mt={5}>
    //     {/* <Copyright /> */}
    {/* //   </Box> */}
    {/* // </Container> */}
    </div>
  );
}