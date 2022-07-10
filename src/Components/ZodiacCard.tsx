import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { zodiacDataType } from "../Types/zodiacTypes";
import SymbolsModal from "./SymbolsModal";
import UpdateModal from "./UpdateModal";
import { FaPenSquare } from "react-icons/fa";

export default function Cards(params: { zodiac: zodiacDataType }) {
  const { zodiac } = params;
  const [lgShow, setLgShow] = useState(false);
  const [UplgShow, setUpLgShow] = useState(false);
  return (
    <>
      <Card style={{ width: "18rem", height: "100%" }}>
        <Card.Header
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Card.Title>{zodiac.name.toUpperCase()}</Card.Title>
          <FaPenSquare
            size="25"
            style={{ cursor: "pointer" }}
            onClick={() => setUpLgShow(true)}
          />
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <b>Date From :</b> {zodiac.datefrom}
          </Card.Text>
          <Card.Text>
            <b>Date To :</b> {zodiac.dateto}
          </Card.Text>
          <Card.Text>
            <b>Descrtiption :</b> {zodiac.description}
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

      <Modal
        size="lg"
        show={UplgShow}
        onHide={() => setUpLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <UpdateModal zodiac={zodiac} />
      </Modal>
    </>
  );
}
