// src/data/carsData.ts
export interface Car {
  id: number;
  brand: string;
  model: string;
  price: number;
  features: string[];
  image?: string;
}

const carsData: Car[] = [
  {
    id: 1,
    brand: "Mercedes",
    model: "Sedan",
    price: 25,
    features: ["Automat", "PB 95", "Air Conditioner"],
    image: "../src/assets/carimg.png",
  },
  {
    id: 2,
    brand: "Mercedes",
    model: "Sport",
    price: 50,
    features: ["Automat", "PB 95", "Air Conditioner"],
    image: "../src/assets/carimg.png",
  },
  {
    id: 3,
    brand: "Mercedes",
    model: "Sedan",
    price: 45,
    features: ["Automat", "PB 95", "Air Conditioner"],
    image: "../src/assets/carimg.png",
  },
  {
    id: 4,
    brand: "Porsche",
    model: "SUV",
    price: 40,
    features: ["Automat", "PB 95", "Air Conditioner"],
    image: "../src/assets/carimg.png",
  },
  {
    id: 5,
    brand: "Toyota",
    model: "Sedan",
    price: 35,
    features: ["Automat", "PB 95", "Air Conditioner"],
    image: "../src/assets/carimg.png",
  },
  {
    id: 6,
    brand: "Porsche",
    model: "SUV",
    price: 50,
    features: ["Automat", "PB 95", "Air Conditioner"],
    image: "../src/assets/carimg.png",
  },
];

export default carsData;