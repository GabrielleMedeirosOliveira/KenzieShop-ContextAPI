import { ContainerCart, ContainerWarning } from "./style";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../providers/Cart";
import ProductCard from "../../components/ProductCart";
import Total from "../../components/Total";

const Cart = () => {
  const { productsOnCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    setTotal(
      productsOnCart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0)
    );
    setTotalProducts(
      productsOnCart.reduce((total, item) => {
        return total + item.quantity;
      }, 0)
    );
  }, [productsOnCart]);

  return (
    <ContainerCart>
      <div>
        {productsOnCart.length > 0 ? (
          <>
            <ul>
              {productsOnCart.map((product, i) => (
                <ProductCard key={i} product={product} isRemovable={true} />
              ))}
            </ul>
            <Total total={total} totalProducts={totalProducts} />
          </>
        ) : (
          <ContainerWarning>
            <h1>Ops não tem nada aqui!</h1>
          </ContainerWarning>
        )}
      </div>
    </ContainerCart>
  );
};

export default Cart;
