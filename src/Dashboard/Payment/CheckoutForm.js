import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({booking}) => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const [clientSecret, setClientSecret] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const { fee, patientEmail, serviceName, _id } =booking;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(
      "https://hospital-management-server-one.vercel.app/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ fee }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [fee]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log(paymentMethod);
    }
    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: serviceName,
            email: patientEmail,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    } else {
      console.log(paymentIntent);
    }
    if (paymentIntent.status === "succeeded") {
      console.log("card info", card);
      // store payment info in the database
      const payment = {
        fee,
        transactionId: paymentIntent.id,
        patientEmail,
        bookingId: _id,
      };
      fetch("https://hospital-management-server-one.vercel.app/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          // authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            setSuccess("Congrats! your payment completed");
            setTransactionId(paymentIntent.id);
          }
        });
    }
    setProcessing(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn w-3/4 btn-sm my-10 mx-12 bg-[#13A2B7] text-white py-3 rounded-lg px-3 font-medium text-xl"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500 text-center">{cardError}</p>
      {success && (
        <div>
          <p className="text-green-500">{success}</p>
          <p className="font-bold">
            Your transactionId: <span>{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;