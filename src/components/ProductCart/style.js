import styled from "styled-components";

export const CardContainer = styled.div`
  width: 265px;
  height: 265px;
  margin-top: 25px;
  margin-left: 10px;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.7);
  transition: 0.3s;
  background-color: #fff;
  &:hover {
    border: 1px solid transparent;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.7);
    background-color: #ededfa;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  .img-div {
    max-height: 280px;
    width: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
  }
  img {
    max-width: 60%;
    object-fit: cover;
  }
  .product-name {
    font-size: 15px;
    font-weight: 500;
  }
  .product-price {
    font-size: 17px;
    font-weight: 500;
  }
  .product-quantity {
    font-size: 15px;
    font-weight: 500;
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
  div.quantity {
    flex: 0.4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 12px;
  }
  @media (max-width: 980px) {
    display: flex;
    max-width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    div.quantity {
      justify-content: center;
      align-items: center;
      background-color: inherit;
      transition: all 0s;
    }
    .img-div {
      max-width: 100%;
      object-fit: center;
      background-color: inherit;
      transition: all 0s;
    }
    .img {
      max-width: 100%;
      object-fit: center;
    }
  }
`;
