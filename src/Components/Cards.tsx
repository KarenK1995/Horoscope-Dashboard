import React from "react";
import { Button, Card, Placeholder } from "react-bootstrap";
import { zodiacType } from "../Types/zodiacTypes";

export default function Cards(props: { zodiac: zodiacType }) {
  const { zodiac } = props;
  return (
    <Card style={{ width: "18rem", height: "100%" }}>
      {/* <Card.Img variant="top" src="https://via.placeholder.com/150" /> */}
      <Card.Body>
        <Card.Title>Name : {zodiac.name}</Card.Title>
        <Card.Text>Date From : {zodiac.datefrom}</Card.Text>
        <Card.Text>Date To : {zodiac.dateto}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
export function CardPlaceHolder() {
  return (
    <Card style={{ width: "18rem", height: "100%" }}>
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />
          <Placeholder xs={6} /> <Placeholder xs={8} />
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />
          <Placeholder xs={6} /> <Placeholder xs={8} />
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
        <Placeholder.Button variant="primary" xs={6} />
      </Card.Body>
    </Card>
  );
}
