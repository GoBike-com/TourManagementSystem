import React from "react";

import EnterEmailForm from "./EnterEmailForm";
import img from '../../assets/img/image21.jpg';
import CssBaseline from "@material-ui/core/CssBaseline";


// const useLoginStyles = makeStyles(loginStyles);

export default function EmailPage(props) {
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function() {
        setCardAnimation("");
    }, 700);
    // const loginClasses = useLoginStyles();
    const { ...rest } = props;
    return (

        <div style={
            {
                backgroundImage: "url(" + img + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            minHeight: "100vh",
            }
        }>

           <CssBaseline />
           

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

