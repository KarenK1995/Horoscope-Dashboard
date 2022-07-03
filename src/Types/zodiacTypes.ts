export type zodiacType = {
  name: string;
  datefrom: string;
  dateto: string;
};

export type zodiacDataType = {
  name: string;
  datefrom: string;
  dateto: string;
  description: string;
  langague: string;
  symbols: symbolsType[];
  zodiacid: string;
};

export type symbolsType = {
  zodiacid: string;
  lang: string;
  name: string;
  value: string;
};
