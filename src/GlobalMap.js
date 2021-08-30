import React from "react";
import { scaleLinear } from "d3-scale";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import theme from "./theme";
import { geoNaturalEarth1 } from "d3-geo";
import { makeStyles } from "@material-ui/styles";
import data from "./data";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const colorScale = scaleLinear()
  .domain([1, 1])
  .range(["#c8f7ea", theme.palette.secondary.main]);

const useStyles = makeStyles((theme) => ({
  svgMap: {
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("800px")]: {
      boxSizing: "border-box",
      width: "120%",
      transform: "translateX(-10%)",
    },
  },
}));

const GlobalMap = () => {
  const classes = useStyles();

  return (
    <ComposableMap
      data-tip=""
      projection={geoNaturalEarth1()}
      className={classes.svgMap}
      width={1000}
      height={450}
    >
      <defs>
        <filter id="glow" height="200%" width="200%" x="-50%" y="-50%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feFlood
            floodColor="rgb(0,196,137)"
            result="glowColor"
            floodOpacity="0.5"
          />
          <feComposite
            in="glowColor"
            in2="coloredBlur"
            operator="in"
            result="softGlow_colored"
          />
          {
            <feMerge>
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="softGlow_colored" />
            </feMerge>
          }
        </filter>
      </defs>
      {data.length > 0 && (
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const d = data.find((s) => s.ISO3 === geo.properties.ISO_A3);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? colorScale(d["pilots"]) : "#F5F4F6"}
                />
              );
            })
          }
        </Geographies>
      )}
    </ComposableMap>
  );
};

export default GlobalMap;
