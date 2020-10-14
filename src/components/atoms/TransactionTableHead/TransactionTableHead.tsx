import React, { memo } from "react";
import clsx from "clsx";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  day: string;
  weekday: WeekdayType;
  month: MonthType;
  year: number;
  total: number;
}

const useStyles = makeStyles({
  day: {
    width: 30,
  },
  weekday: {
    lineHeight: 1,
  },
});

const TransactionTableHead = ({ day, weekday, month, year, total }: Props) => {
  const classes = useStyles();
  const increase = total > 0;

  return (
    <TableHead>
      <TableRow>
        <TableCell className={clsx("py-0 pr-0", classes.day)}>
          <Typography variant="h3">{day}</Typography>
        </TableCell>
        <TableCell className="py-0 pl-1">
          <Typography className={classes.weekday} variant="h6">
            {weekday}
          </Typography>
          <Typography variant="caption">
            {month} - {year}
          </Typography>
        </TableCell>
        <TableCell align="right" colSpan={2}>
          <Typography
            className={clsx(increase ? "text-success" : "text-danger")}
            variant="h4"
          >
            {increase ? " +" : " "}
            {total}
          </Typography>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default memo(TransactionTableHead);
