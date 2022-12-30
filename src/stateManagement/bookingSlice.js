import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "bookedAppointments",
  initialState: { bookedAppointments: ["hello", "Hi"] },
  reducers: {
    setBookedAppointments: (state, action) => {
      state.bookedAppointments = action.payload;
    },
  },
});
export const bookingAction = bookingSlice.actions;
export default bookingSlice;
