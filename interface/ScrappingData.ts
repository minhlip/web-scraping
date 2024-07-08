export interface IScrappingData {
  url: string;
  currency: string;
  image: string;
  title: string;
  currentPrice: number;
  originalPrice: number;
  priceHistory: any[]
  discountRate: number;
  category: string;
  reviewsCount: number;
  stars: number;
  isOutofStock: boolean;
  description: string;
  lowestPrice: number;
  highestPrice: number;
  averagePrice: number
}