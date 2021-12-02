export interface ImageEntity {
  id: number;
  src: string;
  title: string;
  alt: string;
  attribution: {
    author: string;
    url: string;
  };
}
