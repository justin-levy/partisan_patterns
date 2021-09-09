import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";

import getStateFromId from "../functions/getStateFromId";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

const MapArea = ({
  setTooltipContent,
  low,
  high,
  position,
  handleMoveEnd,
  stateData,
}) => {
  const colorScale = scaleLinear()
    .domain([low, 0, high])
    .range(["red", "white", "blue"]);

  const [alabamaData, iowaData, alabamaNextData, iowaNextData] = stateData;

  return (
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
              const next =
                alabamaNextData.find(
                  (s) => parseInt(s.fips) === parseInt(geo.id)
                ) ||
                iowaNextData.find((s) => parseInt(s.fips) === parseInt(geo.id));
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={colorScale(
                    cur ? (next ? next.data - cur.data : cur.data) : "#0000FF"
                  )}
                  onMouseEnter={() => {
                    setTooltipContent("");
                    setTooltipContent(
                      `${geo.properties.name}, ${getStateFromId(geo.id)} : ${
                        cur && (next ? next.data - cur.data : cur.data)
                      }`
                    );
                    // console.log(geo);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
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
  );
};

export default MapArea;
