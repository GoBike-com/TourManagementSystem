import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { config } from '../Constants'
import Accomodations from '../Accomodations/Accomondations';
import img1 from "../../assets/img/hotels1.jpg";
import Typography from "@material-ui/core/Typography";
import { Fullscreen } from "@material-ui/icons";



class Accomodation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { history } = this.props;
    window.addEventListener("popstate", () => {
      history.go(1);
    });
  }

  render() {
    return (
      <Grid>
        {/* <CssBaseline /> */}
        {/* <Grid container > */}
          <div style={{ width: "100%", height: "200px", overflow: "hidden", backgroundColor:"indigo" }}>
            <img src={img1} style={{ height:"100%", width:"20%" }} />
            <div style={{color:"white", float:"right", margin:"3%"}}>
            <Typography style={{fontSize:"24px",fontWeight:"16px",fontStretch:"expanded"}}>Hotels, Villas, Apartments and more in GoBike</Typography>
            <Typography style={{fontSize:"18px",fontWeight:"12px",fontStretch:"expanded"}}>Find deals for any season</Typography>
            </div>
            
          </div>
          {/* <Grid item xs={10} > */}
          <div >
          <Accomodations />
          </div>
          {/* </Grid> */}
        </Grid>
      // </Grid>
    );
  }
}

export default withRouter(Accomodation);
