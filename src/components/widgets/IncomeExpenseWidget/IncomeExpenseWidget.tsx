import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import clsx from "clsx";
import WidgetTemplate from "components/templates/widget.template";
import Loading from "pages/Loading";
import { useStore } from "hooks";
import { transactionsStore } from "store";
import { addTransaction } from "services/transactions.service";
import TransactionModal from "components/organisms/TransactionModal";

const useStyles = makeStyles((theme) => ({
  btn: {
    color: theme.palette.common.white,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    margin: theme.spacing(1),
    width: 120,
    [theme.breakpoints.up("sm")]: {
      width: 200,
    },
    "& .MuiSvgIcon-root": {
      color: theme.palette.common.white,
    },
  },
  incomeBtn: {
    backgroundColor: "#4DC71F",
  },
  expenseBtn: {
    backgroundColor: "#FF6384",
  },
}));

const IncomeExpenseWidget = () => {
  const transactionsHook = useStore<TransactionStoreType>(transactionsStore);
  const [modalOpen, setModalOpen] = useState<boolean>(true);
  const classes = useStyles();

  if (!transactionsHook) return <Loading />;
  const balance: BalanceType = transactionsHook.balance;
  const data = {
    labels: ["Expenses", "Income"],
    datasets: [
      {
        data: [
          balance.expense,
          balance.income,
          balance.expense + balance.income === 0 && 100,
        ],
        backgroundColor: ["#FF6384", "#4DC71F"],
        hoverBackgroundColor: ["#FF6384", "#4DC71F"],
      },
    ],
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <WidgetTemplate title="Income & Expense">
        <Doughnut data={data} />
        <Typography
          variant="h6"
          align="center"
          className="font-weight-bold mt-2"
        >
          Current Balance
        </Typography>
        <Typography variant="h6" align="center" className="text-muted mb-2">
          {balance.total} &euro;
        </Typography>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <Button
            className={clsx(classes.btn, classes.incomeBtn)}
            variant="contained"
            startIcon={<MonetizationOnIcon />}
            onClick={openModal}
          >
            New Income
          </Button>
          <Button
            className={clsx(classes.btn, classes.expenseBtn)}
            variant="contained"
            startIcon={<ShoppingCartIcon />}
          >
            New Expense
          </Button>
        </Box>
      </WidgetTemplate>
      <TransactionModal open={modalOpen} close={closeModal} />
    </>
  );
};

export default IncomeExpenseWidget;
