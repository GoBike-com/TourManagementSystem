import React from 'react';
import { Link } from "react-router-dom";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import LocalHospital from "@material-ui/icons/LocalHospital";
import People from "@material-ui/icons/People";
import Note from "@material-ui/icons/Note";
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import history from './../Utility/History';
import classNames from "classnames";


// core components
import Button from "../../assets/components/CustomButtons/Button";
import GridContainer from "../../assets/components/Grid/GridContainer.js";
import GridItem from "../../assets/components/Grid/GridItem.js";
import InfoArea from "../../assets/components/InfoArea/InfoArea.js";

import modalStyles from "assets/jss/material-kit-react/modalStyle.js";
import productStyles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useModalStyles = makeStyles(modalStyles);
const useProductStyles = makeStyles(productStyles);

export default function SignupModal() {
  const [modal, setModal] = React.useState(false);
  const modalClasses = useModalStyles();
  const productClasses = useProductStyles();

  const useStyles = makeStyles({
    ButtonGrp1:{
        backgroundColor:'black',
        color:'white',
        marginLeft:'252px',
        flex:'true',
        borderRadius:'8px',
    },
    ButtonGrp2:{
      backgroundColor:'black',
      color:'white',
      marginRight:'12px',
      flex:'true',
      borderRadius:'8px',
  },
  });
  
  

  const classes = useStyles();




  return (
    <React.Fragment>
      <Link to={"traveller/signin"}>
                  <Button className={classes.ButtonGrp1}>
                      Need a Login ? 
                  </Button> 
                  </Link>
                  {/* <Link to={"traveller/login"}>
                  <Button className={classes.ButtonGrp2}>
                      Login
                  </Button> 
                  </Link> */}
    </React.Fragment>
      
           
  );
}