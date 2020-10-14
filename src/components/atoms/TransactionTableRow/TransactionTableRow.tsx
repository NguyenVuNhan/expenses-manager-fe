import React, { memo } from "react";
import clsx from "clsx";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { makeStyles } from "@material-ui/core/styles";

interface Props extends TransactionDataType {
  index: number;
  delTransaction: (index: number) => () => void;
}

const useStyles = makeStyles({
  cell1: {
    width: 30,
  },
  cellTitle: {
    lineHeight: 1,
  },
  deleteCell: {
    width: 10,
  },
});

const TransactionTableRow = ({
  category,
  note,
  wallet,
  amount,
  delTransaction,
  index,
}: Props) => {
  const classes = useStyles();
  const increase = amount > 0;

  return (
    <TableRow>
      <TableCell className={clsx("py-0 pr-0", classes.cell1)}>
        <ShoppingCartIcon />
      </TableCell>
      <TableCell className="py-0 pl-1">
        <Typography className={classes.cellTitle} variant="h6">
          {category}
        </Typography>
        <Typography variant="caption">{note}</Typography>
      </TableCell>
      <TableCell className="pr-0" align="right">
        <Typography className={classes.cellTitle} variant="h6">
          {wallet}
          <Typography
            className={clsx(increase ? "text-success" : "text-danger")}
            variant="h6"
            component="span"
          >
            {increase ? " +" : " "}
            {amount}
          </Typography>
        </Typography>
      </TableCell>
      <TableCell className={clsx("p-0", classes.deleteCell)}>
        <IconButton onClick={delTransaction(index)}>
          <DeleteForeverIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default memo(TransactionTableRow);
