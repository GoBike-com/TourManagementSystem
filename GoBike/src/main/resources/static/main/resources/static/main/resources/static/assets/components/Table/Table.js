import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import styles from "assets/jss/material-kit-react/components/tableStyle.js";

var useStyles = makeStyles(styles);

export default function CustomTable(props) {
  var classes = useStyles();
  var tableHead = props.tableHead,
      tableData = props.tableData,
      tableHeaderColor = props.tableHeaderColor;

  return React.createElement("div", { className: classes.tableResponsive }, React.createElement(Table, { className: classes.table }, tableHead !== undefined ? React.createElement(TableHead, { className: classes[tableHeaderColor + "TableHeader"] }, React.createElement(TableRow, { className: classes.tableHeadRow }, tableHead.map(function (prop, key) {
    return React.createElement(TableCell, {
      className: classes.tableCell + " " + classes.tableHeadCell,
      key: key
    }, prop);
  }))) : null, React.createElement(TableBody, null, tableData.map(function (prop, key) {
    return React.createElement(TableRow, { key: key, className: classes.tableBodyRow }, prop.map(function (prop, key) {
      return React.createElement(TableCell, { className: classes.tableCell, key: key }, prop);
    }));
  }))));
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf(["warning", "primary", "danger", "success", "info", "rose", "gray"]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};