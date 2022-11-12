import Image from "next/image";
import { HomeContainer, Product } from "src/styles/pages/home";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { stripe } from "src/lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import { formatPrice } from "src/utils/formatPrice";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}
export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 60,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => (
        <Product key={product.id} className="keen-slider__slide">
          <Image
            alt="Camisetas"
            width={520}
            height={480}
            src={product.imageUrl}
          />
          <footer>
            <strong>{product.name}</strong>
            <span>{formatPrice(product.price / 100)}</span>
          </footer>
        </Product>
      ))}
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
    };
  });
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // a cada 2 horas
  };
};