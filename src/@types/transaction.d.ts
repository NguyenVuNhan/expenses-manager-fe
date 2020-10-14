interface BalanceType {
  total: number;
  expense: number;
  income: number;
}

interface WalletType extends BalanceType {
  name: string;
}

interface TransactionsType {
  date: Date;
  data: TransactionDataType[];
  income: number;
  expense: number;
  total: number;
}

interface TransactionDataType {
  wallet: string;
  category: string;
  amount: number;
  note: string;
}
