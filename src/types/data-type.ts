export interface ExtendLink {
  href: string;
  text: string;
}

export interface Cite {
  domain: string;
  span: string;
}

export interface ResultsData {
  additional_links: Array<ExtendLink>;
  cite: Cite;
  description: string;
  link: string;
  title: string;
}

export interface ImageMeta {
  src: string;
  alt: string;
}

export interface LinkMeta {
  href: string;
  title: string;
  domain: string;
}

export interface ImageResults {
  image: ImageMeta;
  link: LinkMeta;
}

export interface EntriesLink {
  href: string;
  rel: string;
  type: string;
}

export interface SourceEntries {
  href: string;
  title: string;
}

export interface EntriesNews {
  id: string;
  link: string;
  links: Array<EntriesLink>;
  published: string;
  source: SourceEntries;
  summary: string;
  title: string;
}

export interface FeedNews {
  generator: string;
  language: string;
  link: string;
  publisher: string;
  rights: string;
  subtitle: string;
  title: string;
  updated: string;
}

export interface ResponseData {
  answers: Array<any>;
  device_region: string;
  device_type: string;
  image_results: Array<ImageResults> | any;
  entries: EntriesNews[];
  feed: FeedNews;
  total: number;
  ts: number;
  results: ResultsData;
}
