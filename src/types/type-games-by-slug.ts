export type TypeGamesBySlug = {
  games: Games;
};

type Games = {
  data: Datum3[];
};

type Datum3 = {
  id: string;
  attributes: Attributes4;
};

type Attributes4 = {
  name: string;
  short_description: string;
  description: string;
  price: number;
  rating: string;
  release_date: string;
  cover: Cover;
  gallery: Gallery;
  developers: Developers;
  publisher: Publisher;
  categories: Developers;
  platforms: Developers;
};

type Publisher = {
  data: Datum2;
};

type Developers = {
  data: Datum2[];
};

type Datum2 = {
  id: string;
  attributes: Attributes3;
};

type Attributes3 = {
  name: string;
};

type Gallery = {
  data: Datum[];
};

type Datum = {
  attributes: Attributes2;
};

type Attributes2 = {
  src: string;
  label: null;
  formats: Formats2;
};

type Formats2 = {
  small: Large;
  thumbnail: Large;
};

type Cover = {
  data: Data;
};

type Data = {
  attributes: Attributes;
};

type Attributes = {
  src: string;
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
