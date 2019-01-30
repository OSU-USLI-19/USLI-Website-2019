import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
	flexContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  body: {
    fontSize: 12,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(name, role, program, carbs) {
  id += 1;
  return { id, name, role, program, carbs};
}

const rows = [
  createData('Trevor Rose', 'Team Lead', 'ME', 0),
  createData('Trevor Rose', 'Team Lead', 'ME', 0),
	createData('Trevor Rose', 'Team Lead', 'ME', 0),
	createData('Trevor Rose', 'Team Lead', 'ME', 0),
	createData('Trevor Rose', 'Team Lead', 'ME', 0),
	createData('Trevor Rose', 'Team Lead', 'ME', 0),
	createData('Trevor Rose', 'Team Lead', 'ME', 0),
	createData('Trevor Rose', 'Team Lead', 'ME', 0),
	createData('Trevor Rose', 'Team Lead', 'ME', 0),
	createData('Trevor Rose', 'Team Lead', 'ME', 0),
	createData('Trevor Rose', 'Team Lead', 'ME', 0),
	createData('Trevor Rose', 'Team Lead', 'ME', 0),
	createData('Trevor Rose', 'Team Lead', 'ME', 0),
	createData('Trevor Rose', 'Team Lead', 'ME', 0),
	createData('Trevor Rose', 'Team Lead', 'ME', 0),
];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Name</CustomTableCell>
            <CustomTableCell align="right">Role</CustomTableCell>
            <CustomTableCell align="right">Program</CustomTableCell>
            <CustomTableCell align="right"></CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell component="th" scope="row">
                  {row.name}
                </CustomTableCell>
                <CustomTableCell align="right">{row.role}</CustomTableCell>
                <CustomTableCell align="right">{row.program}</CustomTableCell>
                <CustomTableCell align="right">{row.carbs}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
