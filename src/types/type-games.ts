export type TypeGames = {
  games: Games;
};

type Games = {
  data: Datum3[];
  meta: Meta;
};

type Meta = {
  pagination: Pagination;
};

type Pagination = {
  total: number;
  page: number;
  pageSize: number;
  pageCount: number;
};

type Datum3 = {
  id: string;
  attributes: Attributes3;
};

type Attributes3 = {
  name: string;
  slug: string;
  price: number;
  cover: Cover;
  developers: Developers;
};

type Developers = {
  data: Datum2[];
};

type Datum2 = {
  id: string;
  attributes: Attributes2;
};

type Attributes2 = {
  name: string;
};

type Cover = {
  data: Datum | null;
};

type Datum = {
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
