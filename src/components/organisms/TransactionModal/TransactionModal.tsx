import React from "react";
import { useForm } from "react-hook-form";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { addTransaction } from "services/transactions.service";
import FormSelect from "components/atoms/FormSelect/FormSelect";
import { isEmpty } from "helpers/validate.helper";
import ModalTemplate from "components/templates/modal.templace";

interface Props {
  open: boolean;
  close: () => void;
}

const wallets = ["Wallet", "Saving", "Debt&Loan"];
const categories = ["Bills & Utilities", "Business", "Education"];

const TransactionModal = ({ open, close }: Props) => {
  const { handleSubmit, register, errors, setValue, setError } = useForm<
    TransactionFormType
  >();

  const onSubmit = handleSubmit((data: TransactionFormType) => {
    const date: Date | undefined = data.date;

    // Validate data
    if (isEmpty(data.category)) {
      setError("category", {
        type: "manual",
        message: "Please select a category",
      });
      return;
    }

    console.log(data.category);
    console.log(typeof data.category);

    if (!data.wallet) data.wallet = wallets[0];
    // Work around to for rhf
    if (typeof data.amount === "string") data.amount = parseInt(data.amount);

    delete data.date;
    if (date) addTransaction(data, new Date(date));
    else addTransaction(data);
    close();
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
          <Grid item className="w-100" sm={4}>
            <FormSelect<TransactionFormType>
              label="Wallet"
              name="wallet"
              className="w-100"
              setValue={setValue}
              defaultValue={wallets[0]}
            >
              {wallets.map((e, i) => (
                <MenuItem key={i} value={e}>
                  {e}
                </MenuItem>
              ))}
            </FormSelect>
          </Grid>

          <Grid item className="w-100" sm={4}>
            <TextField
              select
              label="Category"
              name="category"
              className="w-100"
              error={Boolean(errors.category)}
              helperText={
                Boolean(errors.category) ? errors.category?.message : ""
              }
              defaultValue="none"
            >
              <MenuItem value="none" disabled>
                Category
              </MenuItem>
              {categories.map((e, i) => (
                <MenuItem key={i + 1} value={e}>
                  {e}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item className="w-100" sm={4}>
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
          <Grid item className="w-100" sm={4}>
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
          <Grid item className="w-100" sm={8}>
            <TextField
              id="note"
              label="note"
              name="note"
              className="w-100"
              inputRef={register}
            />
          </Grid>
          <Grid item container direction="row" className="w-100" sm={12}>
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
