import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { stripe } from "src/lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "src/styles/pages/product";
import { formatPrice } from "src/utils/formatPrice";
import Stripe from "stripe";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    defaultPriceId: string;
  };
}

export default function index({ product }: ProductProps) {
  console.log(product.defaultPriceId);
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);
  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);
      const response = await axios.post("/api/checkout", {
        priceId: product.defaultPriceId,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      alert("Falha ao redirecionar ao checkout");

      setIsCreatingCheckoutSession(false);
    }
  }
  return (
    <ProductContainer>
      <ImageContainer>
        <Image
          alt={`${product.name}`}
          src={product.imageUrl}
          height={500}
          width={600}
        />
      </ImageContainer>
      <ProductDetails>
        <h1>{product.name}</h1>
        <span>R$ {formatPrice(product.price / 100)}</span>
        <p>lorem</p>
        <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await stripe.products.list();
  const paths = response.data.map((product) => {
    return {
      params: { id: product.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;
  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1,
  };
};
