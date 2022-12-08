import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
const IndexEng = () => {
  const state = useLocation();
  useEffect(() => {
    if (state.state !== null) {
      console.log(state.state.param);
    } else {
      window.scrollTo({ top: 0, left: 0 });
    }
  }, [state]);
  return (
    <div>
      <h1>Hola</h1>
    </div>
  );
};

export default IndexEng;
