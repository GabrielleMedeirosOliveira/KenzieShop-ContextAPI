import { HomeContainer } from "./style";
import { useContext } from "react";
import { ProductsContext } from "../../providers/Products";
import CardProduct from "../../components/ProductCart";
import NavBar from "../../components/NavBar";
import { UlContainer } from "./style";

const Home = () => {
  const { products } = useContext(ProductsContext);
  return (
    <HomeContainer>
      <NavBar />
      <UlContainer>
        {products.map((product, i) => (
          <CardProduct key={i} product={product} />
        ))}
      </UlContainer>
    </HomeContainer>
  );
};
export default Home;
