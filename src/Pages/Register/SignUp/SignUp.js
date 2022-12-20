import React, { useContext, useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Link,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const { createUser, signInWithGoogle } =
    useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");
  // const [createdUserEmail, setCreatedUser] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const paperStyle = {
    padding: "40px 20px",
    width: 380,
    margin: "20px auto",
    border: "rounded",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };

  // const onSubmit = (data) => console.log(data);

  const handleSignUp = (data) => {
    console.log(data);
    setSignUPError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Created Successfully.");
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        setSignUPError(error.message);
      });
  };

  // Google SignIn
  const handleGoogleSignIn = (data) => {
    signInWithGoogle(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        // setCreatedUser(data.email);

        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="my-32">
      <Grid>
        <Paper elevation={21} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineOutlinedIcon />
            </Avatar>
            <h2 style={headerStyle}>Sign Up</h2>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create an account !
            </Typography>
          </Grid>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <TextField
              fullWidth
              label="Name"
              placeholder="Enter your name"
              name="Name"
              {...register("Name", {
                required: "Name is Required",
              })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
            <TextField
              fullWidth
              label="Email"
              placeholder="Enter your email"
              {...register("email", {
                required: "email is Required",
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <FormControl component="fieldset" style={marginTop}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="Gender"
                style={{ display: "initial" }}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio {...register("Gender")} color="primary" />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio {...register("Gender")} color="primary" />}
                  label="Male"
                />
                <FormControlLabel
                  value="others"
                  control={<Radio {...register("Gender")} color="primary" />}
                  label="Others"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              fullWidth
              label="Phone Number"
              placeholder="Enter your phone number"
              {...register("phone", {
                required: "phone number is Required",
              })}
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
            <TextField
              fullWidth
              label="Password"
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters long",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            {/*  <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              {...register("confirm", {
                required: "please,confirm your password",
              })}
            />
            {errors.confirm && (
              <p className="text-red-500">{errors.confirm.message}</p>
            )} */}
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  name="checked"
                  {...register("checkbox")}
                />
              }
              label="I accept the terms and conditions."
            />
            <Button type="submit" variant="contained" fullWidth color="primary" className="bg-green-500 my-1">
              Sign up
            </Button>
            {signUpError && <p className="text-red-600">{signUpError}</p>}
            <Typography>
              {" "}
              Do you have already an account ?<Link href="/login">Login</Link>
            </Typography>
            <div className="text-center my-1 font-medium">OR</div>

            <div className="flex items-center ">
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
              <p className="px-3 text-lg dark:text-gray-400 my-1">
                Signup with social account
              </p>
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            </div>
            <div className="flex justify-center ">
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

export default SignUp;
