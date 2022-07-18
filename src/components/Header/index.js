import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { HeaderContainer } from "./style";
import { Link } from "react-router-dom";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <h3>KenzieShop</h3>
      </div>
      <div className="icons">
        <Link to="/carrinho">
          <ShoppingCartOutlinedIcon />
        </Link>
        <Link to="/">
          <LoginOutlinedIcon />
        </Link>
      </div>
    </HeaderContainer>
  );
};

export default Header;
