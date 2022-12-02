import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Test from "../Test";

const Engage = () => {
  const data = [
    {
      id: "professionnel",
    },
    {
      id: "philanthropique",
    },
    {
      id: "contribution",
    },
  ];

  const { id } = useParams();

  const [state, setState] = useState(data.filter((item) => item.id === id)[0]);
  useEffect(() => {
    setState(data.filter((item) => item.id === id)[0]);
    // eslint-disable-next-line
  }, [id]);

  return <div>{state ? <h1>{state.id}</h1> : <Test />}</div>;
};

export default Engage;
