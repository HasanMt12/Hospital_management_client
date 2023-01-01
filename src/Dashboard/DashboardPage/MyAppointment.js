import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/appointment?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],

    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          //   authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h1 className="text-3xl">My Appointments</h1>
      <div className="overflow-x-auto">
        <table className="table w-full my-7">
          <thead>
            <tr>
              <th></th>
              <th>Department</th>
              <th>Service Name</th>
              <th>Slot</th>
              <th>Fee</th>
              <th>Booking Date</th>
              <th>Patient Phone</th>
              <th>Patient Email</th>
              <th>Fee</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.department}</td>
                <td>{booking.serviceName}</td>
                <td>{booking.slot}</td>
                <td>{booking.patientEmail}</td>
                <td>{booking.fee}</td>
                <td>{booking.bookingDate}</td>
                <td>{booking.patientPhone}</td>
                <td>{booking.fee && <p>${booking.fee}</p>}</td>

                <td>
                  {booking.fee && !booking.paid && (
                    <Link
                      to={`/dashboard/payment/${booking._id}`}
                      className="btn btn-xs btn-secondary text-teal-500"
                    >
                      Pay
                    </Link>
                  )}
                  {booking.fee && booking.paid && (
                    <button className="btn btn-xs text-white  bg-green-600">
                      Paid
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
