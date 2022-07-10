import Axios from "axios";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Params, useParams } from "react-router-dom";
import { endpoint } from "../endpoint";
import { zodiacDataType } from "../Types/zodiacTypes";

export default function UpdateModal(params: { zodiac: zodiacDataType }) {
  const { lang }: { lang?: Readonly<Params<string>> } = useParams();
  const { zodiac } = params;
  const [ZodiacName, setZodiacName] = useState(zodiac.name);
  const [Description, setDescription] = useState(zodiac.description);
  const SubmitSymbole = async () => {
    if (ZodiacName.length > 0 && Description.length > 0) {
      const symbol = {
        name: ZodiacName,
        description: Description,
        zodiacid: zodiac.zodiacid,
      };
      try {
        await Axios.put(`${endpoint}/zodiac?language=${lang}`, symbol, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Update {zodiac.zodiacid}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={ZodiacName}
              onChange={(event) => setZodiacName(event.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>description</Form.Label>

            <Form.Control
              as="textarea"
              type="text"
              placeholder="Description"
              value={Description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </Form.Group>
        </>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={SubmitSymbole}>
          Update Zodiac
        </Button>
      </Modal.Footer>
    </>
  );
}
