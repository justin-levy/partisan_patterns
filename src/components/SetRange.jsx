import React from "react";
import { Button } from "react-bootstrap";
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
      <Button
        onClick={() => {
          setHigh(100);
          setLow(-100);
        }}
      >
        Reset
      </Button>
    </>
  );
};

export default SetRange;
