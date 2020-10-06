import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import firebase from "../Utility/firebase";

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState(false);
  const [OTPBox,setOTPBox] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "visible",
        callback: function (response) {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log("captcha verified");
          handleSubmit();
        },
      }
    );
  };

  const handleOTP = () => {
    setOTPBox(true);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    setUpRecaptcha();
    var pN = "+1-812-650-8064";
    console.log(pN);
    var appVerifier = window.recaptchaVerifier;

    console.log("recaptcha-verfied");
    firebase
      .auth()
      .signInWithPhoneNumber(pN, appVerifier)
      .then(function (confirmationResult) {
        console.log("helloooooooo");
        handleOTP();
        let code = window.prompt("Enter OTP");
        window.confirmationResult = confirmationResult;

        confirmationResult
          .confirm(code)
          .then(function (result) {
            // this.handleClose();
            console.log("user is signed in");
            window.location.href = "http://localhost:3000/traveller/success";
            // ...

            console.log("user is signed in");
          })
          .catch(function (error) {
            // User couldn't sign in (bad verification code?)
            // ...
          });
      })
      .catch(function (error) {
        // Error; SMS not sent
        // ...
      });
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Login with Mobile
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Please enter your mobile number
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="phoneNumber"
            type="String"
            fullWidth
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </DialogContent>

        <div>
          <div
            id="recaptcha-container"
            style={{
              display: "flex",
              justifyItems: "center",
              alignItems: "center",
              marginLeft: "20px",
            }}
          ></div>
        </div>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog setOTPBox={setOTPBox} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
