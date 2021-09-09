import React from "react";
import { Form } from "react-bootstrap";

const SelectYear = ({ year, setYear }) => {
  return (
    <Form>
      <Form.Group>
        <Form.Control
          type="number"
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
      </Form.Group>
    </Form>
  );
};

export default SelectYear;
