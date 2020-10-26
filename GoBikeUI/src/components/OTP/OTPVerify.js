import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import loginStyles from "../../assets/jss/material-kit-react/views/loginPage.js";

// import image from "assets/img/bg7.jpg";
import OTPForm from "./OTPVerifyform";
// import Logo2 from "../../assets/img/logo2.png";

const useLoginStyles = makeStyles(loginStyles);

export default function OTPVerify(props) {
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function() {
        setCardAnimation("");
    }, 700);
    const loginClasses = useLoginStyles();
    const { ...rest } = props;
    return (
        <div>
            {/* <Header
                absolute
                color="white"
                // brand={ <img width="240" height="40" resizeMode="contain" src={Logo2} alt="Logo2" />}
                rightLinks={<HeaderLinks />}
                {...rest}
            />
            <div
                className={loginClasses.pageHeader}
                style={{
                    // backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
            >
                <div className={loginClasses.container}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                            <Card className={loginClasses[cardAnimaton]}> */}
                                <OTPForm/>
                            {/* </Card>
                        </GridItem>
                    </GridContainer>
                </div>
            </div> */}
        </div>
    );
}

