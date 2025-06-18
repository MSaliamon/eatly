import ChickenHell from '../assets/homepage/png/ChickenHell.png'
import SweDish from '../assets/homepage/png/SweDish.png'

export interface Dish {
    id: number;
    title: string;
    category: string;
    time: string;
    rating: number;
    price: number;
    image: string;
  }
  const popularDishes: Dish[] = [
    {
      id: 1,
      title: "Chicken Hell",
      category: "Healthy",
      time: "24min",
      rating: 4.8,
      price: 12.99,
      image: ChickenHell,
    },
    {
      id: 2,
      title: "Swe Dish",
      category: "Trending",
      time: "34min",
      rating: 4.9,
      price: 19.99,
      image: SweDish,
    },
    {
      id: 3,
      title: "Swe Dish",
      category: "Trending",
      time: "34min",
      rating: 4.9,
      price: 19.99,
      image: SweDish,
    },
    {
      id: 4,
      title: "Chicken Hell",
      category: "Healthy",
      time: "24min",
      rating: 4.8,
      price: 12.99,
      image: ChickenHell,
    },
    {
      id: 5,
      title: "Swe Dish",
      category: "Trending",
      time: "34min",
      rating: 4.9,
      price: 19.99,
      image: SweDish,
    },
  ];
  
  export default popularDishes;
  
  