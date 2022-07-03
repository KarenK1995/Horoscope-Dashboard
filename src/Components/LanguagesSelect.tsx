import Axios from "axios";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { endpoint } from "../endpoint";
import { languagesType } from "../Types/LanguagesTypes";

export default function LanguagesSelect() {
  let navigate = useNavigate();

  const [languages, setlanguages] = useState([] as languagesType[]);
  useEffect(() => {
    Axios.get(`${endpoint}/zodiac/languages`).then((res) => {
      setlanguages(res.data);
    });
  }, []);
  return (
    <Form.Select
      aria-label="Default select example"
      onChange={(event) => {
        if (event.target.value !== "")
          navigate(`/zodiac/${event.target.value}`);
      }}
    >
      <option value="">Select A language</option>
      {languages.map((language, index) => (
        <option value={language.id} key={index}>
          {language.name}
        </option>
      ))}
    </Form.Select>
  );
}
