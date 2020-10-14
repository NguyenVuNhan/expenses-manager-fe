interface TransactionFormType extends TransactionDataType {
  date?: Date;
}

interface LoginFormType {
  email: string;
  password: string;
}

interface RegisterFormType extends LoginFormType {
  cpassword: string;
}
