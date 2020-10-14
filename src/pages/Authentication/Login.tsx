import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import AuthenticationTemplate from "components/templates/authentication.template";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import { loginService } from "services/auth.service";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleSubmit, register } = useForm<LoginFormType>();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data: LoginFormType) => {
    loginService(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AuthenticationTemplate>
        <Typography variant="h4" align="center">
          Login
        </Typography>
        <Typography className="text-muted" variant="subtitle1" align="center">
          Enter your username and password
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
        <Typography variant="subtitle1" align="right">
          <Link component={RouterLink} to="/forgot-password">
            Forgot Password
          </Link>
        </Typography>
        {/* TODO: Handle remember me */}
        <FormControlLabel
          control={<Checkbox name="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          className="w-100"
          variant="contained"
          color="primary"
          type="submit"
        >
          Login
        </Button>
        <Typography variant="subtitle1">
          Don't have an account yet?{" "}
          <Link component={RouterLink} to="/register">
            Sign up
          </Link>
        </Typography>
      </AuthenticationTemplate>
    </form>
  );
};

export default Login;
