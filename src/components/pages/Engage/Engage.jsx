import React from "react";
import Test from "../Test";

const Engage = () => {
  return <div>{state ? <h1>{state.id}</h1> : <Test />}</div>;
};

export default Engage;
