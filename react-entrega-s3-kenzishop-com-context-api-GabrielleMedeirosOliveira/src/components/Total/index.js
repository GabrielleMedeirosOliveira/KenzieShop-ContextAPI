import React from "react";
import { ContainerTotal } from "./style";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Total = ({ total, totalProducts }) => {
  const toastErr = () =>
    toast.error("Não podemos concluir sua compra no momento", {
      position: "top-right",
      autoClose: 2000,
    });

  return (
    <ContainerTotal>
      <h4>Resumo da compra:</h4>
      <section>
        <p>{totalProducts} Produtos</p>
        <p>R$ {total.toFixed(2)}</p>
      </section>
      <button onClick={toastErr}>Finalizar Pedido</button>
    </ContainerTotal>
  );
};

export default Total;
