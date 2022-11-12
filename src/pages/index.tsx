import Image from "next/image";
import { HomeContainer, Product } from "src/styles/pages/home";

import shirt01 from "src/assets/01.png";
import shirt02 from "src/assets/02.png";
import shirt03 from "src/assets/03.png";

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image alt="Camisetas" width={520} height={480} src={shirt01} />
        <footer>
          <strong>Camiseta</strong>
          <span>R$ 49,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
