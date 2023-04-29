interface Product {
  title: string;
  slogan: string;
  logo?: null | string;
  cover?: null | string;
  type: number;
  introduction: string;
  description: string;
  categories: string[];
  tags: string[];
  platforms: string[];
}
interface Types {
  name: string;
  value: number;
}
interface ICategory {
  icon: string;
  id: string;
  slug: string;
  title: string;
  type: string;
}
interface IMarkets {
  id: string;
  name: string;
  slug: string;
  icon: null | string;
  cover: null | string;
  status: number;
}
