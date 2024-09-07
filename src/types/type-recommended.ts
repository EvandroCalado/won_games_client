export type TypeRecommended = {
  recommended: Recommended;
};

type Recommended = {
  data: Data3;
};

type Data3 = {
  id: string;
  attributes: Attributes5;
};

type Attributes5 = {
  section: Section;
};

type Section = {
  id: string;
  title: string;
  highlight: Highlight;
  games: Games;
};

export type Games = {
  data: Datum2[];
};

type Datum2 = {
  id: string;
  attributes: Attributes4;
};

type Attributes4 = {
  name: string;
  slug: string;
  cover: BackgroundImage;
  developers: Developers;
  price: number;
};

type Developers = {
  data: Datum[];
};

type Datum = {
  id: string;
  attributes: Attributes3;
};

type Attributes3 = {
  name: string;
};

export type Highlight = {
  id: string;
  title: string;
  subtitle: string;
  backgroundImage: BackgroundImage;
  floatImage: FloatImage;
  buttonLabel: string;
  buttonLink: string;
  alignment: string;
};

type FloatImage = {
  data: Data2;
};

type Data2 = {
  id: string;
  attributes: Attributes2;
};

type Attributes2 = {
  url: string;
  formats: Formats2;
};

type Formats2 = {
  thumbnail: Large;
};

type BackgroundImage = {
  data: Data;
};

type Data = {
  id: string;
  attributes: Attributes;
};

type Attributes = {
  url: string;
  formats: Formats;
};

type Formats = {
  large: Large;
  small: Large;
  medium: Large;
  thumbnail: Large;
};

type Large = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  provider_metadata: Providermetadata;
};

type Providermetadata = {
  public_id: string;
  resource_type: string;
};
