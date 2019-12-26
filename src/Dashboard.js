import React, { Component } from "react";
import Slider from "infinite-react-carousel";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import hstyle from "./Dashboard.css";

function createData (time,name,location){
  return{time,name,location};
}
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const rows = [
  createData("17:00-18:30","Hacking Activity 01", "CC14"),
  createData("18:30-19:30","Hacking Activity 02", "Campus Centre"),
  createData("19:30-21:30","Hacking Activity 03", "MPH"),
  createData("22:00-07:00","Hacking Activity 04", "CC13, CC14, MPH"),
]
export class Dashboard extends Component {
  render() {
    const settings = {
      adaptiveHeight: false,
      arrows: false,
      centerPadding: 60,
      className: "Dashboard",
      dots: true,
      duration: 100
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
          <TableContainer component={Paper}>
            <Table className={useStyles.table} aria-label="timetable table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Time</TableCell>
                  <TableCell align="left">Event Name</TableCell>
                  <TableCell align="left">Location</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.time}</TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Dashboard;
