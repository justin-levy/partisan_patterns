import React from "react";
import { Form } from "react-bootstrap";

const SelectYear = ({ setYear }) => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Custom select</Form.Label>
        <Form.Control
          as="select"
          custom
          onChange={(e) => {
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
  );
};

export default SelectYear;
