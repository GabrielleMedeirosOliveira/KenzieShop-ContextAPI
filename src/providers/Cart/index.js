import { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [productsOnCart, setProductsOnCart] = useState([]);

  const addOnCart = (item) => {
    let newProductToCart = {};
    newProductToCart = { ...item };
    newProductToCart.id = Math.floor(Math.random() * 100000);
    setProductsOnCart([...productsOnCart, newProductToCart]);
    toast.success("Produto adicionado ao carrinho!", {
      position: "top-right",
      autoClose: 1000,
    });
  };

  const removeProductOnCart = (item) => {
    const removed = productsOnCart.filter((product) => product.id !== item);
    setProductsOnCart(removed);
    toast.success("Produto removido do carrinho!", {
      position: "top-center",
      autoClose: 1000,
    });
  };

  return (
    <CartContext.Provider
      value={{ productsOnCart, addOnCart, removeProductOnCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
