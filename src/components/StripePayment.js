import React from "react";
import { Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";

function StripePayment() {
  const stripe = useStripe();
  const elements = useElements();
  async function handleSubmit(e) {
    e.preventDefault();

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/",
        receipt_email: "mmandia511@gmail.com",
      },
    });
  }
  return (
    <>
      <form>
        <PaymentElement />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
}
export default StripePayment;
