import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";
import { stripe } from "src/lib/stripe";
import { ImageContainer, SucessContainer } from "src/styles/pages/sucess";
import Stripe from "stripe";
import Image from "next/image";

interface SucessProps {
  customerName: string;
  product: {
    name: string;
    imageUrl: string;
  };
}

export default function sucess({ customerName, product }: SucessProps) {
  return (
    <SucessContainer>
      <h1>Compra efetuada com sucesso!</h1>
      <ImageContainer>
        <Image
          alt={`${product.name}`}
          width={128}
          height={128}
          src={product.imageUrl}
        />
      </ImageContainer>
      <p>
        <strong>{customerName}</strong> seu(s) produto(s) em breve estarão a
        caminho da sua casa
      </p>

      <Link href="/" passHref>
        Voltar à lista de produtos
      </Link>
    </SucessContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details.name;
  const product = session.line_items.data[0].price.product as Stripe.Product;
  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  };
};
