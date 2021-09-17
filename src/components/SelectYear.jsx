import React from "react";
import { Row, Col, Button } from "react-bootstrap";
// import Select from "react-select";

const years = [
  // 1924, 1928, 1932, 1936, 1940, 1944,
  1948, 1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996,
  2000, 2004, 2008, 2012, 2016, 2020,
];

// const years = [
//   { value: 1924, label: 1924 },
//   { value: 1928, label: 1928 },
//   { value: 1932, label: 1932 },
//   { value: 1936, label: 1936 },
//   { value: 1940, label: 1940 },
//   { value: 1944, label: 1944 },
//   { value: 1948, label: 1948 },
//   { value: 1952, label: 1952 },
//   { value: 1956, label: 1956 },
//   { value: 1960, label: 1960 },
//   { value: 1964, label: 1964 },
//   { value: 1968, label: 1968 },
//   { value: 1972, label: 1972 },
//   { value: 1976, label: 1976 },
//   { value: 1980, label: 1980 },
//   { value: 1984, label: 1984 },
//   { value: 1988, label: 1988 },
//   { value: 1992, label: 1992 },
//   { value: 1996, label: 1996 },
//   { value: 2000, label: 2000 },
//   { value: 2004, label: 2004 },
//   { value: 2008, label: 2008 },
//   { value: 2012, label: 2012 },
//   { value: 2016, label: 2016 },
//   { value: 2020, label: 2020 },
// ];

const SelectYear = ({ year, setYear }) => {
  return (
    // <Form>
    //   <Form.Group>
    //     <Form.Control
    //       type="number"
    //       value={year}
    //       onChange={(e) => {
    //         setYear(e.target.value);
    //       }}
    //     />
    //   </Form.Group>
    // </Form>
    <Col md={4}>
      {/* {year} */}

      {/* <Select
        // className="basic-single"
        // classNamePrefix="select"
        // defaultValue={colourOptions[0]}
        // isDisabled={isDisabled}
        // isLoading={isLoading}
        // isClearable={isClearable}
        // isRtl={isRtl}
        // isSearchable={isSearchable}
        name="year"
        options={years}
      /> */}

      {years.map((item) => (
        <Row key={item}>
          <Button
            disabled={year === item ? true : false}
            onClick={() => {
              setYear(item);
            }}
          >
            {item}
          </Button>
        </Row>
      ))}
    </Col>
  );
};

export default SelectYear;
