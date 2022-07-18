import styled from "styled-components";

export const ContainerTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 200px;
  width: 360px;
  padding: 10px;
  box-shadow: 0px 0px 13px 0px black;
  border-radius: 8px;
  border: var(--color-primary-50) 2px solid;
  margin: 20px;
  h1 {
    font-size: 20px;
  }
  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  button {
    transition: 0.3s;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    font-size: 16px;
    width: 100%;
    padding: 8px 0;
    background-color: #c2c6fb;
    &:hover {
      background-color: #adb2fb;
    }
  }
  }
  @media (max-width: 410px) {
    width: 250px;
  }
`;
