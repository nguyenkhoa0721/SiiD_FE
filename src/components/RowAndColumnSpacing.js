import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    border:"none",
    overflowX: "auto",
    margin:"10px"
  },
  table: {
    border:"none",
  },
}));

export default function RowAndColumnSpacing() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableBody>
          <Fragment>
            <TableRow>
              <TableCell rowSpan={2}>apple</TableCell>
              <TableCell>Nguyen Khoa</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>nguyenkhoa@gmail.com</TableCell>
            </TableRow>
          </Fragment>
        </TableBody>
      </Table>
    </Paper>
  );
}
