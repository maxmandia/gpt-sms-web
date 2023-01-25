import "@/styles/globals.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51MTwQyIiD6NGAJACqZW9fDJBjTlLZQFV0PhARibAhaDbBjjuwmWEEqUSRSEOfG4SC5dsmycCn5dLNBr7pw8GHsKc00U3DpbUFe"
);

export default function App({ Component, pageProps }) {
  const options = {
    // passing the client secret obtained from the server
    clientSecret:
      "sk_test_51MTwQyIiD6NGAJACmI2fHbSshqTd4YfASzY8gUZdETaX28KU7SSTxsMgARVHQNfBl5e8e8bVFNt9CH69MPrU6InH00i2ae23gs",
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <Component {...pageProps} />
    </Elements>
  );
}
