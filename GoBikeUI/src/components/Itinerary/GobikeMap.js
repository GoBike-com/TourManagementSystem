import React from "react";
import { Map,Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: "100%",
  height: "100%" 
};

const key = process.env.GOOGLE_MAP_KEY

export class GobikeMap extends React.Component {
    constructor(props) {
      super(props);
      // this.state = {
      //   stores: [{latitude: 39.155134, longitude: -86.527021},
      //           {latitude: 41.878113, longitude: -87.629799}]
      // }
      this.displayMarkers = this.displayMarkers.bind(this);
    }
  
    displayMarkers = () => {
      return this.props.places && this.props.places.map((place, index) => {
        console.log(index)
        console.log(place.place.latitude)
        return <Marker key={index} id={index} position={{
         lat: place.place.latitude,
         lng: place.place.longitude
       }}
       onClick={() => console.log("You clicked me!")} />
      })
    }
  
    render() {
      return (
          <Map
            google={this.props.google}
            zoom={6}
           style={mapStyles}
            initialCenter={{ lat: 39.155134, lng: -86.527021}}
          >
            {this.displayMarkers()}
          </Map>
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: key
  })(GobikeMap);