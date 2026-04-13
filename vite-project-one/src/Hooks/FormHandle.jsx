import React from "react";
import { useState } from "react";

const FormHandle = () => {
  const [name, setName] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Hello, {name}</h2>
    </>
  );
};

export default FormHandle;
