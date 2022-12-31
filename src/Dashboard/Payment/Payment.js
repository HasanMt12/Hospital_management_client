import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutFrom from "./Checkouts";


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {
  // const navigation = useNavigation();
  const booking = useLoaderData();
  const { treatment, appointmentDate, slot, price } = booking;
  // if (navigation.state === "loading") {
  //   return <Loading></Loading>;
  // }

  return (
    <div>
      <h2 className="text-3xl text-center py-10 font-semibold">
        Payment for <strong className="text-primary">{treatment}</strong>
      </h2>
      <p className="text-xl text-center font-medium">
        Please pay <strong className="text-teal-400">${price}</strong> for your
        appointment on {appointmentDate} at {slot}
      </p>
      <div className="my-12 w-96 mx-auto">
        <Elements stripe={stripePromise}>
          <CheckoutFrom booking={booking}></CheckoutFrom>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
