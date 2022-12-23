import React from "react";

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
    <div className="my-16 w-11/12 mx-auto h-2/5">
      <h1 className="text-4xl font-bold text-center mt-5 text-red-500 font-sans">
        Donate Blood
      </h1>
      <h1 className="text-2xl font-bold text-center my-1 text-slate-700 font-sans">
        Save a Life
      </h1>
      <p className="text-sm font-bold text-center my-1 mb-12 text-gray-500 font-sans">
        Please Fill the form below
      </p>
      <div className="box grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1 lg:gap-10  gap-3  shadow-lg">
        <div className="box-primary">
          <img
            src={hero}
            className="lg:h-[300px]  h-[320px] lg:w-[300px] w-[280px]"
            alt=""
          />
        </div>
        <div className="box-secondary">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* 1) TextField */}
            <div className="form-control">
              <TextField
                placeholder="Enter Your  Name"
                label=" Name"
                variant="outlined"
                fullWidth
                className={classes.inputField}
                name="Name"
                {...register("Name", {
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
                {...register("age", {
                  required: "age  is Required",
                })}
              />
              {errors.age && (
                <p className="text-red-500">{errors.age.message}</p>
              )}
            </div>
            <div className="form-control">
              <p className="text-gray-500">Date of Birth</p>
              <TextField
                type="date"
                fullWidth
                className={classes.inputField}
                defaultValue={null}
                {...register("date", {
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
                <Switch
                  style={{ color: "red" }}
                  {...register("notification")}
                  name="notification"
                />
              }
              label="Send me regular updates"
            />

            {/* Checkbox */}
            <FormControlLabel
              style={{ display: "block", marginBottom: 15 }}
              control={<Checkbox name="tnc" {...register("checkbox")} />}
              label="I agree all terms and conditions"
            />

            <Button
              variant="contained"
              
              type="submit"
              size="large"
              className="w-3/5 lg:w-auto bg-red-500 text-white"
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
