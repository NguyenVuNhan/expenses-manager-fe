import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Doughnut } from "react-chartjs-2";
import WidgetTemplate from "components/templates/widget.template";
import Loading from "pages/Loading";
import { useStore } from "hooks";
import { transactionsStore } from "store";

const WalletWidget = () => {
  const transactionsHook = useStore<TransactionStoreType>(transactionsStore);

  if (!transactionsHook) return <Loading />;
  const wallets = transactionsHook.wallets;

  const options = {
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  };

  return (
    <WidgetTemplate title="Your Wallets">
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {Object.entries(wallets).map(([name, wallet], index) => {
          const data = {
            datasets: [
              {
                data: [
                  wallet.expense,
                  wallet.income,
                  wallet.income + wallet.expense === 0 && 100,
                ],
                backgroundColor: ["#FF6384", "#4DC71F"],
                hoverBackgroundColor: ["#FF6384", "#4DC71F"],
              },
            ],
          };
          return (
            <div key={index}>
              <Doughnut data={data} options={options} width={180} />
              <Typography
                variant="h6"
                align="center"
                className="font-weight-bold mt-2"
              >
                {name}
              </Typography>
              <Typography
                variant="h6"
                align="center"
                className="text-muted mb-2"
              >
                {wallet.total} &euro;
              </Typography>
            </div>
          );
        })}
      </Box>
    </WidgetTemplate>
  );
};

export default WalletWidget;
