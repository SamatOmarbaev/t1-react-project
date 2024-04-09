export interface Products {
  products: IProductCard[]
  total?: number;
  skip?: number;
  limit?: number;
}

export interface IProductCard {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}