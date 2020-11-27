import React from "react";
import NewItinerary from "../Itinerary/NewItinerary";

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      reload:false,
    }
  }

  componentDidMount() {
    {console.log("window.localStorage.getItem('firstLoad')", window.localStorage.getItem('firstLoad'))}
    if( !window.localStorage.getItem('firstLoad'))
    {
      window.localStorage.setItem('firstLoad', true);
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
