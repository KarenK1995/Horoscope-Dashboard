import Axios from "axios";
import { useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { Params, useParams } from "react-router-dom";
import { endpoint } from "../endpoint";
import { zodiacDataType } from "../Types/zodiacTypes";
import { FaTrash } from "react-icons/fa";

export default function SymbolsModal(params: { zodiac: zodiacDataType }) {
  const { lang }: { lang?: Readonly<Params<string>> } = useParams();
  const { zodiac } = params;
  const [SymbolsList, setSymbolsList] = useState(zodiac.symbols);
  const [SymbolCase, setSymbolCase] = useState(true);
  const [SymbolName, setSymbolName] = useState("");
  const [SymbolValue, setSymbolValue] = useState("");
  const SubmitSymbole = async () => {
    if (SymbolName.length > 0 && SymbolValue.length > 0) {
      const symbol = {
        name: SymbolName,
        value: SymbolValue,
        zodiacid: zodiac.zodiacid,
      };
      try {
        const result = await Axios.post(
          `${endpoint}/symbol?language=${lang}`,
          symbol,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(result);
        setSymbolsList([...SymbolsList, result.data]);
        setSymbolCase(true);
      } catch (err) {
        console.log(err);
      }
    }
  };
  const DeleteSymbole = async (name: string, zodiacid: string) => {
    const symbol = {
      name: name,
      zodiacid: zodiac.zodiacid,
    };
    try {
      const result = await Axios({
        method: "delete",
        url: `${endpoint}/symbol?language=${lang}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: symbol,
      });
      console.log(result);
      setSymbolsList(
        SymbolsList.filter((symb) => {
          return symb.name !== name && symb.zodiacid !== zodiacid;
        })
      );
      setSymbolCase(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          {zodiac.name.toUpperCase()} Symbols
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {SymbolCase ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {SymbolsList.map((symbol, index) => (
                <tr key={index}>
                  <td>{symbol.name}</td>
                  <td>{symbol.value}</td>
                  <td>
                    <FaTrash
                      onClick={() => {
                        DeleteSymbole(symbol.name, symbol.value);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                value={SymbolName}
                onChange={(event) => setSymbolName(event.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Value</Form.Label>
              <Form.Control
                type="text"
                placeholder="Value"
                value={SymbolValue}
                onChange={(event) => setSymbolValue(event.target.value)}
              />
            </Form.Group>
            <div className="mt-3">
              <Button variant="primary" onClick={SubmitSymbole}>
                Submit
              </Button>
            </div>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => setSymbolCase(!SymbolCase)}>
          {SymbolCase ? "Add Symbols" : "Show Symbols"}
        </Button>
      </Modal.Footer>
    </>
  );
}
