export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  url: string;
  images: string[];
  category: any;
  tags: any;
  producer: any;
  specifications: any;
  inCart: boolean;
}
