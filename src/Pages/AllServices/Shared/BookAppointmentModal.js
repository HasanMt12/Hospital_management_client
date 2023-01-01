import CloseIcon from "@mui/icons-material/Close";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../../contexts/AuthProvider";
import { bookingAction } from "../../../stateManagement/bookingSlice";

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

const BookAppointmentModal = ({ setOpen, open, handleClose, treatment }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // const [selectedDate, setSelectedDate] = useState(new Date());

  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();
  //  console.log(user)
  // console.log(treatment);
  const { department, doctorCode, name,doctorEmail } = treatment;
  const bookedAppointments = useSelector(
    (state) => state.bookedAppointments.bookedAppointments
  );
  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const formattedDate = `${year}-${month}-${day}`;

  const remaningSlots = treatment?.timeSlot.filter(
    (rem) =>
      !bookedAppointments.some(
        (booked) => booked.slot === rem && formattedDate === booked.bookedDate
      )
  );
  const handleBooking = (data) => {
    const bookedService = {
      department,
      doctorEmail,
      doctorCode: parseInt(doctorCode),
      serviceName: name,
      patientName: data.patientName,
      bookedDate: data.date,
      patientEmail: data.patientEmail,
      patientPhone: data.patientPhone,
      slot: data.slot,
      fee: data.fee,
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
        dispatch(bookingAction.setReload());
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
              {name}
            </Typography>

            <form onSubmit={handleSubmit(handleBooking)} action="">
          
              <input
                {...register("date")}
                min={new Date().toISOString().split("T")[0]}
                type="date"
                
                style={{ marginTop: 20, width: "100%", padding: 4 }}
              />
              {treatment?.timeSlot ? (
                <select
                  {...register("slot")}
                  style={{ marginTop: 20, width: "100%", padding: 4 }}
                  name="slot"
                >
                  {remaningSlots.map((slot, i) => (
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
                defaultValue={treatment?.balance}
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

export default BookAppointmentModal;
