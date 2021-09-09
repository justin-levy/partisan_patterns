import React, { useState, useEffect } from "react";
import { csv } from "d3-fetch";
import { Row } from "react-bootstrap";

import SelectYear from "./components/SelectYear";
import SetRange from "./components/SetRange";
import MapArea from "./components/MapArea";

const MapChart = ({ setTooltipContent }) => {
  const [alabamaData, setAlabamaData] = useState([]);
  const [iowaData, setIowaData] = useState([]);
  const [year, setYear] = useState("1948 - 1952");
  const [low, setLow] = useState(-100);
  const [high, setHigh] = useState(100);

  useEffect(() => {
    setAlabamaData([]);
    setIowaData([]);

    csv(`Alabama/President/${year}.csv`).then((counties) => {
      setAlabamaData(counties);
    });
    csv(`Iowa/President/${year}.csv`).then((counties) => {
      setIowaData(counties);
    });
  }, [year]);

  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

  function handleZoomIn() {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
  }

  function handleMoveEnd(position) {
    setPosition(position);
  }

  const stateData = [alabamaData, iowaData];

  return (
    <>
      <SelectYear setYear={setYear} />
      <SetRange low={low} high={high} setLow={setLow} setHigh={setHigh} />

      <div>{year}</div>

      <Row>
        <MapArea
          setTooltipContent={setTooltipContent}
          low={low}
          high={high}
          position={position}
          handleMoveEnd={handleMoveEnd}
          stateData={stateData}
        />
      </Row>
      <div className="controls">
        <button onClick={handleZoomIn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
        <button onClick={handleZoomOut}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default MapChart;
