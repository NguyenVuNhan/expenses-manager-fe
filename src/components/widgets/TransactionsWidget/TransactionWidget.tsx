import React from "react";
import clsx from "clsx";
import Loading from "pages/Loading";
import WidgetTemplate from "components/templates/widget.template";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TransactionTableHead from "components/atoms/TransactionTableHead";
import TransactionTableRow from "components/atoms/TransactionTableRow";
import { useStore } from "hooks";
import { transactionsStore } from "store";
import { makeStyles } from "@material-ui/core/styles";
import { getDateFormat } from "helpers/date.helper";
import { deleteTransaction } from "services/transactions.service";

const useStyles = makeStyles({
  widget: {
    overflow: "auto",
    width: "100%",
    height: "90%",
  },
  table: {
    width: "100%",
  },
});

const TransactionWidget = () => {
  const transactionsHook = useStore<TransactionStoreType>(transactionsStore);
  const classes = useStyles();

  if (!transactionsHook) return <Loading />;

  const transactions: TransactionsType[] = transactionsHook.transactions;

  const delTransaction = (date: Date) => (index: number) => () => {
    deleteTransaction(date, index);
  };

  return (
    <WidgetTemplate title="Transaction">
      <div className={clsx(classes.widget, "noScrollBar")}>
        {transactions.map((transaction, i) => {
          const date = getDateFormat(transaction.date);
          return (
            <TableContainer
              key={i}
              className="my-2"
              component={Paper}
              variant="outlined"
            >
              <Table className={classes.table} aria-label="transactions table">
                <TransactionTableHead {...date} total={transaction.total} />
                <TableBody>
                  {transaction.data.map((item, j) => (
                    <TransactionTableRow
                      key={j}
                      index={j}
                      delTransaction={delTransaction(transaction.date)}
                      {...item}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );
        })}
      </div>
    </WidgetTemplate>
  );
};

export default TransactionWidget;
