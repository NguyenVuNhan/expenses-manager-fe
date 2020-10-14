import React, { useState } from "react";
import AuthenticationTemplate from "components/templates/authentication.template";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { registerService } from "services/auth.service";

const Register = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showCpassword, setShowCpassword] = useState<boolean>(false);
  const { handleSubmit, register } = useForm<RegisterFormType>();
  const history = useHistory();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickShowCpassword = () => {
    setShowCpassword(!showCpassword);
  };

  const onSubmit = (data: RegisterFormType) => {
    registerService(data, history);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AuthenticationTemplate>
        <Typography variant="h4" align="center">
          Register
        </Typography>
        <Typography className="text-muted" variant="subtitle1" align="center">
          Enter your details to create your account
        </Typography>
        <TextField
          className="w-100 my-2"
          id="email"
          name="email"
          label="Email"
          inputRef={register}
        />
        <TextField
          className="w-100 my-2"
          id="password"
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          inputRef={register}
        />
        <TextField
          className="w-100 my-2"
          id="cpassword"
          name="cpassword"
          label="Confirm Password"
          type={showCpassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowCpassword}
                >
                  {showCpassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          inputRef={register}
        />
        <Button
          className="w-100 mt-2"
          variant="contained"
          color="primary"
          type="submit"
        >
          Register
        </Button>
        <Typography variant="subtitle1">
          Already registered?{" "}
          <Link component={RouterLink} to="/login">
            Login
          </Link>
        </Typography>
      </AuthenticationTemplate>
    </form>
  );
};

export default Register;
