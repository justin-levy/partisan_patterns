import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

const getStateFromId = (fips) => {
  if (fips[0] == "0") {
    if (fips[1] == "1") {
      return "Alabama";
    } else if (fips[1] == "2") {
      return "Alaska";
    } else if (fips[1] == "5") {
      return "Arkansas";
    }
  } else if (fips[0] == "1") {
    if (fips[1] == "9") {
      return "Iowa";
    } else if (fips[1] == "3") {
      return "Georgia";
    }
  } else if (fips[0] == "2") {
    if (fips[1] == "2") {
      return "Louisiana";
    } else if (fips[1] == "8") {
      return "Mississippi";
    }
  }
  return `${fips[0]}${fips[1]}`;
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

  const [alabamaData, iowaData] = stateData;

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
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={colorScale(cur ? cur.X : "#0000FF")}
                  onMouseEnter={() => {
                    setTooltipContent("");
                    setTooltipContent(
                      `${geo.properties.name}, ${getStateFromId(geo.id)} : ${
                        cur && cur.X
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
