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
import { useLocation, useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import Popup from "../../Shared/Popup";
import { color } from "@mui/system";
const Login = () => {

  const paperStyle = {
    padding: "50px 30px",
    height: 520,
    width: 350,
    margin: "40px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnStyle = { margin: "8px 0",backgroundColor:'#1bbd7e' };
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const [openPopup, setOpenPopup] = useState(false)
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
        <Paper  style={paperStyle}>
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
              <span className="text-center">Create a new account ?</span>
              <Link to="/signup"  className="text-green-600 font-medium">Sign Up</Link>
              
            </Typography>
            <div className="text-center my-1 font-medium"dividers sx={{textAlign:'center'}} style={{textAlign: "center"}}>OR</div>

            <div className="flex items-center  space-x-1">
              <div className="   bg-gray-700"></div>
              <p className="text-lg text-gray-400 my-1">
                Signup with social account
              </p>
           
            </div>
            <div className="flex justify-center ">
              <Button
                 type="submit"
                 color="primary"
                 variant="contained"
             
                 fullWidth
               
                style={btnStyle}
                onClick={handleGoogleSignIn}
                
                // className="bg-green-500 my-1"
              >
             Google
              </Button>
            </div>
          </form>
        </Paper>
      </Grid>
      <Popup openPopup = {openPopup} setOpenPopup={setOpenPopup}>
        
      </Popup>
    </div>
  );
};

export default Login;
