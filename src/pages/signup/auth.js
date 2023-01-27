import React, { useRef, useState } from "react";
import styles from "../../styles/Auth.module.css";
import * as Label from "@radix-ui/react-label";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { authentication } from "../../../firebase";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";

function auth() {
  const [phoneSuccess, setPhoneSuccess] = useState(false);
  const inputRef = useRef();
  const router = useRouter();
  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // onSignInSubmit();
          console.log("solved it");
        },
      },
      authentication
    );
  };

  async function handleNumber(e) {
    e.preventDefault();
    let phoneNumber = `+1${inputRef.current.value}`;
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
      .then((resp) => {
        window.confirmationResult = resp;
        inputRef.current.value = "";
        setPhoneSuccess(true);
      })
      .catch((e) => {
        console.log(e);
        toast("Incorrect code or number");
      });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let confirm = window.confirmationResult;
    let code = inputRef.current.value;
    confirm
      .confirm(code)
      .then((resp) => {
        console.log(resp);
        router.push(`/dashboard/${resp.user.uid}`);
        // async function addDoc() {
        //   const docRef = await setDoc(doc(db, "users", resp.user.uid), {
        //     phoneNumber: phoneNumber,
        //   });
        //   Router.push(`/dashboard/${resp.user.uid}`);
        // }

        // addDoc();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className={styles.enterPhoneContainer}>
      <div id="sign-in-button" />
      <Toaster />
      <h3 className={styles.phoneHeader}>
        {phoneSuccess ? "Enter your code" : "Enter your phone number"}
      </h3>
      <input
        ref={inputRef}
        maxLength={10}
        type="tel"
        name="phone"
        className={styles.input}
      />
      <button
        onClick={phoneSuccess ? handleSubmit : handleNumber}
        className={styles.submitButton}
      >
        {phoneSuccess ? "Submit" : "Continue"}
      </button>
    </div>
  );
}

export default auth;
