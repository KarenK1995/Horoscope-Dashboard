import { useEffect, useState } from "react";
import Cards from "../../Components/Cards";
import Axios from "axios";
import { endpoint } from "../../endpoint";
import { zodiacType } from "../../Types/zodiacTypes";

export default function Zodiac() {
  const [Zodiacs, setZodiacs] = useState([] as zodiacType[]);

  useEffect(() => {
    Axios.get(`${endpoint}/zodiac`).then((res) => {
      setZodiacs(res.data);
    });
  }, []);

  return (
    <div
      className="text-dark bg-dark"
      style={{
        padding: "2rem",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
        gridGap: "1rem",
        alignItems: "center",
        justifyItems: "center",
        gridAutoRows: "1fr",
      }}
    >
      {Zodiacs.map((zodiac, index) => (
        <Cards key={index} zodiac={zodiac} />
      ))}
    </div>
  );
}
