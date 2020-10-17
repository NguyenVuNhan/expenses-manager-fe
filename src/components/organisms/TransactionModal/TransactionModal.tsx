import React from "react";
import { useForm, Controller } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { addTransaction } from "services/transactions.service";
import { isEmpty } from "helpers/validate.helper";
import ModalTemplate from "components/templates/modal.templace";

interface Props {
  open: boolean;
  close: () => void;
}

const wallets = ["Wallet", "Saving", "Debt&Loan"];
const categories = ["Bills & Utilities", "Business", "Education"];

const TransactionModal = ({ open, close }: Props) => {
  const { handleSubmit, register, errors, setError, control } = useForm<
    TransactionFormType
  >();

  const onSubmit = handleSubmit((data: TransactionFormType) => {
    const date: Date | undefined = data.date;

    console.log(data);
    console.log(data.category !== "");
    console.log(typeof data.category);

    // // Validate data
    // if (isEmpty(data.category)) {
    //   setError("category", {
    //     type: "manual",
    //     message: "Please select a category",
    //   });
    //   return;
    // }

    // if (!data.wallet) data.wallet = wallets[0];
    // Work around to for rhf
    if (typeof data.amount === "string") data.amount = parseInt(data.amount);
    console.log(errors);

    return;

    // delete data.date;
    // if (date) addTransaction(data, new Date(date));
    // else addTransaction(data);
    // close();
  });

  return (
    <ModalTemplate
      title="Add new transaction"
      open={open}
      close={close}
      label={"transaction-modal-label"}
      description={"transaction-modal-description"}
    >
      <form onSubmit={onSubmit}>
        <Grid className="m-0 w-100" container justify="center" spacing={3}>
          <Grid item sm={4}>
            <FormControl fullWidth>
              <InputLabel>Wallet</InputLabel>
              <Controller
                control={control}
                name="wallet"
                defaultValue={wallets[0]}
                rule={{ required: true }}
                as={
                  <Select label="Wallet">
                    {wallets.map((e, i) => (
                      <MenuItem key={i} value={e}>
                        {e}
                      </MenuItem>
                    ))}
                  </Select>
                }
              />
            </FormControl>
          </Grid>

          <Grid item sm={4}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Controller
                control={control}
                name="category"
                defaultValue=""
                rule={{
                  required: "select one option",
                  // validate: (value: string) =>
                  //   value !== "" || "Should not be empty",
                }}
                as={
                  <Select label="Category">
                    <MenuItem value="" disabled>
                      Category
                    </MenuItem>
                    {categories.map((e, i) => (
                      <MenuItem key={i + 1} value={e}>
                        {e}
                      </MenuItem>
                    ))}
                  </Select>
                }
              />
            </FormControl>
          </Grid>

          <Grid item sm={4}>
            <TextField
              type="number"
              label="Amount"
              name="amount"
              className="w-100"
              error={Boolean(errors.amount)}
              inputRef={register({
                required: true,
              })}
            />
          </Grid>
          <Grid item sm={4}>
            <TextField
              id="date"
              name="date"
              label="Date"
              type="date"
              className="w-100"
              inputRef={register}
              defaultValue={new Date().toISOString().substring(0, 10)}
            />
          </Grid>
          <Grid item sm={8}>
            <TextField
              id="note"
              label="note"
              name="note"
              className="w-100"
              inputRef={register}
            />
          </Grid>
          <Grid item container direction="row" sm={12}>
            <div className="flex-grow-1" />
            <Button
              className="mr-1"
              variant="contained"
              color="inherit"
              onClick={close}
              type="button"
            >
              Cancel
            </Button>
            <Button
              className="ml-1"
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </ModalTemplate>
  );
};

export default TransactionModal;
