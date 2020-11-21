import React from "react";
import NewItinerary from "../Itinerary/NewItinerary";

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
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
