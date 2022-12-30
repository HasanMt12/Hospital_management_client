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

/* 






  <section className="p-8 shadow-xl ">
      <form
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        onSubmit={handleSubmit(handleAddStuff)}
      >
        <fieldset className="grid grid-cols-4 gap-6 p-8 rounded-md shadow-lg  bg-gray-200">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                type="name"
                {...register("name", {
                  required: " Name is Required",
                })}
                className="w-full rounded-md py-1 focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="col-span-full sm:col-span-3">
              <label htmlFor="designation" className="text-sm">
                Select Designation
              </label>
              <select
                {...register("designation", {
                  required: true,
                })}
                className="select select-bordered    focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900 w-full py-1 rounded-md "
              >
                <option value="nurse" className="text-gray-900">
                  Nurse
                </option>
                <option value="stuff" className="text-gray-900">
                  Stuff
                </option>
              </select>
              {errors.designation && (
                <p className="text-red-500">{errors.designation.message}</p>
              )}
            </div>
            <div className="col-span-full sm:col-span-3 ">
              <label htmlFor="select" className="text-sm">
                Department
              </label>
              <select
                {...register("department", {
                  required: true,
                })}
                className="select select-bordered py-1   focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900 w-full rounded-md "
              >
                <option value="dental" className="text-gray-900">
                  Dental
                </option>
                <option value="cardiology" className="text-gray-900">
                  Cardiology
                </option>
                <option value="neurology" className="text-gray-900">
                  Neurology
                </option>
                <option value="oncology" className="text-gray-900">
                  Oncology
                </option>
                <option value="nephrology" className="text-gray-900">
                  Nephrology
                </option>
                <option value="radiology" className="text-gray-900">
                  Radiology
                </option>
                <option value="orthopedic" className="text-gray-900">
                  Orthopedic
                </option>

                <option value="gynecology" className="text-gray-900">
                  Gynecology
                </option>
                <option value="endocrinology" className="text-gray-900">
                  Endocrinology
                </option>
                <option value="gastroenterology" className="text-gray-900">
                  Gastroenterology
                </option>
                <option value="otolaryngology" className="text-gray-900">
                  Otolaryngology
                </option>
              </select>
            </div>

            <div className="col-span-full sm:col-span-2">
              <label htmlFor="salary" className="text-sm">
                Salary
              </label>
              <input
                type="number"
                min="0"
                {...register("salary", {
                  required: true,
                })}
                className="w-full rounded-md py-1  focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900"
              />
              {errors.salary && (
                <p className="text-red-500">{errors.salary.message}</p>
              )}
            </div>
          </div>
        </fieldset>
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-lg  bg-gray-200">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="contact" className="text-sm">
                Contact
              </label>
              <input
                type="contact"
                {...register("contact", {
                  required: true,
                })}
                className="w-full rounded-md  py-1 focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900"
              />
              {errors.contact && (
                <p className="text-red-500">{errors.contact.message}</p>
              )}
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="Address" className="text-sm">
                Address
              </label>
              <input
                type="text"
                {...register("Address", {
                  required: true,
                })}
                className="w-full rounded-md py-1  focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-90"
              />
              {errors.Address && (
                <p className="text-red-500">{errors.Address.message}</p>
              )}
            </div>

            <div className="col-span-full sm:col-span-3">
              <label htmlFor="schedule" className="text-sm">
                Schedule Time
              </label>
              <select
    
                {...register("schedule", {
                  required: true,
                })}
                className="select select-bordered py-1   focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900 w-full rounded-md mt-1"
              >
                <option value="Monday to Thursday" className="text-gray-900">
                  Monday to Thursday
                </option>
                <option value=" Friday to Monday" className="text-gray-900">
                  Friday to Monday
                </option>
              </select>

              {errors.schedule && (
                <p className="text-red-500">{errors.schedule.message}</p>
              )}
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="shift" className="text-sm">
                Shift Time
              </label>
              <select
              
                {...register("shift", {
                  required: true,
                })}
                className="select select-bordered py-1   focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900 w-full rounded-md mt-1"
              >
                <option value="9.00 am to 5.00 pm" className="text-gray-900 ">
                  9.00 am to 5.00 pm
                </option>
                <option value=" 5.00 pm to 2.00 am" className="text-gray-900">
                  5.00 pm to 2.00 am
                </option>
                <option value="2.00 am to 9.00 am" className="text-gray-900">
                  2.00 am to 9.00 am
                </option>
              </select>

              {errors.shift && (
                <p className="text-red-500">{errors.shift.message}</p>
              )}
            </div>

            <div className="col-span-full">
              <label htmlFor="photo" className="text-sm">
                Photo
              </label>
              <input
                type="file"
                {...register("img", {
                  required: "Photo is Required",
                })}
                className="w-full  rounded-md   focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-90"
              />
              {errors.img && (
                <p className="text-red-500">{errors.img.message}</p>
              )}
            </div>
            <div className="col-span-full mx-auto w-1/2">
              <input
                className="btn form-control p-3 text-white rounded-xl bg-gray-400 font-bold w-full max-w-xs mt-4 hover:bg-gray-500"
                value="Add Product"
                type="submit"
              />
            </div>
          </div>
        </fieldset>
      </form>
    </section>











*/