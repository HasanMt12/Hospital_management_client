import { LocalHospital } from "@mui/icons-material";
import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const DoctorDetails = () => {
  const data = useLoaderData();
  const [slot, setSlot] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const bookingInfo = {
    slot,
    name,
    email,
    phone,
    address,
  };
  const handleChange = (event) => {
    setSlot(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Clicked");
  };

  return (
    <div className="min-h-screen mt-24">
      <div class="flex flex-col md:flex-row w-full mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="w-full">
          <img class=" w-full h-56" src={data[0]?.img} alt="avatar" />

          <div class="flex items-center px-6 py-3 bg-gray-900">
            <LocalHospital color="primary" />

            <h1 class="mx-3 text-lg font-semibold text-white">
              {data[0]?.category}
            </h1>
          </div>

          <div class="px-6 py-4">
            <h1 class="text-xl font-semibold text-gray-800 dark:text-white">
              {data[0]?.name}
            </h1>
            <h1 class="text-sm font-medium text-gray-800 dark:text-white">
              {data[0]?.qualification}
            </h1>

            <p class="py-2 text-gray-700 dark:text-gray-400">
              {data[0]?.description}
            </p>
          </div>
        </div>
        <div className="w-full p-3">
          <h3 className="text-center text-xl font-bold mb-6">
            Please Fillup with correct Inforamtions
          </h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-2">
            <label
              for="bookingSlot"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <select
                id="bookingSlot"
                class="h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              >
                <option>Hello</option>
                <option>Hello</option>
                <option>Hello</option>
                <option>Hello</option>
                <option>Hello</option>
              </select>
            </label>
            <label
              for="fullName"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="text"
                id="fullName"
                placeholder="Full Name"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Full Name
              </span>
            </label>
            <label
              for="UserEmail"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="email"
                id="UserEmail"
                placeholder="Email"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Email
              </span>
            </label>
            <label
              for="contactNumber"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="text"
                id="contactNumber"
                placeholder="Contact Number"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Contact Number
              </span>
            </label>
            <label
              for="patientAddress"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <textarea
                id="UserEmail"
                placeholder="Address"
                class="peer  w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Address
              </span>
            </label>
            <div class="flex items-center justify-center text-gray-700 dark:text-gray-200">
              <button
                type="submit"
                class="inline-block w-full text-center rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                to="/"
              >
                Make an Appointment
              </button>
            </div>
            {/* <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Slot</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={slot}
                  label="Age"
                  margin="dense"
                  onChange={(e) => setSlot(e.target.value)}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <TextField
                  margin="dense"
                  id="outlined-basic"
                  label="Full Name"
                  onBlur={(e) => setName(e.target.value)}
                  variant="outlined"
                />
                <TextField
                  margin="dense"
                  id="outlined-basic"
                  label="Email"
                  onBlur={(e) => setEmail(e.target.value)}
                  variant="outlined"
                />
                <TextField
                  margin="dense"
                  id="outlined-basic"
                  label="Contact Number"
                  onBlur={(e) => setPhone(e.target.value)}
                  variant="outlined"
                />
                <TextField
                  margin="dense"
                  id="outlined-basic"
                  label="Address"
                  onBlur={(e) => setAddress(e.target.value)}
                  variant="outlined"
                />
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  endIcon={<SendIcon />}
                >
                  Booking Now
                </Button>
              </FormControl>
            </Box> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
