import chicken from '../assets/homepage/png/chickenHell.png';
import SweDish from '../assets/homepage/png/SweDish.png';

// Визначення інтерфейсу
interface RecommendedItem {
  name: string;
  image: string;
  price: string;
}

// Експорт константи та типу
export const recommendedItems: RecommendedItem[] = [
  { name: 'Chicken Hell', image: chicken, price: '$24.99' },
  { name: 'Swe Dish', image: SweDish, price: '$19.99' },
  { name: 'Chicken Hell', image: chicken, price: '$24.99' },
];

export type { RecommendedItem };