import transactions from "data/transactions";
import { Subject } from "rxjs";

const subject = new Subject();

const initialState: TransactionStoreType = {
  balance: {
    total: 150,
    expense: 150,
    income: 300,
  },
  transactions: transactions,
  wallets: {
    Wallet: {
      total: 150,
      expense: 150,
      income: 300,
    },
    Saving: {
      total: 0,
      expense: 0,
      income: 0,
    },
    "Debt&Loan": {
      total: 0,
      expense: 0,
      income: 0,
    },
  },
  isLoading: false,
};
let state = initialState;

const transactionsStore = {
  state,
  init: () => subject.next(state),
  subscribe: (setState: (state: any) => void) => subject.subscribe(setState),
  setLoading: () => {
    state.isLoading = true;
    return subject.next(state);
  },

  addTransactions: (transaction: TransactionDataType, date: Date) => {
    // ind transaction
    const trans = state.transactions.find(
      (e) => e.date.toLocaleDateString() === date.toLocaleDateString()
    );
    const amount: number = transaction.amount;
    const isIncome: boolean = amount > 0;

    // Update balance
    state.balance.total += amount;
    state.balance.income += isIncome ? amount : 0;
    state.balance.expense += isIncome ? 0 : -amount;

    // Update wallet
    const wallet = state.wallets[transaction.wallet];
    if (!wallet) {
      throw new Error("Invalid transaction. Wallet not found");
    }
    wallet.total += amount;
    wallet.income += isIncome ? amount : 0;
    wallet.expense += isIncome ? 0 : -amount;

    // Update transaction
    if (!trans) {
      state.transactions.unshift({
        date,
        data: [transaction],
        income: isIncome ? amount : 0,
        expense: isIncome ? 0 : -amount,
        total: amount,
      });
    } else {
      trans.data.unshift(transaction);
      trans.income += isIncome ? amount : 0;
      trans.expense += isIncome ? 0 : -amount;
      trans.total += amount;
    }

    // Publish changes
    state = { ...state };
    return subject.next(state);
  },

  deleteTransaction(date: Date, index: number) {
    // Find transaction
    const i = state.transactions.findIndex(
      (e) => e.date.toLocaleDateString() === date.toLocaleDateString()
    );
    const trans = i >= 0 ? state.transactions[i] : undefined;
    if (!trans || index >= trans?.data.length) {
      throw new Error("Invalid transaction. No transaction found");
    }
    const amount: number = trans.data[index].amount;
    const isIncome: boolean = amount > 0;

    // Update balance
    state.balance.total -= amount;
    state.balance.income -= isIncome ? amount : 0;
    state.balance.expense -= isIncome ? 0 : -amount;

    // Update wallet
    const wallet = state.wallets[trans.data[index].wallet];
    if (!wallet) {
      throw new Error("Invalid transaction. Wallet not found");
    }
    wallet.total += amount;
    wallet.income -= isIncome ? amount : 0;
    wallet.expense -= isIncome ? 0 : -amount;

    // Update transaction
    trans.data.splice(index, 1);
    if (!trans.data.length) state.transactions.splice(i, 1);
    trans.income -= isIncome ? amount : 0;
    trans.expense -= isIncome ? 0 : -amount;
    trans.total -= amount;

    // Publish changes
    state = { ...state };
    return subject.next(state);
  },
};

export default transactionsStore;
