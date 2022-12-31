import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "bookedAppointments",
  initialState: { bookedAppointments: ["hello", "Hi"], reload: false },
  reducers: {
    setBookedAppointments: (state, action) => {
      state.bookedAppointments = action.payload;
    },
    setReload: (state, action) => {
      state.reload = !state.reload;
    },
  },
});
export const bookingAction = bookingSlice.actions;
export default bookingSlice;
