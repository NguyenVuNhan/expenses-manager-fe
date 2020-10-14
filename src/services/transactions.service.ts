import { transactionsStore } from "store";

export const addTransaction = (
  transaction: TransactionDataType,
  date: Date = new Date()
): void => {
  transactionsStore.setLoading();
  //TODO: push new transaction to server

  transactionsStore.addTransactions(transaction, date);
};

export const deleteTransaction = (date: Date, index: number): void => {
  transactionsStore.setLoading();
  //TODO: remove tran server

  transactionsStore.deleteTransaction(date, index);
};
