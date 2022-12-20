import React, { useContext, useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@mui/icons-material//LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Login = () => {
  const paperStyle = {
    padding: "50px 30px",
    height: 520,
    width: 350,
    margin: "40px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnStyle = { margin: "8px 0" };
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  // const [loginUserEmail, setLoginUserEmail] = useState("");

  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  // const onSubmit = (data) => console.log(data);
  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // setLoginUserEmail(data.email);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
        setLoginError(error.message);
      });
  };

  // Google SignIn
  const handleGoogleSignIn = (data) => {
    signInWithGoogle(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        // setLoginUserEmail(data.email);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="my-32">
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <form onSubmit={handleSubmit(handleLogin)}>
            <TextField
              label="Email"
              placeholder="Enter your email"
              fullWidth
              required
              {...register("email", {
                required: "email is Required",
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              fullWidth
              required
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <FormControlLabel
              control={
                <Checkbox
                  name="checkedB"
                  color="primary"
                  {...register("checkbox")}
                  cursor="pointer"
                />
              }
              label="Remember me"
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnStyle}
              fullWidth
              className="bg-green-500 my-1"
            >
              Sign in
            </Button>
            {loginError && <p className="text-red-600">{loginError}</p>}
            <Typography>
              <Link href="#">Forgot password ?</Link>
            </Typography>
            <Typography class>
              {" "}
              <span className="text-center">Do you have an account ?</span>
              <Link href="/signup">Sign Up</Link>
            </Typography>
            <div className="text-center my-1 font-medium">OR</div>

            <div className="flex items-center  space-x-1">
              <div className="flex-1  sm:w-16 dark:bg-gray-700"></div>
              <p className="px-3 text-lg dark:text-gray-400 my-1">
                Signup with social account
              </p>
              <div className="flex-1  sm:w-16 dark:bg-gray-700"></div>
            </div>
            <div className="flex justify-center space-x-4">
              <Button
                variant="contained"
                fullWidth
                color="success"
                onClick={handleGoogleSignIn}
                aria-label="Log in with Google"
                className="p-3 rounded-sm text-xl "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current btn text-green-500"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </Button>
            </div>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;
