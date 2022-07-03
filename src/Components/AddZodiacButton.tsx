import Axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Params, useNavigate, useParams } from "react-router-dom";
import { endpoint } from "../endpoint";
import { zodiacDataType, zodiacType } from "../Types/zodiacTypes";

export default function AddZodiacButton() {
  const navigate = useNavigate();

  const { lang }: { lang?: Readonly<Params<string>> } = useParams();
  const [Zodiacs, setZodiacs] = useState([] as zodiacType[]);
  const [ZodiacsData, setZodiacsData] = useState([] as zodiacDataType[]);
  const [selectedZodiac, setselectedZodiac] = useState("");
  const [ZodiacInputValue, setZodiacInputValue] = useState("");
  const [ZodiacDescInputValue, setZodiacDescInputValue] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    Axios.get(`${endpoint}/zodiac`).then((res) => {
      setZodiacs(res.data);
    });
    Axios.get(`${endpoint}/zodiac/${lang}`)
      .then((res) => {
        setZodiacsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);

  const handleSubmit = async () => {
    if (
      ZodiacInputValue.length > 0 &&
      ZodiacDescInputValue.length > 0 &&
      selectedZodiac.length > 0
    ) {
      const zodiac = {
        zodiacid: selectedZodiac,
        name: ZodiacInputValue,
        description: ZodiacDescInputValue,
      };
      try {
        const result = await Axios.post(`${endpoint}/zodiac/${lang}`, zodiac, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(result);
        navigate(`/zodiac/refresh/${lang}`);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Zodiac
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Zodiac</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(event) => {
                setselectedZodiac(event.target.value);
              }}
              defaultValue={selectedZodiac}
            >
              <option value="">Select A Zodiac</option>
              {Zodiacs.filter(
                (zodiac) =>
                  !ZodiacsData.some(
                    (zodiacdata) => zodiacdata.zodiacid === zodiac.name
                  )
              ).map((zodiac, index) => (
                <option value={zodiac.name} key={index}>
                  {zodiac.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Zedioc Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Zedioc Name"
              value={ZodiacInputValue}
              onChange={(event) => setZodiacInputValue(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={ZodiacDescInputValue}
              as="textarea"
              rows={7}
              onChange={(event) => setZodiacDescInputValue(event.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add Zodiac
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
