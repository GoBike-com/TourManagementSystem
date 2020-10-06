import Icon from "@material-ui/core/Icon";
// material-ui components
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import People from "@material-ui/icons/People";
import CardBody from "../../assets/components/Card/CardBody.js";
import CardFooter from "../../assets/components/Card/CardFooter";
import CardHeader from "../../assets/components/Card/CardHeader.js";
// core components
import Button from "../../assets/components/CustomButtons/Button.js";
import CustomInput from "../../assets/components/CustomInput/CustomInput.js";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import ReCAPTCHA from "react-google-recaptcha";
import DialogTitle from "@material-ui/core/DialogTitle";




class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      successful: "",
      cardAnimaton: "cardHidden",
      jsonResponse: "",
      captchavalue: null,
      showPassword: false,
      phoneNumber:"",
    };
    let currentURLPath = window.location.pathname;

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
    this.onSignInSubmit = this.onSignInSubmit.bind(this);
    this.getPhoneNumberFromUserInput = this.getPhoneNumberFromUserInput.bind(this);
  }

  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = () => {
    console.log("handleSubmit")
      fetch("https://gorest.co.in/public-api/users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
          Accept: 'application/json',
          'Authorization': 'Bearer e4267e0897e3f80ee6b50eb1592ef7aed446b1f87caa91eae3cbb194ac20cf88',
        },
        body: JSON.stringify({
          name: "Tenali Ramakrishna",
          gender: "Male",
          email:"tenn.ramakrishnda@15ce.commm",
          status:"Active",
        })
      })
      .then(response => 
      {
        this.props.history.push("/traveller/success");
      }
      )
  };

    handleClickShowPassword = event => {
    this.setState({ showPassword: !this.state.showPassword });
  };

   handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  
  


  render() {

    
    return (
      <form>
        <CardHeader color="info">
          <h4 style={{font:'inherit',fontSize:'30px',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Log Into GoBike</h4>
          <h4 style={{fontSize:"30px", alignItems:"center",textAlign:"center"}}><FacebookIcon style={{fontSize:"30px", alignItems:"center",textAlign:"center"}}></FacebookIcon>
          {/* <WhatsAppIcon style={{fontSize:"30px",display:"inline", marginLeft:"10px"}} /> */}
          </h4>
        </CardHeader>
        <CardBody>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p style={{ font:'inherit',fontSize:'16px',display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight:'30px' }}>First Time User?</p>
            <Link style={{textDecorationLine:"none"}} to={"register"}>
              <Button color="primary" simple
              style={{font:'inherit',fontSize:'16px',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                Sign Up
                </Button>
            </Link>
          </div>
          <CustomInput
            labelText="Mobile number/Email ID"
            id="username"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              type: "text",
              onChange: this.handleUsernameChange,
              endAdornment: (
                <InputAdornment position="end">
                  <People />
                </InputAdornment>
              )
            }}
          />
          <CustomInput
            labelText="Password"
            id="gender"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              type: "password",
              onChange: this.handlePasswordChange,
              endAdornment: (
                
                    <InputAdornment position="end">
                      <IconButton style={{paddingRight:"2px"}}
                        aria-label="toggle password visibility"
                        onClick={this.handleClickShowPassword}
                        onMouseDown={this.handleMouseDownPassword}
                      >
                        {this.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  
              ),
              autoComplete: "off"
            }}
          />
          <div >
            <Link style={{textDecorationLine:"none",textAlign:'left'}} to={"forgotpassword/email"}>
              <Button style={{ font:'inherit',fontSize:'16px', fontWeight:'30px',textAlign:'left',margin:'0 0 10 0' }}  color="primary" simple>
                Forgot password?
                </Button>
            </Link>
          </div>
          <small style={{ font:'inherit',fontSize:'16px',display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight:'30px' }}>I agree to the Terms and Conditions &amp; Privacy Policy</small>
          <ReCAPTCHA
                sitekey="6LeqvL4UAAAAAGSZCz_PjOT8nMVh2CDpx_GUGyXj"
                onChange={this.onChange}
            />
        </CardBody>
        <CardFooter style={{ display: 'flex', justifyContent: 'center', margin: 0 }}>
          <Button
            onClick={this.handleSubmit}
            style={{ textAlign: "center" }}
            color="info">
            Sign In
            </Button>
        </CardFooter>
      </form>
    );
  }
}

export default withRouter(LoginPage)