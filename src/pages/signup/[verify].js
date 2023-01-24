import React, { useState, useEffect } from "react";
import styles from "../../styles/Verify.module.css";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { authentication } from "../../../firebase";
import { useRouter } from "next/router";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
function verify() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  // console.log(router.query);

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

  useEffect(() => {
    if (router.query.verify) {
      console.log(router.query.verify);
      setPhoneNumber(router.query.verify);
    }
  }, [router.query]);

  useEffect(() => {
    if (phoneNumber) {
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
        .then((resp) => {
          window.confirmationResult = resp;
        })
        .catch((e) => console.log(e));
    }
  }, [phoneNumber]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let confirm = window.confirmationResult;
    confirm
      .confirm(code)
      .then((resp) => {
        console.log(resp);

        async function addDoc() {
          const docRef = await setDoc(doc(db, "users", resp.user.uid), {
            phoneNumber: phoneNumber,
          });
        }

        addDoc();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className={styles.formContainer}>
      <div id="sign-in-button" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="code">Enter code:</label>
        <input
          type="text"
          id="code"
          name="code"
          value={code}
          onChange={(event) => setCode(event.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default verify;
