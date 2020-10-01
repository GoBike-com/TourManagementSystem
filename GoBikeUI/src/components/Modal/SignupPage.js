import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import Header from "../../assets/components/Header/Header.js";
import HeaderLinks from "../../assets/components/Header/HeaderLinks.js";
import GridContainer from "../../assets/components/Grid/GridContainer.js";
import GridItem from "../../assets/components/Grid/GridItem.js";
import Card from "../../assets/components/Card/Card.js";
import LoginPage from '../Modal/LoginPage';

import loginStyles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "../../assets/img/Image3.jpg";
import logo from "../../assets/img/OurLogo.jpg";
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import classNames from "classnames";
import CssBaseline from '@material-ui/core/CssBaseline';



const useLoginStyles = makeStyles(loginStyles);

const useStyles = makeStyles({

  logo:{
    color:'green',
    click:'cursor',
},
websitename:{
    color:'white',
    fontSize: '30px',
},
maindiv:{
  color:'linear-gradient(315deg, #0cbaba 0%, #380036 74%)',
}

  })

export default function SignupPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);

  const loginClasses = useLoginStyles();
  const { ...rest } = props;
  
  const classes = useStyles();


  const websitename = "GoBike"

  
  return (
    
    <div>
      <CssBaseline />
      <div style={{backgroundColor:'black',textAlign:"center"}} className={classes.maindiv}>
      <span className={classes.websitename}>{websitename}</span>
                                                    <span>
                                                    <DirectionsBikeIcon className={classes.logo}/>
                                                    </span>
      </div>
      <div
        className={loginClasses.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className={loginClasses.container}>
          <GridContainer justify="left">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={loginClasses[cardAnimaton]}>
                <LoginPage/>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
