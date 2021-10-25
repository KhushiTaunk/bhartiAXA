import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

{/* Sticky Head Table (Inside Tabs.js) */}
{/* For adding tables under the 'Who can Buy' tab in eFutureinvest Page */}
const columns = [
 
  {
    id: 'population',
    label: <b>Parameter</b> ,
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
    fontFamily: 'Montserrat',
  },
  {
    id: 'size',
    label: <b>Eligibility</b>,
    fontFamily: 'Montserrat',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  
];

function createData(population, size) {
  const density = population / size;
  return {population, size, density };
}

const rows = [
  createData('Minimum age at entry', '18 years (age last birthday)'),
  createData('Maximum age at entry', '60 years (age last birthday)'),
  createData('Maximum age at Maturity', '70 years (age last birthday)'),
  createData( 'Premium modes', 'Yearly, Half-yearly, Quarterly* and Monthly*.'),
  createData( 'Minimum Premium', 'Premium Payment Term: 5 years'),
  createData( 'Maximum Premium', '₹ 1,00,00,000 for 5 pay'),
  createData( 'Policy benefit period', '10 years'),
  createData( 'Premium payment term', 'Single Pay and 5 years'),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 50]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
