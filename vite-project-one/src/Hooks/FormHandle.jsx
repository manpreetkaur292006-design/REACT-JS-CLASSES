import React from "react";
import { useState } from "react";

const FormHandle = () => {
  const [name, setName] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Enter name"
        value={name}  // name is the state here 
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Hello, {name}</h2>
    </>
  );
};

export default FormHandle;
