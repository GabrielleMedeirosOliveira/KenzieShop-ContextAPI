import { Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart/index";
import Home from "../pages/Home/index";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carrinho" element={<Cart />} />
    </Routes>
  );
}

export default Router;
