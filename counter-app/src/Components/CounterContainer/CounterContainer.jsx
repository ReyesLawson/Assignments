import React, { useState } from "react";
import "./CounterContainerstyles.css";
import { Button, Form, Container } from "react-bootstrap";

export default function CounterContainer() {
  const [number, setNumber] = useState(0);

  return (
    <Container>
      <div className="numberNum">{number}</div>
      <div className="button-div">
        <Button
          className="down-button rounded-circle"
          onClick={() => setNumber(number - 1)}>
          <span className="down"> - </span>
        </Button>
        <Button
          className="up-button rounded-circle "
          onClick={() => setNumber(number + 1)}>
          <span className="up"> + </span>
        </Button>
      </div>
      <div>
        <Button className="reset-button" onClick={() => setNumber(0)}>
          <span className="reset"> Reset </span>
        </Button>
      </div>
    </Container>
  );
}
