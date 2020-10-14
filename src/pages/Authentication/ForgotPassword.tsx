import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AuthenticationTemplate from "components/templates/authentication.template";
import { resetPasswordService } from "services/auth.service";

const ForgotPassword = () => {
  const { handleSubmit, register } = useForm<LoginFormType>();
  const history = useHistory();

  const onSubmit = (data: LoginFormType) => {
    resetPasswordService(data, history);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AuthenticationTemplate>
        <Typography variant="h4" align="center">
          Forgotten Password?
        </Typography>
        <Typography className="text-muted" variant="subtitle1" align="center">
          Enter your email to reset your password
        </Typography>
        <TextField
          className="w-100 my-2"
          id="email"
          name="email"
          label="Email"
          inputRef={register}
        />
        <Button
          className="w-100 mt-2"
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </AuthenticationTemplate>
    </form>
  );
};

export default ForgotPassword;
