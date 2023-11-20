import React, { useContext, useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from "react-hot-toast";
import Login from "../Login/Login";
import Popup from "../../Shared/Popup";

const SignUp = ({ closePopup, closeLogin }) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const [openPopup, setOpenPopup] = useState(false);

  const { createUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");
  // const [createdUserEmail, setCreatedUser] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const paperStyle = {
    padding: "6px 10px",
    width: 420,
    width: 420,
    margin: "auto auto",
    border: "rounded",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "teal" };
  const marginTop = { marginTop: 5 };
  const btnStyle = { margin: "8px 2px", backgroundColor: "teal" };
  const btn1Style = {
    width: "16px",
    height: "16px",
    color: "teal",
    marginLeft:"5px",marginRight:"1px"
  };
  // const onSubmit = (data) => console.log(data);

  const handleSignUp = (data) => {
    console.log(data);
    setSignUPError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Created Successfully");
        // closePopup(false)
        navigate("/");

        const userInfo = {
          displayName: data.name,
          photoURL: data.photo,
        };
        updateUserProfile(userInfo)
          .then(() => {
            saveUser(data.name, data.email,data.Gender);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUPError(error.message);
      });

    const saveUser = (name, email, Gender) => {
      const user = { name, email, Gender };
      console.log(user);
      fetch("https://hospital-management-server-one.vercel.app/user", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("save user", data);

          navigate("/");
        });
    };
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

  const toggleForm = () => {
    closePopup(false)
    closeLogin(true)
  };
  return (
    <>
        <Paper elevation={3} style={paperStyle}>
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
              name="name"
              {...register("name", {
                required: "Name is Required",
              })}
            />
            {errors.name && (
              <p style={{ color: "red" }}>{errors.name.message}</p>
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
              <p style={{ color: "red" }}>{errors.email.message}</p>
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
              <p style={{ color: "red" }}>{errors.password.message}</p>
            )}
           
            <Button
              onClick={() => closePopup(false)}
              type="submit"
              variant="contained"
              fullWidth
              color="primary"
              className="bg-teal-500 my-1"
              style={btnStyle}
            >
              Sign up
            </Button>
            {signUpError && <p style={{ color: "red" }}>{signUpError}</p>}
            <Typography>
              {" "}
              Do you have already an account ?
              <Button
                //  onClick={() => setOpenPopup(true)}
                onClick={toggleForm}
                // className="text-[#13A2B7] font-medium"
                style={{ color: "teal",   fontWeight: "medium", }}
              >
                  Login
              </Button>
            </Typography>
            <div
              className="text-center my-1 font-medium"
              Dividers
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
                className="p-3 rounded-sm text-xl "
              > Continue with
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
          title="Login Form"
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        >
          <Login></Login>
        </Popup>
    </>
  );
};

export default SignUp;
