import React, { useState, useEffect } from "react";
import { csv } from "d3-fetch";
import { Row, Col } from "react-bootstrap";

import SelectYear from "./components/SelectYear";
import SetRange from "./components/SetRange";
import MapArea from "./components/MapArea";

const MapChart = ({ setTooltipContent }) => {
  const [alabamaData, setAlabamaData] = useState([]);
  const [alabamaNextData, setAlabamaNextData] = useState([]);
  const [iowaData, setIowaData] = useState([]);
  const [iowaNextData, setIowaNextData] = useState([]);

  const [year, setYear] = useState("1948");
  const [nextYear, setNextYear] = useState("1952");
  const [low, setLow] = useState(-100);
  const [high, setHigh] = useState(100);

  useEffect(() => {
    setAlabamaData([]);
    setAlabamaNextData([]);
    setIowaData([]);
    setIowaNextData([]);

    csv(`Alabama/President/${year}.csv`).then((counties) => {
      setAlabamaData(counties);
    });
    if (year !== nextYear) {
      csv(`Alabama/President/${nextYear}.csv`).then((counties) => {
        setAlabamaNextData(counties);
      });
    }
    csv(`Iowa/President/${year}.csv`).then((counties) => {
      setIowaData(counties);
    });
    if (year !== nextYear) {
      csv(`Iowa/President/${nextYear}.csv`).then((counties) => {
        setIowaNextData(counties);
      });
    }
  }, [year, nextYear]);

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

  const stateData = [alabamaData, iowaData, alabamaNextData, iowaNextData];

  return (
    <>
      <Row className="layoutRow">
        <Col
          md={10}
          style={{ outlineColor: "red", outline: "1px" }}
          className="layoutColumn"
        >
          <MapArea
            setTooltipContent={setTooltipContent}
            low={low}
            high={high}
            position={position}
            handleMoveEnd={handleMoveEnd}
            stateData={stateData}
          />
        </Col>
        <Col
          md={2}
          style={{ backgroundColor: "lightgrey" }}
          className="layoutColumn"
        >
          <h2 style={{ textAlign: "center" }}>{year}</h2>

          <SelectYear year={year} setYear={setYear} />
          <SelectYear year={nextYear} setYear={setNextYear} />
          <SetRange low={low} high={high} setLow={setLow} setHigh={setHigh} />

          <button onClick={handleZoomIn}>
            <i className="fas fa-plus" />
          </button>

          <button onClick={handleZoomOut}>
            <i className="fas fa-minus" />
          </button>
        </Col>
      </Row>
    </>
  );
};

export default MapChart;
