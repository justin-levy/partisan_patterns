import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import { csv } from "d3-fetch";

import { Form } from "react-bootstrap";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";
// const geoUrl =
// "https://github.com/deldersveld/topojson/blob/master/countries/us-states/AL-01-alabama-counties.json";
// "https://raw.githubusercontent.com/kthotav/TopoJSON-Maps/master/usa/usa-states/alabama/al-counties.json";

const MapChart = ({ setTooltipContent }) => {
  const [alabamaData, setAlabamaData] = useState([]);
  const [iowaData, setIowaData] = useState([]);
  const [year, setYear] = useState("1948 - 1952");
  const [low, setLow] = useState(-100);
  const [high, setHigh] = useState(100);

  useEffect(() => {
    csv(`Alabama/President/${year}.csv`).then((counties) => {
      setAlabamaData(counties);
    });
    csv(`Iowa/President/${year}.csv`).then((counties) => {
      setIowaData(counties);
    });
  }, [year]);

  const colorScale = scaleLinear()
    .domain([low, 0, high])
    .range(["red", "white", "blue"]);

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

  const [delayHandler, setDelayHandler] = useState(null);

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Custom select</Form.Label>
          <Form.Control
            as="select"
            custom
            onChange={(e) => {
              // setData([]);
              setYear(e.target.value);
            }}
          >
            <option>1948 - 1952</option>
            <option>1952 - 1956</option>
            <option>1956 - 1960</option>
            <option>1960 - 1964</option>
            <option>1964 - 1972</option>
            <option>1972 - 1976</option>
            <option>1976 - 1980</option>
            <option>1980 - 1984</option>
            <option>1984 - 1988</option>
            <option>1988 - 1992</option>
            <option>1992 - 1996</option>
            <option>1996 - 2000</option>
            <option>2000 - 2004</option>
            <option>2004 - 2008</option>
            <option>2008 - 2012</option>
            <option>2012 - 2016</option>
            <option>2016 - 2020</option>
          </Form.Control>
        </Form.Group>
      </Form>

      <Form>
        <Form.Group>
          <Form.Label>Low</Form.Label>
          <Form.Control
            type="number"
            defaultValue={low}
            onChange={(e) => setLow(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>High</Form.Label>
          <Form.Control
            type="number"
            defaultValue={high}
            onChange={(e) => setHigh(e.target.value)}
          />
        </Form.Group>
      </Form>

      <div>{year}</div>

      <ComposableMap data-tip="" projection="geoAlbersUsa">
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const cur =
                  alabamaData.find(
                    (s) => parseInt(s.fips) === parseInt(geo.id)
                  ) ||
                  iowaData.find((s) => parseInt(s.fips) === parseInt(geo.id));
                //  const max = cur.find((s) => max > s.unemployment_rate);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={colorScale(cur ? cur.X : "#0000FF")}
                    onMouseEnter={() => {
                      setTooltipContent("");
                      // setDelayHandler(
                      // setTimeout(() => {
                      setTooltipContent(
                        `${geo.properties.name} : ${cur && cur.X}`
                      );
                      // }, 100)
                      // );
                    }}
                    onMouseLeave={() => {
                      // clearTimeout(delayHandler);
                      setTooltipContent("");
                    }}
                    style={{
                      // default: {
                      //   fill: "#D6D6DA",
                      //   outline: "none"
                      // },
                      hover: {
                        fill: "#F53",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#E42",
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
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
