import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useTheme } from '@mui/material/styles';

// import "./Donate.css";
// import hero from "../../../assets/882096_1029.jpg";

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
} from "@material-ui/core";
// import "./Donate.css";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { ListItemText, OutlinedInput } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  inputField: {
    width: "80%",
    margin: theme.spacing(1, 0),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "08:00 - 08:30",
  "09:00 - 09:30",
  "10:00 - 10:30",
//   "Van Henry",
//   "April Tucker",
//   "Ralph Hubbard",
//   "Omar Alexander",
//   "Carlos Abbott",
//   "Miriam Wagner",
//   "Bradley Wilkerson",
//   "Virginia Andrews",
//   "Kelly Snyder",
];
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Dashform = () => {
  const classes = useStyles();
    const theme = useTheme();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

   



  const onSubmit = (data,e) => {
   // e.preventDefault()
   // const form = e.target
   // console.log(form.time.value,form.name.value,form.address.value);
   // console.log(data)
   // console.log(e.target.time.value)
   const time = e.target.time.value.split(',')
   const user = {
     name: data.name,
     address: data.address,
     time,
   };
   fetch("http://localhost:5000/doctors",{
      method:"POST",
      headers:{
         'content-type':"application/json",
      },
      body:JSON.stringify(user)
   })
   .then(res=>res.json())
   .then(data=>{
      console.log(data)
   })
   console.log(user)
};

 
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div className="my-16 w-11/12 mx-auto h-2/5">
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
            {errors.age && <p className="text-red-500">{errors.age.message}</p>}
          </div>

          <div>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-name-label">Name</InputLabel>
              <Select
               //  {...register("time", {
               //    required: "time  is Required",
               //  })}
               name="time"
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="time" />}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

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
  );
};

export default Dashform;
