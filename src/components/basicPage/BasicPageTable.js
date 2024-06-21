import DownloadIcon from "@mui/icons-material/Download";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import useStyles from "../../styles/pages/home/slider/slider";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

const columns = [
  { id: "name", label: "العنوان", minWidth: 170 },
  { id: "code", label: "النوع", minWidth: 100 },
  {
    id: "population",
    label: "تاريخ النشر",
    minWidth: 170,
    align: "right",
  },
  {
    id: "size",
    label: "عدد التحميلات",
    minWidth: 170,
    align: "right",
  },
  {
    id: "density",
    label: "تحميل",
    minWidth: 170,
    align: "right",
  },
];

function createData(name, population, size) {
  const density = <DownloadIcon />;

  const code = <img src="/assets/images/socialMedia/file.png" />;
  return { name, code, population, size, density };
}

const rows = [
  createData("ملف اعمال ", 2022, 10),
  createData("ملف اعمال ", 2022, 12),
  createData("ملف اعمال", 2022, 15),
  createData("ملف اعمال", 2022, 15),
  createData("ملف اعمال", 2022, 15),
  createData("ملف اعمال", 2022, 15),
];

export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const classes = useStyles();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    let newColumn = [];
  });

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", boxShadow: "none" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead className={classes.tableHeader}>
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
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
        rowsPerPageOptions={[10, 25, 100]}
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
