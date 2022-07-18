import { useState, createContext } from "react";

import BB8 from "../../imgs/Caneca_BB8.jpg";
import DarthVader from "../../imgs/Caneca_DarthVader.jpg";
import HarryPotter from "../../imgs/Caneca_HarryPotter.jpg";
import ExpressoPatronum from "../../imgs/Caneca_HarryPotter2.jpg";
import MaraudersMap from "../../imgs/Caneca_HarryPotter3.jpg";
import Hogwarts from "../../imgs/Caneca_HarryPotter4.jpg";
import PicleRick from "../../imgs/Caneca_PicleRick.jpg";
import R2D2 from "../../imgs/Caneca_R2D2.jpg";
import Rick from "../../imgs/Caneca_Rick.jpg";
import Rick2 from "../../imgs/Caneca_Rick2.jpg";
import Rick3 from "../../imgs/Caneca_Rick3.jpg";
import BabyYoda from "../../imgs/Caneca_Yoda.jpg";

export const ProductsContext = createContext([]);

const allProducts = [
  {
    name: "Caneca Star Wars BB8",
    price: 30,
    category: "Star Wars",
    img: BB8,
    id: 1,
    quantity: 1,
  },
  {
    name: "Caneca Star Wars Darth Vader",
    price: 30,
    category: "Star Wars",
    img: DarthVader,
    id: 2,
    quantity: 1,
  },
  {
    name: "Caneca Harry Potter",
    price: 30,
    category: "Harry Potter",
    img: HarryPotter,
    id: 3,
    quantity: 1,
  },
  {
    name: "Caneca Expresso Patronum - Harry Potter",
    price: 30,
    category: "Harry Potter",
    img: ExpressoPatronum,
    id: 4,
    quantity: 1,
  },
  {
    name: "Caneca Mapa do Maroto - Harry Potter",
    price: 30,
    category: "Harry Potter",
    img: MaraudersMap,
    id: 5,
    quantity: 1,
  },
  {
    name: "Caneca Emblema de Hogwarts - Harry Potter",
    price: 30,
    category: "Harry Potter",
    img: Hogwarts,
    id: 6,
    quantity: 1,
  },
  {
    name: "Caneca PicleRick",
    price: 30,
    category: "Rick and Morty",
    img: PicleRick,
    id: 7,
    quantity: 1,
  },
  {
    name: "Caneca Star Wars R2D2",
    price: 30,
    category: "Star Wars",
    img: R2D2,
    id: 8,
    quantity: 1,
  },
  {
    name: "Caneca Rick Sanches",
    price: 30,
    category: "Rick and Morty",
    img: Rick,
    id: 9,
    quantity: 1,
  },
  {
    name: "Caneca Rick Sanches Bordão",
    price: 30,
    category: "Rick and Morty",
    img: Rick2,
    id: 10,
    quantity: 1,
  },
  {
    name: "Caneca Rick e Morty",
    price: 30,
    category: "Rick and Morty",
    img: Rick3,
    id: 11,
    quantity: 1,
  },
  {
    name: "Caneca Baby Yoda",
    price: 30,
    category: "Star Wars",
    img: BabyYoda,
    id: 12,
    quantity: 1,
  },
];

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(allProducts);

  const filterProducts = (filter) => {
    const productsFilter = allProducts.filter(
      (product) => product.category === filter
    );
    setProducts(productsFilter);
  };

  const showAll = () => {
    setProducts(allProducts);
  };
  return (
    <ProductsContext.Provider value={{ products, filterProducts, showAll }}>
      {children}
    </ProductsContext.Provider>
  );
};
