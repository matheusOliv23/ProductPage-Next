import Link from "next/link";
import React from "react";
import { ImageContainer, SucessContainer } from "src/styles/pages/sucess";

export default function sucess() {
  return (
    <SucessContainer>
      <h1>Compra efetuada com sucesso!</h1>
      <ImageContainer></ImageContainer>
      <p>Seu produto em breve estará a caminho da sua casa</p>

      <Link href="/" passHref>
        Voltar à lista de produtos
      </Link>
    </SucessContainer>
  );
}
