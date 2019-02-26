import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import { AutoSizer, Column, SortDirection, Table } from 'react-virtualized';
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
  table: {
    fontFamily: theme.typography.fontFamily,
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  tableRow: {
    cursor: 'pointer',

  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
  },
  tableCell: {
    flex: 1,
  },
  noClick: {
    cursor: 'initial',
  },
});

class MuiVirtualizedTable extends React.PureComponent {
  getRowClassName = ({ index }) => {
    const { classes, rowClassName, onRowClick } = this.props;

    return classNames(classes.tableRow, classes.flexContainer, rowClassName, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  cellRenderer = ({ cellData, columnIndex = null }) => {
    const { columns, classes, rowHeight, onRowClick } = this.props;
    return (
      <TableCell
        component="div"
        className={classNames(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{ height: rowHeight }}
        align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
      >
        {cellData}
      </TableCell>
    );
  };

  headerRenderer = ({ label, columnIndex, dataKey, sortBy, sortDirection }) => {
    const { headerHeight, columns, classes, sort } = this.props;
    const direction = {
      [SortDirection.ASC]: 'asc',
      [SortDirection.DESC]: 'desc',
    };

    const inner =
      !columns[columnIndex].disableSort && sort != null ? (
        <TableSortLabel active={dataKey === sortBy} direction={direction[sortDirection]}>
          {label}
        </TableSortLabel>
      ) : (
        label
      );

    return (
      <TableCell
        component="div"
        className={classNames(classes.tableCell, classes.flexContainer, classes.noClick)}
        variant="head"
        style={{ height: headerHeight }}
        align={columns[columnIndex].numeric || false ? 'right' : 'left'}
      >
        {inner}
      </TableCell>
    );
  };

  render() {
    const { classes, columns, ...tableProps } = this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            className={classes.table}
            height={height}
            width={width}
            {...tableProps}
            rowClassName={this.getRowClassName}
          >
            {columns.map(({ cellContentRenderer = null, className, dataKey, ...other }, index) => {
              let renderer;
              if (cellContentRenderer != null) {
                renderer = cellRendererProps =>
                  this.cellRenderer({
                    cellData: cellContentRenderer(cellRendererProps),
                    columnIndex: index,
                  });
              } else {
                renderer = this.cellRenderer;
              }

              return (
                <Column
                  key={dataKey}
                  headerRenderer={headerProps =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index,
                    })
                  }
                  className={classNames(classes.flexContainer, className)}
                  cellRenderer={renderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

MuiVirtualizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      cellContentRenderer: PropTypes.func,
      dataKey: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
    }),
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowClassName: PropTypes.string,
  rowHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  sort: PropTypes.func,
};

MuiVirtualizedTable.defaultProps = {
  headerHeight: 56,
  rowHeight: 56,
};

const WrappedVirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

const data = [
  'Trevor Rose', 'rosetr@oregonstate.edu', 'Aero/Prop/Recovery', 'AAS', 'ME',
  'Trevor Rose', 'rosetr@oregonstate.edu', 'Aero/Prop/Recovery', 'AAS', 'ME',
];

let id = 0;
function createData(name, email, subteam, role, program) {
  id += 1;
  return { id, name, email, subteam, role, program };
}

const rows = [];
//                              Aero/Prop/Recovery Team Directory
rows.push(createData('Trevor Rose', 'rosetr@oregonstate.edu', 'Aero/Prop/Recovery', 'AAS', 'ME'));
rows.push(createData('Alex Wright', 'wrigalex@oregonstate.edu', 'Aero/Prop/Recovery', 'Aero & Propulsion', 'ME'));
rows.push(createData('Caleb Ransdell', 'ransdelc@oregonstate.edu', 'Aero/Prop/Recovery', 'Recovery Integration', 'ME'));
rows.push(createData('Luke Verbiest', 'verbiesl@oregonstate.edu', 'Aero/Prop/Recovery', 'Parachutes', 'ME'));
//                              Structures Team Directory
rows.push(data[0])
rows.push(createData('Al Lacey', 'laceyal@oregonstate.edu', 'Structures', 'Structures-Aft', 'ME'));
rows.push(createData('Emmanual Vargas', 'vargasfe@oregonstate.edu', 'Structures', 'Structures-Fore', 'ME'));
rows.push(createData('Jon Verbiest', 'verbiesj@oregonstate.edu', 'Structures', 'Airframe Configuration', 'ME'));
rows.push(createData('Ryan Nelson', 'nelsonry@oregonstate.edu', 'Structures', 'Electronics Bay', 'ME'));
//                              Payload Team Directory
rows.push(data[0])
rows.push(createData('Sebastian Coslow', 'coslows@oregonstate.edu', 'Payload', 'Payload Ejection', 'ME'));
rows.push(createData('Sam Elling', 'ellings@oregonstate.edu', 'Payload', 'Sample Collection', 'ME'));
rows.push(createData('Walker Neilson', 'neilsonw@oregonstate.edu', 'Payload', 'Drivetrain', 'ME'));
rows.push(createData('Jessica Jorgens', 'jorgenje@oregonstate.edu', 'Payload', 'Chassis', 'ME'));
//                             CS Team Directory
rows.push(data[0])
rows.push(createData('Trey Elkins', 'elkinsd@oregonstate.edu', 'CS', 'Avionics', 'CS'));
rows.push(createData('Leif Tsang', 'tsangl@oregonstate.edu', 'CS', 'Payload Software', 'CS'));
rows.push(createData('Ryan Wallerius', 'wallerir@oregonstate.edu', 'CS', 'Website', 'CS'));
//                             ECE Team Directory
rows.push(data[0])
rows.push(createData('Brent Vassas', 'vasasb@oregonstate.edu', 'ECE', 'Rover Electrical', 'ECE'));
rows.push(createData('Robby ONeil', 'oneilro@oregonstate.edu', 'ECE', 'Rover Electrical', 'ECE'));
//                            Outreach Directory
rows.push(data[0])
rows.push(createData('Jessica Scotten', 'scottenj@oregonstate.edu', 'Outreach', 'Outreach Lead', 'Microbiology'));

function ReactVirtualizedTable() {
  return (
    <Paper style={{ height: 580, width: 'calc(100% - 220px)' }}>
      <WrappedVirtualizedTable
        rowCount={rows.length}
        rowGetter={({ index }) => rows[index]}
        onRowClick={event => console.log(event)}
        columns={[
          {
            width: 200,
            flexGrow: 0.5,
            label: 'Name',
            dataKey: 'name',
          },
          {
            width: 120,
            flexGrow: 0.5,
            label: 'Email',
            dataKey: 'email',
          },
          {
            width: 120,
            flexGrow: 0.5,
            label: 'Subteam',
            dataKey: 'subteam',
          },
          {
            width: 120,
            flexGrow: 0.5,
            label: 'Subteam Role',
            dataKey: 'role',
          },
          {
            width: 120,
            flexGrow: 0.5,
            label: 'Program',
            dataKey: 'program',
          },
        ]}
      />
    </Paper>
  );
}


export default ReactVirtualizedTable;
