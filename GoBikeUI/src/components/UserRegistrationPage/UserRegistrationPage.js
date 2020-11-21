import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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