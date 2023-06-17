import React, { useState } from "react";

// import Box from "@mui/material/Box";
import "./Donate.css";
import hero from "../../../assets/882096_1029.jpg";

import {
  TextField,
  Button,
  Box,
  FormControlLabel,
  Checkbox,
  FormLabel,
  FormControl,
  RadioGroup,
  Radio,
  InputLabel,
  Switch,
  Select,
  MenuItem,
} from "@material-ui/core";
import "./Donate.css";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { Link } from "react-router-dom";
import Popup from "../../Shared/Popup";
import Modal from "../../Shared/Modal";
import Login from "../../Register/Login/Login";
import SignUp from "../../Register/SignUp/SignUp";
import { toast } from "react-hot-toast";

const useStyles = makeStyles((theme) => ({
  inputField: {
    width: "80%",
    margin: theme.spacing(1, 0),
  },
}));

const DonationForm = () => {
  const classes = useStyles();
  const {user} = useContext(AuthContext)
  console.log(user)
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [logmenu, setLogmenu] = useState(false);
   const [openPopup, setOpenPopup] = useState(false);
   const [openModal, setOpenModal] = useState(false);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const bloodDoner = {
      donerName: data.name,
      donerBloodGroup: data.bloodGroup,
      donerAddress:data.address,
      donerAge:data.age,
      donerBirthday:data.birthday,
      donerLastDonationDay: data.lastDonateDate,
      donerPhone:data.phone,
      donerEmail:data.email,
    };
    console.log(bloodDoner);

    fetch("https://hospital-management-server-one.vercel.app/donner",{
      method:"post",
      headers:{
        'content-type':'application/json'
      },body:JSON.stringify(bloodDoner)
    }).then(res=>res.json())
    .then(data=>console.log(data))

    toast.success('form submitted')
  };

  return (
    <div className="my-8 w-11/12 mx-auto ">
      <h1 className="text-4xl font-bold text-center mt-5 text-red-500 font-sans">
        <span className="text-teal-600">Donate</span> Blood
      </h1>
      <h1 className="text-2xl font-bold text-center my-1 text-teal-700 font-sans">
        Save a Life
      </h1>
      <p className="text-sm font-bold text-center my-1 mb-12 text-gray-500 font-sans">
        Please Fill the form below
      </p>
      <div className="box grid lg:grid-cols-2  md:grid-cols-1 grid-cols-1 lg:gap-10  gap-3  ">
        <div className="box-primary">
          <img
            src={hero}
            className="w-[80%]"
            data-aos="zoom-in-up"
            data-aos-duration="2500"
            alt=""
          />
        </div>
        <div className="box-secondary mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* 1) TextField */}
         <div className="flex justify-start mx-auto items-center gap-0">
           <div className="form-control w-[44%]">
              <TextField
                placeholder="Enter Your  Name"
                label=" Name"
                variant="outlined"
                fullWidth
                className={classes.inputField}
                name="name"
                {...register("name", {
                  required: "Name is Required",
                })}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            {/* 3) TextField */}
            <div className="form-control  w-[44%]">
              <TextField
                placeholder="Enter Your  Email"
                label=" Email"
                variant="outlined"
                fullWidth
                className={classes.inputField}
                name="email"
                {...register("email", {
                  required: "email is Required",
                })}
              />
              {errors.name && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
         </div>
           

            {/* 3) TextField */}
            
                 <div className="flex justify-start items-center"> 
                 
                 <div className="form-control w-[44%]">
              <TextField
                sx={{
                  borderColor: "teal",
                  borderTop: 1,
                  borderBottom: 1,
                }}
                placeholder="Enter Your Phone Number"
                label="Phone"
                type="phone"
                variant="outlined"
                fullWidth
                className={classes.inputField}
                {...register("phone", {
                  required: "phone number is Required",
                })}
              />
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </div>
            <div className="form-control w-[44%]">
              <TextField
                placeholder="Your age"
                label="Age"
                type="number"
                variant="outlined"
                fullWidth
                className={classes.inputField}
                {...register("age", {
                  required: "age  is Required",
                })}
              />
              {errors.age && (
                <p className="text-red-500">{errors.age.message}</p>
              )}
            </div>
                  </div>
            {/* 4) TextField */}
      <div className="form-control w-full">
              <TextField
                placeholder="Enter Your Address"
                label="Address"
                variant="outlined"
                fullWidth
                className={classes.inputField}
                {...register("address", {
                  required: "address is Required",
                })}
              />
              {errors.address && (
                <p className="text-red-500">{errors.address.message}</p>
              )}
            </div>

            
            <div className="flex justify-start items-center">  
              <div className="form-control">
              <p className="text-gray-500">Date of Birth</p>
              <TextField
                type="date"
                fullWidth
                className={classes.inputField}
                defaultValue={null}
                {...register("birthday", {
                  required: "date of birth is Required",
                })}
              />
              {errors.date && (
                <p className="text-red-500">{errors.date.message}</p>
              )}
              </div>
              <div className="form-control">
                <p className="text-gray-500">Last Donate Date</p>
                <TextField
                  margin="normal"
                  required
                  defaultValue="Hello World"
                  type="date"
                  fullWidth
                  className={classes.inputField}
                  {...register("lastDonateDate", {
                    required: "last donate date is Required",
                  })}
                />
                {errors.date && (
                  <p className="text-red-500">{errors.date.message}</p>
                )}
              </div>
              </div>
            

            {/* Radio Buttons */}
            <FormControl className={classes.inputField}>
              <FormLabel>Choose Your Gender</FormLabel>

              <RadioGroup row name="Gender">
                <FormControlLabel
                  value="female"
                  control={<Radio {...register("Gender")} />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio {...register("Gender")} />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio {...register("Gender")} />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>

            {/* Select */}
            <Box>
              <FormControl fullWidth className={classes.inputField}>
                <InputLabel id="demo-simple-select-label">
                  Blood Group
                </InputLabel>

                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  {...register("bloodGroup")}
                >
                  <MenuItem value="">Your Blood Group</MenuItem>
                  <MenuItem value="A+">A+</MenuItem>
                  <MenuItem value="A-">A-</MenuItem>
                  <MenuItem value="B+">B+</MenuItem>
                  <MenuItem value="B-">B-</MenuItem>
                  <MenuItem value="O+">O+</MenuItem>
                  <MenuItem value="O-">O-</MenuItem>
                  <MenuItem value="AB+">AB+</MenuItem>
                  <MenuItem value="AB-">AB-</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <FormControlLabel
              style={{ display: "block", marginBottom: 15 }}
              control={<Checkbox name="tnc" {...register("checkbox")} />}
              label="I agree all terms and conditions"
            />

            {user?.uid ? (
              <Button
                variant="contained"
                type="submit"
                size="large"
                className="w-3/5 lg:w-auto bg-red-500 text-white"
              >
                Submit
              </Button>
            ) : (
              <Link
                onClick={() => setOpenPopup(true)}
                // to="/login"
                variant="contained"
                type="submit"
                size="large"
                className="w-3/5 p-2 shadow-lg rounded-md lg:w-auto bg-red-500 text-white"
              >
                Please Login
              </Link>
            )}
          </form>
        </div>
      </div>
      {/* login signup */}
      <Popup
        title="Login Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <Login closePopup={setOpenPopup}></Login>
      </Popup>
      <Modal
        title="SignUp Form"
        openModal={openModal}
        setOpenModal={setOpenModal}
      >
        <SignUp closePopup={setOpenModal}></SignUp>
      </Modal>
    </div>
  );
};

export default DonationForm;
