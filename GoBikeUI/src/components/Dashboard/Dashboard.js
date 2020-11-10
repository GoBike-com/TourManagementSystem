import React from "react";
import ExploreComponent from "../Explore/ExploreComponent";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


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
          {/* <Header username={this.props.location.state.username} pageName="Explore Cities"/> */}
          <ExploreComponent />
          {/* <Footer /> */}
      </div>
  );
};
}

export default Dashboard;
