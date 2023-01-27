import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import StripePayment from "@/components/StripePayment";
import styles from "../../styles/Dashboard.module.css";
const stripePromise = loadStripe(
  "pk_test_51MTwQyIiD6NGAJACqZW9fDJBjTlLZQFV0PhARibAhaDbBjjuwmWEEqUSRSEOfG4SC5dsmycCn5dLNBr7pw8GHsKc00U3DpbUFe"
);

function handleBuy() {
  axios
    .post("https://gpt-sms-production.up.railway.app/checkout-session")
    .then((resp) => {
      resp.data.url;
      window.open(resp.data.url, "_blank");
    })
    .catch((e) => console.log(e));
}

function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <h2 className={styles.balance}>$0.00</h2>
      <h3 className={styles.balanceText}>balance</h3>
      <button onClick={handleBuy} className={styles.buyBtn}>
        Buy credits
      </button>
    </div>
  );
}

export default Dashboard;
