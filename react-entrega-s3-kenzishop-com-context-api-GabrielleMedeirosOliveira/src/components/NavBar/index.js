import Button from "../Button/index";
import { NavBarContainer } from "./style";

const NavBar = () => {
  return (
    <NavBarContainer>
      <Button type="filter" text="Star Wars" item="Star Wars" />
      <Button type="filter" text="Harry Potter" item="Harry Potter" />
      <Button type="filter" text="Rick and Morty" item="Rick and Morty" />
      <Button type="show" text="Todos" />
    </NavBarContainer>
  );
};

export default NavBar;
