import { warningCardHeader, successCardHeader, dangerCardHeader, infoCardHeader, primaryCardHeader } from "assets/jss/material-kit-react.js";
var cardHeaderStyle = {
  cardHeader: {
    borderRadius: "3px",
    padding: "1rem 15px",
    marginLeft: "15px",
    marginRight: "15px",
    marginTop: "-30px",
    border: "0",
    marginBottom: "0"
  },
  cardHeaderPlain: {
    marginLeft: "0px",
    marginRight: "0px"
  },
  warningCardHeader: warningCardHeader,
  successCardHeader: successCardHeader,
  dangerCardHeader: dangerCardHeader,
  infoCardHeader: infoCardHeader,
  primaryCardHeader: primaryCardHeader
};

export default cardHeaderStyle;