import React, { useState } from "react";

export default function FormRedundant() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
//   const [fullName, setFullName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    // setFullName(e.target.value + " " + lastName);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
    // setFullName(firstName + " " + e.target.value);
  }

//   Derived or Calculate state
  const FullName = firstName + " " + lastName

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name: <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <br /> <br />
      <label>
        Last name: <input value={lastName} onChange={handleLastNameChange} />
      </label>
      <p>
        Your ticket will be issued to: <b>{FullName}</b>
      </p>
    </>
  );
}
