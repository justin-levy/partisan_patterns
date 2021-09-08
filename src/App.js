import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
// import Tooltip from "rc-tooltip";
import MapChart from "./MapChart";
// import "rc-tooltip/assets/bootstrap_white.css";

function App() {
  const [content, setContent] = useState("");
  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
      {/* <Tooltip
        placement="left"
        overlay={content}
        // arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
      >
        {content}
      </Tooltip> */}
    </div>
  );
}

export default App;
