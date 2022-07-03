import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { zodiacDataType } from "../Types/zodiacTypes";
import SymbolsModal from "./SymbolsModal";

export default function Cards(params: { zodiac: zodiacDataType }) {
  const { zodiac } = params;
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <Card style={{ width: "18rem", height: "100%" }}>
        <Card.Header>
          <Card.Title>{zodiac.name.toUpperCase()}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <b>Date From :</b> {zodiac.datefrom}
          </Card.Text>
          <Card.Text>
            <b>Date To :</b> {zodiac.dateto}
          </Card.Text>
          <Card.Text>
            <b>Descrtiption :</b> {zodiac.description}{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" onClick={() => setLgShow(true)}>
            Manage Symbols({zodiac.symbols.length})
          </Button>
        </Card.Footer>
      </Card>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <SymbolsModal zodiac={zodiac} />
      </Modal>
    </>
  );
}
