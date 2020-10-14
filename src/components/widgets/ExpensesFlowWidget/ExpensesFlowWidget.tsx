import React from "react";
import { Bar } from "react-chartjs-2";
import Loading from "pages/Loading";
import WidgetTemplate from "components/templates/widget.template";
import { useStore } from "hooks";
import { transactionsStore } from "store";
import { getDaysInMonth } from "helpers/date.helper";

const ExpensesFlowWidget = () => {
  const transactionsHook = useStore<TransactionStoreType>(transactionsStore);

  if (!transactionsHook) return <Loading />;
  const transactions: TransactionsType[] = transactionsHook.transactions;
  const size = getDaysInMonth(
    transactions[0].date.getFullYear(),
    transactions[0].date.getMonth()
  );

  let expenses = Array(size);
  let income = Array(size);
  transactions.forEach((e) => {
    const index = e.date.getDate() - 1;
    expenses[index] = -e.expense;
    income[index] = e.income;
  });

  const data = {
    labels: Array.from({ length: size }, (v, i) => i + 1),
    datasets: [
      {
        label: "Expenses",
        backgroundColor: "rgba(255,99,132,1)",
        stack: "stack",
        data: [...expenses],
      },
      {
        label: "Income",
        backgroundColor: "rgba(77,199,31,1)",
        stack: "stack",
        data: [...income],
      },
    ],
  };

  return (
    <WidgetTemplate title="Expenses">
      <Bar data={data} />
    </WidgetTemplate>
  );
};

export default ExpensesFlowWidget;
