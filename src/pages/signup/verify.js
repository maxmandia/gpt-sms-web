import React, { useState } from "react";
import styles from "../../styles/Verify.module.css";
function verify() {
  const [code, setCode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the code
    console.log(code);
  };

  return (
    <div className={styles.formContainer}>
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
