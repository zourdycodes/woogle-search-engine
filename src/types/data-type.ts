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

export interface ResponseData {
  answers: Array<any>;
  device_region: string;
  device_type: string;
  image_results: Array<any>;
  total: number;
  ts: number;
  results: ResultsData;
}
