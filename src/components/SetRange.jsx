import React from "react";
import { Form } from "react-bootstrap";

const SetRange = ({ low, high, setLow, setHigh }) => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Low</Form.Label>
        <Form.Control
          type="number"
          defaultValue={low}
          onChange={(e) => setLow(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>High</Form.Label>
        <Form.Control
          type="number"
          defaultValue={high}
          onChange={(e) => setHigh(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
};

export default SetRange;
