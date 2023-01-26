import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import StripePayment from "@/components/StripePayment";
const stripePromise = loadStripe(
  "pk_test_51MTwQyIiD6NGAJACqZW9fDJBjTlLZQFV0PhARibAhaDbBjjuwmWEEqUSRSEOfG4SC5dsmycCn5dLNBr7pw8GHsKc00U3DpbUFe"
);

function Dashboard() {
  const [clientSecret, setClientSecret] = useState(null);
  const options = {
    // passing the client secret obtained from the server
    clientSecret: clientSecret,
  };

  useEffect(() => {
    async function fetchSecret() {
      try {
        let resp = await axios.post(
          "http://localhost:3001/create-payment-intent",
          {
            Headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(resp);
        setClientSecret(resp.data.clientSecret);
      } catch (error) {
        console.log(error);
      }
    }

    fetchSecret();
  }, []);

  return (
    <>
      {clientSecret ? (
        <Elements key={clientSecret} stripe={stripePromise} options={options}>
          <StripePayment />
        </Elements>
      ) : (
        <></>
      )}
    </>
  );
}

export default Dashboard;
