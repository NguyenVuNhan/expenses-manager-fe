const transactions: any[] = [
  {
    date: new Date("October 6, 2020 03:24:00"),
    data: [
      {
        category: "Food",
        note: "",
        wallet: "Wallet",
        amount: -50,
      },
      {
        category: "Part-Time Job",
        note: "",
        wallet: "Wallet",
        amount: 100,
      },
    ],
    income: 100,
    expense: 50,
    total: 50,
  },
  {
    date: new Date("October 4, 2020 03:24:00"),
    data: [
      {
        category: "Electricity",
        note: "",
        wallet: "Wallet",
        amount: -100,
      },
      {
        category: "Part-Time Job",
        note: "",
        wallet: "Wallet",
        amount: 200,
      },
    ],
    income: 200,
    expense: 100,
    total: 100,
  },
];

export default transactions;
