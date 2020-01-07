import React, {Component} from "react"
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    table: {
      minWidth: 650
    }
});

//fetching the schedule and tabulating the info
var sched = require("./upcoming_events.json");

function createData(time, name, location) {
    return { time, name, location };
}
console.log(sched.info.length);
const rows = [];
for(var i=0;i<sched.info.length;i++){
    var obj = sched.info[i];
    rows[i] = createData(obj.event_time.start_time+"-"+obj.event_time.end_time,obj.event_name,obj.event_location);
}

export class Schedule extends Component{
    render(){
      return(
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
                        <TableCell align="left">{row.time}</TableCell>
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.location}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        );
    }
}