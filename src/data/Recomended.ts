import chicken from '../assets/homepage/png/chickenHell.png';
import SweDish from '../assets/homepage/png/SweDish.png';

interface RecommendedItem {
  name: string;
  image: string;
  price: string;
}
export const recommendedItems: RecommendedItem[] = [
  { name: 'Chicken Hell', image: chicken, price: '$24.99' },
  { name: 'Swe Dish', image: SweDish, price: '$19.99' },
  { name: 'Chicken Hell', image: chicken, price: '$24.99' },
];

export type { RecommendedItem };