import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardPlaceHolder } from "../../Components/Cards";
import Cards from "../../Components/ZodiacCard";
import { endpoint } from "../../endpoint";
import { zodiacDataType } from "../../Types/zodiacTypes";

export default function ZodiacData() {
  const fakeCards = [1, 1, 1, 1, 1, 1];
  const { lang } = useParams();
  const [Zodiacs, setZodiacs] = useState([] as zodiacDataType[]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    Axios.get(`${endpoint}/zodiac/signDetails?language=${lang}`)
      .then((res) => {
        setZodiacs(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div
      className="text-dark bg-dark"
      style={{
        padding: "2rem",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
        gridGap: "1rem",
        alignItems: "center",
        justifyItems: "center",
        gridAutoRows: "1fr",
      }}
    >
      {!isLoading
        ? Zodiacs.map((zodiac, index) => <Cards zodiac={zodiac} key={index} />)
        : fakeCards.map((_, index) => <CardPlaceHolder key={index} />)}
    </div>
  );
}
