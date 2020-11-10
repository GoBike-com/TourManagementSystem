import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../Header/Header";
import ExploreComponent from "../Explore/ExploreComponent";
import Footer from "../Footer/Footer";

class SearchComponent extends React.Component {
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

   header = window.sessionStorage.getItem("username");

    render() {
  return (
      <div>
          {/* <Header username={this.header} pageName="Explore Cities"/> */}
          <ExploreComponent />
          {/* <Footer /> */}
      </div>
  );
};
}

export default withRouter(SearchComponent);
