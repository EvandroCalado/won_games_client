export type TypeHome = {
  banners: Banners;
};

type Banners = {
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
  ribbon: Ribbon;
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
