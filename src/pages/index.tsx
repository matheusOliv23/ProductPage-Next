import Image from "next/image";
import { HomeContainer, Product } from "src/styles/pages/home";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import shirt01 from "src/assets/01.png";
import shirt02 from "src/assets/02.png";
import shirt03 from "src/assets/03.png";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image alt="Camisetas" width={520} height={480} src={shirt01} />
        <footer>
          <strong>Camiseta</strong>
          <span>R$ 49,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image alt="Camisetas" width={520} height={480} src={shirt02} />
        <footer>
          <strong>Camiseta</strong>
          <span>R$ 49,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image alt="Camisetas" width={520} height={480} src={shirt03} />
        <footer>
          <strong>Camiseta</strong>
          <span>R$ 49,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image alt="Camisetas" width={520} height={480} src={shirt01} />
        <footer>
          <strong>Camiseta</strong>
          <span>R$ 49,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image alt="Camisetas" width={520} height={480} src={shirt03} />
        <footer>
          <strong>Camiseta</strong>
          <span>R$ 49,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
