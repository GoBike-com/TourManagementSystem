import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from '@material-ui/core/Checkbox';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(day, acitivities) {
  return { day, acitivities };
}

const rows = [
  createData(
    "Day 01",
    <div>
      <div>Destination: Welton Hotel(Room no: 2002) </div>
      <div>Eat: Winchester Pub </div>
      <div>Travel: Transport Hotel Cab </div>
      <div>Acitivities: Boating </div>
    </div>
  ),
  createData(
    "Day 02",
    <div>
      <div>Destination: New hotel 1(room no. 7000) </div>
      <div>Eat: Winchester Pub </div>
      <div>Travel: Transport Hotel Cab </div>
      <div>Acitivities: Boating </div>
    </div>
  ),
  createData(
    "Day 03",
    <div>
      <div>Destination: Welton Hotel(Room no: 2042) </div>
      <div>Eat: Winchester Pub </div>
      <div>Travel: Transport Hotel Cab </div>
      <div>Acitivities: Boating </div>
    </div>
  ),
  createData(
    "Day 04",
    <div>
      <div>Destination: Welton Hotel(Room no: 2802) </div>
      <div>Eat: Winchester Pub </div>
      <div>Travel: Transport Hotel Cab </div>
      <div>Acitivities: Boating </div>
    </div>
  ),
];


const data = {
  FlightDetails:[
      { category:'Flight'},
      { from:'Bloomington'},
      { to:'Indiana'},
      { dateofjourney:'10-Nov-2020'},
      { noOfTickets:'2 Tickets 2 Adults'},
  ],
  Accomodation : [
    { category:'Accomodation'},
    { Destination:'Indiana'},
    { dateofarrival:'10-Nov-2020'},
    { dateofdeparture:'20-Nov-2020'},
    { NoOfRooms:'1'},
  ],
  ThingsToDo : [
    { activity1: 'Biking Tour'},
    { activity2: 'Boating and Fishing'}
  ],
  Price: [
    {StartingPrice:'$540'},
    {Tripsavings:'$58.60'},
    {totalCost:'$482.99'},
  ]

}

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 400,
  },
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function ItineraryList() {
  const classes = useStyles();

  return (
<div>
    <h1 style={{marginLeft: "120px"}}>View your itinerary</h1>

    <TableContainer
      component={Paper}
      style={{ 
        marginLeft: "120px", marginTop: "50px", width: "80%" }}
    >
      <Table className={classes.table} aria-label="customized table">
        <TableHead style={{ backgroundColor: "green" }}>
          <TableRow>
            <TableCell
              style={{
                fontFamily: "sans-serif",
                fontSize: "30px",
                color: "white",
                marginLeft: "20px",
              }}
            >
              Travel Itinerary
              <div style={{ fontSize: "15px", margin: "10px" }}>
                Purpose of travel : Biking Tour
              </div>
              <div
                style={{
                  fontSize: "15px",
                  margin: "10px",
                  alignContent: "right",
                }}
              >
                Destination City : Chicago
              </div>
            </TableCell>
            <TableCell align="right" style={{ color: "white" }}>
              <div style={{ fontSize: "15px", margin: "10px" }}>
                Trip start : 20-Nov-2020
              </div>
              <div style={{ fontSize: "15px", margin: "10px" }}>
                Trip end : 30-Nov-2020
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
            
            {/* // indeterminate={numSelected > 0 && numSelected < rowCount}
            // checked={rowCount > 0 && numSelected === rowCount}
            // onChange={onSelectAllClick}
            // inputProps={{ 'aria-label': 'select all desserts' }} */}
        
              <StyledTableCell
                component="th"
                scope="row"
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "30px",
                  color: "black",
                }}
              >
                {row.day}
              </StyledTableCell>
              <StyledTableCell align="left">{row.acitivities}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
