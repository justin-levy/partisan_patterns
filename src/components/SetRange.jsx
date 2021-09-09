import React from "react";
import Slider from "react-rangeslider";

import "react-rangeslider/lib/index.css";

const SetRange = ({ low, high, setLow, setHigh }) => {
  return (
    <>
      <div className="red">
        <Slider min={0} max={200} value={-low} onChange={(e) => setLow(-e)} />
      </div>
      <div className="blue">
        <Slider min={0} max={200} value={high} onChange={(e) => setHigh(e)} />
      </div>
    </>
  );
};

export default SetRange;
