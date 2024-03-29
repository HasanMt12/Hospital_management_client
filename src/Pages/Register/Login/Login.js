import React, { useContext, useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@mui/icons-material//LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Popup from "../../Shared/Popup";
import SignUp from "../SignUp/SignUp";

const Login = ({ closePopup , openModal}) => {
  const paperStyle = {
    padding: "5px 10px",
    height: 400,
    width: 420,
    margin: "auto auto",
  };
  const avatarStyle = { backgroundColor: "teal" };
  const btnStyle = {
    margin: "8px 2px",
    backgroundColor: "teal",
  };
  const btn1Style = {
    width: "16px",
    height: "16px",
    color: "teal",
    marginLeft:"5px",marginRight:"1px"
  };
  const toggleForm = () => {
    closePopup(false)
    openModal(true)
  };

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const [openPopup, setOpenPopup] = useState(false);

  // const [loginUserEmail, setLoginUserEmail] = useState("");

  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // setLoginUserEmail(data.email);
        toast.success("successfully login");

        // closePopup(false)

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
    <>
     
        <Paper elevation={3} style={paperStyle} >
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
              <p style={{ color: "red" }}>{errors.email.message}</p>
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
              <p style={{ color: "red" }}>{errors.password.message}</p>
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
              onClick={() => closePopup(false)}
              type="submit"
              color="primary"
              variant="contained"
              style={btnStyle}
              fullWidth
              className="bg-teal-500 my-1"
            >
              Sign in
            </Button>

            {loginError && <p style={{ color: "red" }}>{loginError}</p>}
            <Typography style={{ textAlign: "center" }}>
              {" "}
              <span
                // className="text-center"
                style={{
                  fontStyle: "font-medium",
                  marginTop: "10px",
                  marginBottom: "10px",
                  fontSize: "17px",
                  textAlign: "center",
                }}
              >
                Create a new account ?
              </span>
              <Button
                onClick={toggleForm}
                
                close
                className="text-[#13A2B7] font-medium"
                style={{
                  color: "teal",
                  fontWeight: "medium",
                 
                  marginTop: "10px",
                  marginBottom: "10px",
                  textAlign: "center",
                  
                }}
              >
                Sign Up
              </Button>
            </Typography>
            <div
              className="text-center my-1 font-medium "
              dividers
              style={{ textAlign: "center" }}
            >
              OR
            </div>

       
            <div
              className="flex justify-center "
              style={{ display: "flex justify-center" }}
            >
              <Button
                variant="contained"
                fullWidth
                color="success"
                onClick={handleGoogleSignIn}
                aria-label="Log in with Google"
                className="p-3 rounded-sm text-lg "
                style={{
                  padding: "7px",
                  border: "rounded",
                  fontSize: "14px",
                  color: "teal",
                }}
              >
                 Continue with
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-4 4-5 fill-current btn pl-4 bg-teal-500"

                  // style={{ width: "23px", height: "23px" }}
                  style={btn1Style}
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg> oogle 
              </Button>
            </div>
          </form>
        </Paper>
      <Popup
        title="SignUp Form"
        openModal={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <SignUp closePopup={setOpenPopup} > </SignUp>
      </Popup>
    </>
  );
};

export default Login;
