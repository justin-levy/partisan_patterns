const getStateFromId = (fips) => {
  if (fips[0] === "0") {
    // O
    if (fips[1] === "1") {
      return "Alabama";
    } else if (fips[1] === "2") {
      return "Alaska";
    } else if (fips[1] === "4") {
      return "Arizona";
    } else if (fips[1] === "5") {
      return "Arkansas";
    } else if (fips[1] === "6") {
      return "California";
    } else if (fips[1] === "8") {
      return "Colorado";
    } else if (fips[1] === "9") {
      return "Connecticut";
    }
  } else if (fips[0] === "1") {
    // 1
    if (fips[1] === "0") {
      return "Delaware";
    } else if (fips[1] === "2") {
      return "Florida";
    } else if (fips[1] === "3") {
      return "Georgia";
    } else if (fips[1] === "5") {
      return "Hawaii";
    } else if (fips[1] === "6") {
      return "Idaho";
    } else if (fips[1] === "7") {
      return "Illinois";
    } else if (fips[1] === "8") {
      return "Indiana";
    } else if (fips[1] === "9") {
      return "Iowa";
    }
  } else if (fips[0] === "2") {
    // 2
    if (fips[1] === "2") {
      return "Louisiana";
    } else if (fips[1] === "8") {
      return "Mississippi";
    }
  }
  return `${fips[0]}${fips[1]}`;
};

export default getStateFromId;
