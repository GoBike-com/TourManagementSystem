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

import loginStyles from "../../assets/jss/material-kit-react/views/loginPage.js";

import EnterEmailForm from "./EnterEmailForm";

// const useLoginStyles = makeStyles(loginStyles);

export default function EmailPage(props) {
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function() {
        setCardAnimation("");
    }, 700);
    // const loginClasses = useLoginStyles();
    const { ...rest } = props;
    return (
        <div>
            <EnterEmailForm/>
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
                    // backgroundSize: "cover",
                    // backgroundPosition: "top center"
                }}
            >
                <div className={loginClasses.container}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                            <Card className={loginClasses[cardAnimaton]}>
                                <EnterEmailForm/>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
            </div> */}
        </div>
    );
}

