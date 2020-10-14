//TODO: find better way to describe this type
interface StoreType {
  init: () => void;
  subscribe: (setState: (state: any) => void) => Subscription;
  [key: string]: Record<
    () => void,
    (setState: (state: any) => void) => Subscription
  >;
}

interface StoreStateType {
  isLoading: boolean;
}

interface TransactionStoreType extends StoreStateType {
  balance: BalanceType;
  transactions: TransactionsType[];
  wallets: { [name: string]: BalanceType };
  isLoading: boolean;
}

interface AuthStoreType extends StoreStateType {
  isAuthenticated: boolean;
}
