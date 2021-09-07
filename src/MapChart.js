import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import { csv } from "d3-fetch";

import { Form } from "react-bootstrap";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";
// const geoUrl =
// "https://github.com/deldersveld/topojson/blob/master/countries/us-states/AL-01-alabama-counties.json";
// "https://raw.githubusercontent.com/kthotav/TopoJSON-Maps/master/usa/usa-states/alabama/al-counties.json";

const MapChart = () => {
  const [data, setData] = useState([]);
  const [year, setYear] = useState("/1950.csv");
  const [low, setLow] = useState(-100);
  const [high, setHigh] = useState(100);

  useEffect(() => {
    csv(year).then((counties) => {
      setData(counties);
    });
  }, [year]);

  const colorScale = scaleLinear()
    .domain([low, 0, high])
    // .range([
    //   "#ffedea",
    //   "#ffcec5",
    //   "#ffad9f",
    //   "#ff8a75",
    //   "#ff5533",
    //   "#e2492d",
    //   "#be3d26",
    //   "#9a311f",
    //   "#782618",
    // ]);
    .range(["red", "white", "blue"]);
  // .range([
  //   "#ff0000",
  //   "#ff6846",
  //   "#ff9e81",
  //   "#ffcfbf",
  //   "#FFFFFF",
  //   "#dcc4ff",
  //   "#b38bff",
  //   "#7e52ff",
  //   "#0000ff",
  // ]);

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Custom select</Form.Label>
          <Form.Control
            as="select"
            custom
            onChange={(e) => setYear(e.target.value)}
          >
            <option>/1950.csv</option>
            <option>/1954.csv</option>
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

      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const cur = data.find((s) => s.id === geo.id);
              // const max = cur.find((s) => max > s.unemployment_rate);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={colorScale(cur ? cur.unemployment_rate : "#0000FF")}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default MapChart;
