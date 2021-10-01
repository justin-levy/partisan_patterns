import React, { useState, useEffect } from "react";
import { csv } from "d3-fetch";
import { Row, Col } from "react-bootstrap";
import { Checkbox } from "pretty-checkbox-react";
import "pretty-checkbox/dist/pretty-checkbox.min.css";

import SelectYear from "./components/SelectYear";
import SetRange from "./components/SetRange";
import MapArea from "./components/MapArea";

const MapChart = ({ setTooltipContent }) => {
  const [data, setData] = useState({});
  const [nextData, setNextData] = useState({});
  const [showShifts, setShowShifts] = useState(true);

  const [year, setYear] = useState(1948);
  const [nextYear, setNextYear] = useState(1952);
  const [low, setLow] = useState(-100);
  const [high, setHigh] = useState(100);

  useEffect(() => {
    if (showShifts && year > nextYear) {
      const temp = year;
      setYear(nextYear);
      setNextYear(temp);
    }
  }, [year, nextYear, showShifts]);

  useEffect(() => {
    setData([{}]);
    setNextData([{}]);

    csv(`Alabama/President/${year}.csv`).then((counties) => {
      setData((prevData) => [{ ...prevData[0], alabama: counties }]);
    });
    if (year !== nextYear) {
      csv(`Alabama/President/${nextYear}.csv`).then((counties) => {
        setNextData((prevData) => [{ ...prevData[0], alabama: counties }]);
      });
    }

    csv(`Iowa/President/${year}.csv`).then((counties) => {
      setData((prevData) => [{ ...prevData[0], iowa: counties }]);
    });
    if (year !== nextYear) {
      csv(`Iowa/President/${nextYear}.csv`).then((counties) => {
        setNextData((prevData) => [{ ...prevData[0], iowa: counties }]);
      });
    }

    csv(`Louisiana/President/${year}.csv`).then((counties) => {
      setData((prevData) => [{ ...prevData[0], louisiana: counties }]);
    });
    if (year !== nextYear) {
      csv(`Louisiana/President/${nextYear}.csv`).then((counties) => {
        setNextData((prevData) => [{ ...prevData[0], louisiana: counties }]);
      });
    }

    csv(`Virginia/President/${year}.csv`).then((counties) => {
      setData((prevData) => [{ ...prevData[0], virginia: counties }]);
    });
    if (year !== nextYear) {
      csv(`Virginia/President/${nextYear}.csv`).then((counties) => {
        setNextData((prevData) => [{ ...prevData[0], virginia: counties }]);
      });
    }

    csv(`President2000s/${year}.csv`).then((counties) => {
      setData((prevData) => [{ ...prevData[0], allPresidential: counties }]);
    });
    if (year !== nextYear) {
      csv(`President2000s/${nextYear}.csv`).then((counties) => {
        setNextData((prevData) => [
          { ...prevData[0], allPresidential: counties },
        ]);
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

  const stateData = [data, nextData];

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
            showShifts={showShifts}
          />
        </Col>
        <Col
          md={2}
          style={{ backgroundColor: "lightgrey" }}
          className="layoutColumn"
        >
          <h2 style={{ textAlign: "center", paddingTop: "25px" }}>
            {year} {showShifts && `- ${nextYear}`}
          </h2>

          <Checkbox
            checked={showShifts}
            onChange={() => setShowShifts(!showShifts)}
          >
            Shifts?
          </Checkbox>

          <SetRange low={low} high={high} setLow={setLow} setHigh={setHigh} />
          <button onClick={handleZoomIn}>
            <i className="fas fa-plus" />
          </button>

          <button onClick={handleZoomOut}>
            <i className="fas fa-minus" />
          </button>
          <div style={{ paddingTop: "10px" }}></div>
          <Row className="layoutRow">
            <SelectYear year={year} setYear={setYear} />
            {showShifts && <SelectYear year={nextYear} setYear={setNextYear} />}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default MapChart;
