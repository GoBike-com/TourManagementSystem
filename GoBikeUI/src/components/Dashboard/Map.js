import * as React from 'react';

class Map extends React.Component {
  mapRef = React.createRef();

  state = {
    // The map instance to use during cleanup
    map: null
  };

  componentDidMount() {

    const H = window.H;
    const platform = new H.service.Platform({
        apiKey: "mI443txY9HflrNk3SwX4"
    });

    const defaultLayers = platform.createDefaultLayers();

    const parisMarker = new H.map.Marker({lat:44.840797, lng:-93.298279});
    
    // Create an instance of the map
    const map = new H.Map(
      this.mapRef.current,
      defaultLayers.vector.normal.map,
      {
        // This map is centered over chicago
        center: { lat: 44.840797, lng: -93.298279 },
        zoom: 4,
        pixelRatio: window.devicePixelRatio || 1
      }
    );

    map.addObject(parisMarker);
 
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    const ui = H.ui.UI.createDefault(map, defaultLayers);

    this.setState({ map });
  }

  componentWillUnmount() {
    // Cleanup after the map to avoid memory leaks when this component exits the page
    this.state.map.dispose();
  }

  render() {
    return (
      // Set a height on the map so it will display
      <div ref={this.mapRef} style={{ height: "500px" }} />
    );
  }
}


export default Map;