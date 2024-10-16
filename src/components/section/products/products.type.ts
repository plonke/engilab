export type ProductMarketplace = {
  name: string;
  rating: string;
  link: string;
  reviews: string;
};

export type Product = {
  title: string;
  image: string;
  marketplaces: ProductMarketplace[];
};
