import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import classNames from "classnames";
import Recommendations from "../Recommendations/Recommendations.js";
import img13 from "../../assets/img/image13.jpg";
import img14 from "../../assets/img/image14.jpg";
import image from "../../assets/img/bikingImage.jpg";

const LandingPage = (props) => {
  const useStyles = makeStyles({
    mainContainer: {
      position: "relative",
    },
    root: {
      height: 100,
      padding: "20px 260px 30px",
    },
    logo: {
      color: "green",
      click: "cursor",
    },
    websitename: {
      color: "indigo",
      fontSize: "40px",
      fontFamily: "Times New Roman",
    },
    mainbody: {
      // height:500,
      position: "relative",
    },
    btns: {
      marginLeft: "100px",
    },
    card: {
      maxWidth: 345,
      position: "relative",
    },
    Recommendations: {
      height: 200,
      backgroundImage: "url(../../assets/img/image13.jpg)",
    },
    left: {
      float: "left",
    },
    right: {
      float: "right",
    },
  });

  const classes = useStyles();
  return (
    <div>
      <div className={classes.mainContainer}>
        <CssBaseline />

        <Grid container direction="row" className={classes.mainbody}>
          <Grid item direction="row" xs={12} sm={2}></Grid>
          <Grid item direction="row" xs={12} sm={12}>
            `{" "}
            <Grid container direction="row">
              <div
                style={{
                  backgroundImage: "url(" + image + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  minHeight:"100vh",
                  width:"100%",
                  backgroundRepeat: "no-repeat",
                }}
              >
              </div>
            </Grid>
          </Grid>
          <Grid item direction="row" xs={12} sm={2}></Grid>
        </Grid>
      </div>

      <Grid
        container
        className={classNames(classes.Recommendations, classes.mainRaised)}
        spacing={3}
      >
        <Grid item xs={12} sm={12}>
          <h4
            style={{
              marginTop: "60px",
              fontWeight: "40px",
              fontSize: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "",
            }}
          >
            Our star recommendations for your next trip
          </h4>
          <Recommendations />
        </Grid>

        <Grid item xs={12} sm={12}>
          <h4
            style={{
              fontWeight: "40px",
              fontSize: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Why GoBike ?
          </h4>
          <p
            style={{
              fontWeight: "30px",
              fontSize: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              wordWrap: "break-word",
              margin: "60px",
              padding: "50px",
              backgroundColor: "indigo",
              color: "white",
            }}
          >
            GoBike provides a wonderful and elegant way to allow you to enjoy your favorite activities: Biking and Vacation.
              We achieve this by providing a one-stop-shop for all your biking/vacation needs, from hotel reservations,
              custom itineraries with your group, discounted rates for using our service, our top picks from across the country,
              and a free bike to use during the duration of your trip. We also offer a comprehensive listing of restaurants, hotels,
              and things to do so your day is always filled with fun while you bike around the different cities. GoBike also
              lets you reserve and book flights for your destination, either for one-way travel or on the way back.
            <img style={{ height: "300px" }} src={img13} />
          </p>
        </Grid>

        <Grid item xs={12} sm={12}>
          <h4
            style={{
              fontWeight: "40px",
              fontSize: "40px",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "600px",
            }}
          >
            Booking Tour with Go Bike ?
          </h4>
          <div style={{ margin: "60px" }}>
            <p
              style={{
                fontWeight: "30px",
                fontSize: "30px",
                justifyContent: "right",
                float: "left",
                wordWrap: "break-word",
                marginTop: "10px",
                padding: "30px",
                backgroundColor: "#BFD1FD",
              }}
            >
              <img
                style={{
                  height: "300px",
                  float: "left",
                  margin: "5px",
                  marginBlock: "white",
                  border: "12px solid white",
                }}
                src={img14}
              />
              Booking with GoBike is super easy! All you have to do is signup and start exploring. Once you have done this,
                you can find a vast list of locations you can visit, along with things to do, activities, hotels, and restaurants.
                Once you found a place you would like to visit on your back, whether this is from the unique activities it has
                (such as a ghost tour, see Chicago), you simply add it to your itinerary. Once this is complete, you can start booking your
                 flights and hotels. Once this is all done, our discount for using our service is applied and you can chat with your group! It
                is as easy as 1, 2, 3.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;
