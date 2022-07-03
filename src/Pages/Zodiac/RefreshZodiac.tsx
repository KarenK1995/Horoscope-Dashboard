import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function RefreshZodiac() {
  const navigation = useNavigate();
  const { lang } = useParams();
  useEffect(() => {
    navigation(`/Zodiac/${lang}`);
  });

  return <></>;
}
