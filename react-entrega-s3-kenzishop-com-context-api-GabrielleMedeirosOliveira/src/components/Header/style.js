import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 6%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background: #f5f5f2;
  color: #4b545f;
  box-shadow: 0 5px 3px -3px #ddd;
  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 22px;
    svg {
      color: #636e7b;
      transition: 0.3s;
      &:hover {
        cursor: pointer;
        color: #181b1e;
      }
    }
  }
  @media (max-width: 764px) {
    max-width: 100vw;
  }
`;
