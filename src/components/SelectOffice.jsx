import React from "react";
import { Form } from "react-bootstrap";

const SelectOffice = ({ setOffice }) => {
  return (
    <Form>
      <Form.Group>
        <Form.Control
          as="select"
          custom
          onChange={(e) => {
            setOffice(e.target.value);
          }}
        >
          <option>President</option>
          <option>Senate 1</option>
          <option>Senate 2</option>
          <option>Senate 3</option>
          <option>Governor</option>
          <option>Lieutenant Governor</option>
          <option>Attorney General</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default SelectOffice;
