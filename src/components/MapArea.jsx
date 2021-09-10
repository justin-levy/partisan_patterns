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

const findMatch = (data, geo) => {
  if (!data) return;
  return data.find((s) => parseInt(s.fips) === parseInt(geo.id));
};

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

  const [data, nextData] = stateData;

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
                findMatch(data[0].alabama, geo) || findMatch(data[0].iowa, geo);
              const next =
                findMatch(nextData[0].alabama, geo) ||
                findMatch(nextData[0].iowa, geo);
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
