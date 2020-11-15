import React from "react";
import ExploreComponent from "../Explore/ExploreComponent";

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

 // header = window.sessionStorage.setItem("username", this.props.location.state.username);

  render() {
  return (
      <div>
          <ExploreComponent />
      </div>
  );
};
}

export default Dashboard;
