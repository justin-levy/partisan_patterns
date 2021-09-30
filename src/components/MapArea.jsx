import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";

import { geoUrl } from "../_context";
import getStateFromId from "../functions/getStateFromId";

const findMatch = (data, geoId) => {
  if (!data) return;
  return data.find((s) => parseInt(s.fips) === parseInt(geoId));
};

// use state name instead of dealing with fips
const stateMatch = (data, geoId) => {
  if (!data) return;

  if (geoId[0] === "0") {
    if (geoId[1] === "1") {
      return findMatch(data[0].alabama, geoId);
    }
  } else if (geoId[0] === "1") {
    if (geoId[1] === "9") {
      return findMatch(data[0].iowa, geoId);
    }
  } else if (geoId[0] === "2") {
    if (geoId[1] === "2") {
      return findMatch(data[0].louisiana, geoId);
    }
  } else if (geoId[0] === "5") {
    if (geoId[1] === "1") {
      return findMatch(data[0].virginia, geoId);
    }
  }
  return;
};

const tooltipStyle = {
  hover: {
    fill: "#F53",
    outline: "none",
  },
  pressed: {
    fill: "#E42",
    outline: "none",
  },
};

const MapArea = (props) => {
  const {
    setTooltipContent,
    low,
    high,
    position,
    handleMoveEnd,
    stateData,
    showShifts,
  } = props;

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
              const countyName = geo.properties.name;
              const stateName = getStateFromId(geo.id);

              const cur = stateMatch(data, geo.id);
              const next = stateMatch(nextData, geo.id);

              // redo this section to use checkbox
              const geoData = showShifts
                ? cur
                  ? next
                    ? next.data - cur.data
                    : // : cur.data
                      undefined
                  : undefined
                : cur
                ? cur.data
                : undefined;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={colorScale(geoData ? geoData : "#0000FF")}
                  onMouseEnter={() => {
                    setTooltipContent("");
                    setTooltipContent(
                      `${countyName}, ${stateName} : ${geoData && geoData}`
                    );
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={tooltipStyle}
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
