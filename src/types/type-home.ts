export type TypeHome = {
  banners: Banners;
  newGames: NewGames;
  upcomingGames: UpcomingGames;
  freeGames: UpcomingGames;
} & {
  [K in 'sections' | 'showcase']: Sections;
};

export type Sections = {
  data: Data4;
};

type Data4 = {
  id: string;
  attributes: Attributes8;
};

type Attributes8 = {
  newGames: NewGames2;
  popularGames: PopularGames;
  upcomingGames: UpcomingGames2;
  freeGames: UpcomingGames2;
};

type UpcomingGames2 = {
  id: string;
  title: string;
  highlight: Highlight;
};

type PopularGames = {
  id: string;
  title: string;
  highlight: Highlight;
  games: Games;
};

type Games = {
  data: Datum3[];
};

type Highlight = {
  id: string;
  title: string;
  subtitle: string;
  backgroundImage: Image;
  floatImage: FloatImage;
  buttonLabel: string;
  buttonLink: string;
  alignment: string;
};

type FloatImage = {
  data: Data3;
};

type Data3 = {
  id: string;
  attributes: Attributes7;
};

type Attributes7 = {
  url: string;
  formats: Formats2 | null;
};

type Formats2 = {
  thumbnail: Large;
};

type NewGames2 = {
  id: string;
  title: string;
  highlight: null;
};

export type UpcomingGames = {
  data: Datum4[];
  meta: Meta;
};

type Datum4 = {
  id: string;
  attributes: Attributes6;
};

type Attributes6 = {
  name: string;
  slug: string;
  cover: Cover;
  developers: Developers;
  price: number;
};

type Cover = {
  data: Data2;
};

type Data2 = {
  id: string;
  attributes: Attributes5;
};

type Attributes5 = {
  url: string;
  formats: Formats;
};

export type NewGames = {
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
  attributes: Attributes4;
};

type Attributes4 = {
  name: string;
  slug: string;
  cover: Image;
  developers: Developers;
  price: number;
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

export type Banners = {
  data: Datum[];
};

type Datum = {
  id: string;
  attributes: Attributes2;
};

type Attributes2 = {
  image: Image;
  title: string;
  subtitle: string;
  button: Button;
  ribbon: Ribbon | null;
};

type Ribbon = {
  id: string;
  text: string;
  color: string;
  size: string;
};

type Button = {
  id: string;
  label: string;
  link: string;
};

type Image = {
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
