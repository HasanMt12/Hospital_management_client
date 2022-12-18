import React, { useState } from "react";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";

import hero from "../../../assets/882096_1029.jpg";

import {
  TextField,
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
  Input
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  inputField: {
    width: "80%",
    margin: theme.spacing(1, 0),
  },
}));

const DonationForm = () => {
  const classes = useStyles();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="my-16 w-11/12 mx-auto">
      <h1 className="text-3xl font-bold text-center mt-5 text-red-400">
        Donate Blood
      </h1>
      <h1 className="text-2xl font-bold text-center my-1 text-slate-700 font-sans">
        Save a Life
      </h1>
      <p className="text-sm font-bold text-center my-1 mb-10 text-gray-500">
        Please Fill the form below
      </p>
      <div className="box grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1 lg:gap-10  gap-3">
        <div className="box-primary">
          <img src={hero} className="lg:h-[700px] h-[350px] w-full" alt="" />
        </div>
        <div className="box-secondary">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* 1) TextField */}
            <div className="form-control">
              <TextField
                placeholder="Enter Your First Name"
                label="First Name"
                variant="outlined"
                fullWidth
                className={classes.inputField}
                name="firstName"
                {...register("firstName", {
                  required: "Name is Required",
                })}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            {/* 2) TextField */}
            <div className="form-control">
              <TextField
                placeholder="Enter Your Last Name"
                label="Last Name"
                variant="outlined"
                fullWidth
                className={classes.inputField}
                name="lastName"
                {...register("lastName", {
                  required: "Name is Required",
                })}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* 3) TextField */}
            <div className="form-control">
              <TextField
                placeholder="Enter Your Address"
                label="Address"
                variant="outlined"
                fullWidth
                className={classes.inputField}
                //   address="address"
                {...register("address", {
                  required: "address is Required",
                })}
              />
              {errors.address && (
                <p className="text-red-500">{errors.address.message}</p>
              )}
            </div>

            {/* 4) TextField */}
            <div className="form-control">
              <TextField
                placeholder="Enter Your Phone Number"
                label="Phone"
                type="phone"
                variant="outlined"
                fullWidth
                className={classes.inputField}
                //   phone="phone"
                {...register("phone", {
                  required: "phone number is Required",
                })}
              />
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </div>
            <div className="form-control">
              <TextField
                placeholder="Your age"
                label="Age"
                type="number"
                variant="outlined"
                fullWidth
                className={classes.inputField}
                //   phone="phone"
                {...register("age", {
                  required: "age  is Required",
                })}
              />
              {errors.age && (
                <p className="text-red-500">{errors.age.message}</p>
              )}
            </div>
            <div className="form-control">
                <p>Date of Birth</p>
              <TextField
               
                type="date"
                
                // variant="inline"
                fullWidth
                className={classes.inputField}
                defaultValue={null}
                // date="date"
                {...register("date", {
                  required: "date of birth is Required",
                })}
              />
              {errors.date && (
                <p className="text-red-500">{errors.date.message}</p>
              )}
            </div>
            <div className="form-control">
              <p>Last Donate Date</p>
              <TextField
                margin="normal"
             
                type="date"
                // variant="outlined"
                fullWidth
                // control={control}
                className={classes.inputField}
                defaultValue=""
                {...register("last donate date", {
                  required: "last donate date is Required",
                })}
              />
              {errors.date && (
                <p className="text-red-500">{errors.date.message}</p>
              )}
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

                {/* <FormControlLabel></FormControlLabel> */}

                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  {...register("Blood Group")}
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

            {/*  Switch */}
            <FormControlLabel
              className={classes.inputField}
              control={
                <Switch {...register("notification")} name="notification" />
              }
              label="Send me regular updates"
            />

            {/* Checkbox */}
            <FormControlLabel
              style={{ display: "block", marginBottom: 15 }}
              control={<Checkbox name="tnc" {...register("checkbox")} />}
              label="I aggree all terms and conditions"
            />

            <Button
              variant="contained"
              color="error"
              type="submit"
              size="large"
              className="w-3/5 lg:w-auto"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;
/* 

<Select value={props.value} onChange={props.onChange}>
                    <MenuItem value="">Your Blood Group</MenuItem>
                    <MenuItem value="A+">A+</MenuItem>
                    <MenuItem value="A-">A-</MenuItem>
                    <MenuItem value="B+">B+</MenuItem>
                    <MenuItem value="B-">B-</MenuItem>
                    <MenuItem value="O+">O+</MenuItem>
                    <MenuItem value="O-">O-</MenuItem>
                    <MenuItem value="AB+">AB+</MenuItem>
                    <MenuItem value="AB-">AB-</MenuItem>
                  </Select>;

*/
