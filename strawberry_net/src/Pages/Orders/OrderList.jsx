import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Gradient } from "../UserInfo/Gradient";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import ExpandLessIcon from "@material-ui/icons/ExpandLess";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Spinner } from "../../Components/Spinner";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#fff",
    color: "#623381",
    fontSize: "18px",
    fontWeight: 900
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

// function createData(name, date, orderStatus, orderTot, orderId) {
//   return { name, date, orderStatus, orderTot, orderId };
// }

// const date = new Date();
// const rows = [
//   createData("", date.toDateString(), "Proccessing", 240, 11111111900),
//   createData("", date.toDateString(), "Shipped", 3700, 11111111902),
//   createData("", date.toDateString(), "Delivered", 204, 11111111903),
//   createData("", date.toDateString(), "Shipped", 678, 11111111908),
//   createData("", date.toDateString(), "Delivered", 498, 11111111912)
// ];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    width: "60%",
    margin: "auto"
  },
  btns: {
    backgroundColor: "#623381",
    cursor: "pointer",
    color: "#fff",
    border: "none",
    width: "100px",
    height: "30px",
    fontWeight: "800"
  },
  icons: {
    color: "#623381",
    fontWeight: "900"
  }
});

export default function OrderList() {
    // const Uorders = useSelector(state => state.auth.user.orders)
    const user = useSelector(state => state.auth.user)
    const isLoading = useSelector(state => state.auth.isLoading)
    console.log(user)

    const rows = user&& user.orders
      const history = useHistory()
    const handletrack=(id)=>{
        history.replace(`/user/ordertracking/${id}`)
    }

  const classes = useStyles();

  return  isLoading?<div><Spinner /></div>:(
    <>
    { 
   user&& <div>
     
        <TableContainer>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Order Number</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows && rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                <KeyboardArrowDownIcon className={classes.icons} />
              </StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.orderStatus}</StyledTableCell>
              <StyledTableCell align="right">{row.orderTot} ₹</StyledTableCell>
              <StyledTableCell align="right">{row.orderId}</StyledTableCell>
              <StyledTableCell align="right">
                <button className={classes.btns} onClick={(e)=>handletrack(row.orderId)}>Track It</button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    }
    </>
  );
}
