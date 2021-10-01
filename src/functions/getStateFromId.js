const getStateFromId = (fips) => {
  // console.log(fips.length);
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
    if (fips[1] === "0") {
      return "Kansas";
    } else if (fips[1] === "1") {
      return "Kentucky";
    } else if (fips[1] === "2") {
      return "Louisiana";
    } else if (fips[1] === "3") {
      return "Maine";
    } else if (fips[1] === "4") {
      return "Maryland";
    } else if (fips[1] === "5") {
      return "Massachusetts";
    } else if (fips[1] === "6") {
      return "Michigan";
    } else if (fips[1] === "7") {
      return "Minnesota";
    } else if (fips[1] === "8") {
      return "Mississippi";
    } else if (fips[1] === "9") {
      return "Missouri";
    }
  } else if (fips[0] === "3") {
    // 3
    if (fips[1] === "0") {
      return "Montana";
    } else if (fips[1] === "1") {
      return "Nebraska";
    } else if (fips[1] === "2") {
      return "Nevada";
    } else if (fips[1] === "3") {
      return "New Hampshire";
    } else if (fips[1] === "4") {
      return "New Jersey";
    } else if (fips[1] === "5") {
      return "New Mexico";
    } else if (fips[1] === "6") {
      return "New York";
    } else if (fips[1] === "7") {
      return "North Carolina";
    } else if (fips[1] === "8") {
      return "North Dakota";
    } else if (fips[1] === "9") {
      return "Ohio";
    }
  } else if (fips[0] === "4") {
    // 4
    if (fips[1] === "0") {
      return "Oklahoma";
    } else if (fips[1] === "1") {
      return "Oregon";
    } else if (fips[1] === "2") {
      return "Pennsylvania";
    } else if (fips[1] === "4") {
      return "Rhode Island";
    } else if (fips[1] === "5") {
      return "South Carolina";
    } else if (fips[1] === "6") {
      return "South Dakota";
    } else if (fips[1] === "7") {
      return "Tennessee";
    } else if (fips[1] === "8") {
      return "Texas";
    } else if (fips[1] === "9") {
      return "Utah";
    }
  } else if (fips[0] === "5") {
    // 5
    if (fips[1] === "0") {
      return "Vermont";
    } else if (fips[1] === "1") {
      return "Virginia";
    } else if (fips[1] === "3") {
      return "Washington";
    } else if (fips[1] === "4") {
      return "West Virginia";
    } else if (fips[1] === "5") {
      return "Wisconsin";
    } else if (fips[1] === "6") {
      return "Wyoming";
    }
  }
  return `${fips[0]}${fips[1]}`;
};

export default getStateFromId;
