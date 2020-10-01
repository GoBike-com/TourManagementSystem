import React from 'react';
import TabPanel from '../ExploreBar/TabPanel';
import { Grid, Paper } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import classNames from "classnames";
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import Tab from '@material-ui/core/Tab';
import { Autorenew } from '@material-ui/icons';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SignupModal from '../Modal/SignupModal';
import Recommendations from '../Recommendations/Recommendations.js';
import { Link, withRouter } from "react-router-dom";
import Header from "../../assets/components/Header/Header.js";
// import Button from "../../assets/components/CustomButtons/Button.js";
import HeaderLinks from "../../assets/components/Header/HeaderLinks.js";
import GridContainer from "../../assets/components/Grid/GridContainer.js";
import GridItem from "../../assets/components/Grid/GridItem.js";
import mylog from '../../assets/img/OurLogo.jpg';
import Parallax from "../../assets/components/Parallax/Parallax.js";
import img13 from '../../assets/img/image13.jpg';
import img14 from '../../assets/img/image14.jpg';




const LandingPage = (props) => {

        const [modal, setModal] = React.useState(false);
        
        const websitename = "GoBike"

        const useStyles = makeStyles({
            mainContainer:{
                background: 'linear-gradient(315deg, #0cbaba 0%, #380036 74%)',
                height:450,
                position:'relative',
            },
            root: {
              height: 100,
              padding: '20px 260px 30px',
            },
            logo:{
                color:'green',
                click:'cursor',
            },
            websitename:{
                color:'white',
                fontSize: '30px',
            },
            mainbody : {
                // height:500,
                position:'relative',
            },
            btns:{
                marginLeft:'100px',
            },
            card: {
                maxWidth: 345,
                position:'relative',
            },
            Recommendations:{
                height: 200,
                backgroundImage : 'url(../../assets/img/image13.jpg)'
            },
            left:{
                float:'left'
            },
            right:{
                float:'right' 
            }
        });
          

        const classes = useStyles();
        const { ...rest } = props;
        return(

              
                            <div>
                                <div className={classes.mainContainer}>
                                    <CssBaseline />
                                    <Grid container >
                                       
                                        <Grid item xs={12} sm={2}>
                                            
                                        </Grid>
                                        <Grid item xs={12} sm={8}>
                                        `   <Grid container direction="row">
                                                <Grid item direction="row" xs={12} sm={6}>
                                                    <span className={classes.websitename}>{websitename}</span>
                                                    <span>
                                                    <DirectionsBikeIcon className={classes.logo}/>
                                                    </span>
                                                </Grid>
                                                <Grid item direction="row" xs={12} sm={6}>
                                                    <SignupModal/>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item direction="row" xs={12} sm={2}>
                                            
                                        </Grid>
                                    </Grid>


                                    <Grid container direction="row" className={classes.mainbody}>
                                       
                                         <Grid item direction="row" xs={12} sm={2}>
                                            
                                        </Grid>
                                        <Grid item direction="row" xs={12} sm={8}>
                                        `   <Grid container direction="row">
                                                <TabPanel />
                                            </Grid>
                                        </Grid>
                                        <Grid item direction="row" xs={12} sm={2}>
                                            
                                        </Grid>
                                    </Grid>
                                </div>
                                       
                                        
                                <Grid container className={classNames(classes.Recommendations,classes.mainRaised)} spacing={3}>
                                            <Grid item xs={12} sm={12}>
                                            <h4 style={{fontWeight:'30px', fontSize:'30px',display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor:''}}>
                                                Our star recommendations for your next trip
                                                </h4>
                                                {/* <Parallax className={{height:'50px'}}
                                                image={require("../../assets/img/image8.jpg")}
                                                > */}
                                                
                                                <Recommendations />
                                            </Grid>
                                           
                                            <Grid item xs={12} sm={12}>
                                            <h4 style={{fontWeight:'30px', fontSize:'30px',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                                Why GoBike ?
                                                </h4>
                                                <p style= {{fontWeight:'20px', fontSize:'15px',display: 'flex', justifyContent: 'center', alignItems: 'center',wordWrap:'break-word',margin:'60px',padding:'50px',backgroundColor:'indigo',color:'white'}}>
                                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                                
                                                <img style={{height:'300px'}} src={img13} />
                                                </p>
                                            </Grid>
                                            
                                            <Grid item xs={12} sm={12} >
                                            <h4 style={{fontWeight:'30px', fontSize:'30px', justifyContent: 'center', alignItems: 'center', marginLeft:'600px'}}>
                                                    Booking Tour with Go Bike ?
                                                    </h4>
                                                <div style={{margin:'60px'}}>
                                                    
                                                <p 
                                            style= {{fontWeight:'20px', fontSize:'15px', justifyContent: 'right',float:'left',wordWrap:'break-word',marginTop:'10px',padding:'30px',backgroundColor:'#BFD1FD'}}>
                                                <img  style= {{height:'300px',float:'left',margin:'5px',marginBlock:'white',border:'12px solid white'}} src={img14} />
                                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                                    
                                                    
                                                    </p>
                                                    </div>  
                                            </Grid>
                                            
                               

                                                {/* </Parallax> */}
                                            {/* </Grid> */}
                                </Grid>
                                          
                                       
                                
                               

                                    
                                </div>
                                    
                            
                    
                    
        )}

export default LandingPage;

let domContainer = document.querySelector('#index_container');
ReactDOM.render(<LandingPage />, domContainer);
