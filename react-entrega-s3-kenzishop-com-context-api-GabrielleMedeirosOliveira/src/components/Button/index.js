import { useContext } from "react";
import { ContainerButton } from "./style";
import { ProductsContext } from "../../providers/Products";

const Button = ({ type, text, item }) => {
  const { filterProducts, showAll } = useContext(ProductsContext);

  const handleClick = () => {
    if (type === "filter") {
      filterProducts(item);
    } else if (type === "show") {
      showAll();
    }
  };

  return (
    <ContainerButton>
      <button onClick={handleClick}>{text}</button>
    </ContainerButton>
  );
};

export default Button;
