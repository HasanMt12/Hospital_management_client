import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";

// import { format } from "date-fns";
// import { DayPicker } from "react-day-picker";
// import 'react-day-picker/dist/style.css';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  minWidth: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ConsultancyModal = ({ setOpen, open, handleClose, doctor }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // const [selectedDate, setSelectedDate] = useState(new Date());

  const { user } = useContext(AuthContext);
  //  console.log(user)
  // console.log(treatment);
  const { department, doctorCode, name } = doctor;
  const handleBooking = (data) => {
    // e.preventDefault()
    const bookedService = {
      department,
      doctorCode: parseInt(doctorCode),
      serviceName: "Consultancy",
      patientName: data.patientName,
      bookedDate: data.date,
      patientEmail: data.patientEmail,
      patientPhone: data.patientPhone,
      slot: data.slot,
      fee: parseInt(data.fee),
      bookingDate: new Date().toISOString().split("T")[0],
    };
    fetch("http://localhost:5000/appointment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookedService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("posted");
      });

    console.log(bookedService);
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <button
              style={{ marginBottom: 20, padding: 4 }}
              onClick={() => handleClose(setOpen(false))}
            >
              <CloseIcon />
            </button>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              sx={{ color: "#0E877D" }}
            >
              Consultancy
            </Typography>

            <form onSubmit={handleSubmit(handleBooking)} action="">
              {/* <DayPicker
                mode="single"
                selectedDate={selectedDate}
                onSelect={setSelectedDate}
              />
              <p
                style={{
                  marginLeft: 20,
                  width: "100%",
                  color: "#0E877D",
                  fontWeight:"bold"
                }}
              >
                Date: {format(selectedDate, "PP")}
              </p> */}
              <input
                required
                {...register("date")}
                min={new Date().toISOString().split("T")[0]}
                type="date"
                //  value={format(date, "PP")}
                // disabled
                // value={new Date()}
                style={{ marginTop: 20, width: "100%", padding: 4 }}
              />
              {doctor?.workingDays ? (
                <select
                  {...register("slot")}
                  style={{ marginTop: 20, width: "100%", padding: 4 }}
                  name="slot"
                >
                  {doctor?.workingDays?.map((slot, i) => (
                    <option value={slot} key={i}>
                      {slot}
                    </option>
                  ))}
                </select>
              ) : (
                <>
                  <p>Not Available</p>
                </>
              )}
              <input
                {...register("fee")}
                style={{ marginTop: 20, width: "100%", padding: 4 }}
                name="price"
                type="number"
                defaultValue="500"
                readOnly
                required
                placeholder="Price"
              />
              <input
                {...register("patientName")}
                style={{ marginTop: 20, width: "100%", padding: 4 }}
                // name="name"
                type="text"
                defaultValue={user?.displayName}
                readOnly
                required
                placeholder="Your Name"
              />
              <input
                {...register("patientEmail")}
                style={{ marginTop: 20, width: "100%", padding: 4 }}
                // name="email"
                type="email"
                readOnly
                required
                defaultValue={user?.email}
                placeholder="Email Address"
              />
              <input
                {...register("patientPhone")}
                style={{ marginTop: 20, width: "100%", padding: 4 }}
                type="tel"
                // readOnly
                // disabled
                required
                placeholder="Phone"
              />

              <br />
              <input
                style={{
                  marginTop: 20,
                  width: "100%",
                  padding: 8,
                  backgroundColor: "#0E877D",
                  color: "white",
                }}
                type="submit"
                value="Submit"
              />
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ConsultancyModal;
