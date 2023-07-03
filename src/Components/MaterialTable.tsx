import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

interface Data {
  id: number;
  name: string;
  amount: number;
  category: string;
}

interface Props {
  data: Data[];
  onDelete: (id: number) => void
}

const AccountTable = ({ data, onDelete }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Topic</TableCell>
            <TableCell align="left">Amount</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.amount}</TableCell>
              <TableCell align="left">{row.category}</TableCell>
              <TableCell align="right">
                <Button variant="outlined" onClick={()=> onDelete(row.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell className="total-cell" align="left">
              Total
            </TableCell>
            <TableCell className="total-cell" align="left">
              ₹{data.reduce((acc, item) => item.amount + acc, 0)}
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AccountTable;
