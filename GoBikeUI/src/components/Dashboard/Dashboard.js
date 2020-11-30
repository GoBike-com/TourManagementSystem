import React from "react";
import NewItinerary from "../Itinerary/NewItinerary";

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    {console.log("window.sessionStorage.getItem('firstLoad')", window.sessionStorage.getItem('firstLoad'))}
    if( !window.sessionStorage.getItem('firstLoad'))
    {
      window.sessionStorage.setItem('firstLoad', true);
      window.location.reload();
    }  
    const { history } = this.props;
     window.addEventListener("popstate", () => {
     history.go(1);
   });
   }

  render() {
  return (
      <div>
          <NewItinerary />
      </div>
  );
};
}

export default Dashboard;
