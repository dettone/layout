import styles from "./body.module.css";
import Slider from "./slider";
import globalIcon from "../../../assets/images/header/svgs/icon-global.svg";
import stockIcon from "../../../assets/images/header/svgs/icon-stock.svg";
import exchangesIcon from "../../../assets/images/header/svgs/icon-exchanges.svg";
import couponIcon from "../../../assets/images/header/svgs/icon-coupon.svg";
import shippingIcon from "../../../assets/images/header/svgs/icon-shipping.svg";
import commaImg from "../../../assets/images/header/commaImg.png";
import melissaImg from "../../../assets/images/header/melissaImg.png";
import foreverImg from "../../../assets/images/header/foreverImg.png";
import zaraImg from "../../../assets/images/header/zaraImg.png";
import annTaylorImg from "../../../assets/images/header/annTaylorImg.png";
import Image from "next/image";
import ProductShowCase from "./productShowcase";
import { NewCollection } from "./newCollection";
import { NewsLetter } from "./newsLetter";

export default function Body() {
  return (
    <div>
      <Slider />
      <div className={styles.buyingReason}>Porque comprar na Maeztra?</div>
      <div className={styles.containerBuyingReasonItems}>
        <div>
         <Image src={globalIcon} alt="Produtos Importados" width={32} height={32} className={styles.iconsBuyingReason}/>
        <div className={styles.contentBuyingReason}>
        <h3>Produtos importados</h3>
        <p>Produto de Alta Qualidade</p>
        </div>
        </div>
        <div>
         <Image src={stockIcon} alt="Imagem de estoque"  width={32} height={32} className={styles.iconsBuyingReason}/>
         <div className={styles.contentBuyingReason}>
         <h3>Estoque no Brasil</h3>
        <p>Produtos mais perto de você</p>
         </div>
      
        </div>
        <div>
        <Image src={exchangesIcon} alt="Imagem de troca de items"  width={32} height={32} className={styles.iconsBuyingReason}/>
        <div className={styles.contentBuyingReason}>
         <h3>Trocas Garantidas</h3>
          <p>Trocas em até 48 horas, veja as regras</p>
         </div>
        </div>
        <div>
        <Image src={couponIcon} alt="Imagem de cupom"  width={32} height={32} className={styles.iconsBuyingReason}/>
        <div className={styles.contentBuyingReason}>
         <h3>Ganhe 5% off</h3>
          <p>Pagando á vista no cartão</p>
         </div>
        </div>
        <div>
        <Image src={shippingIcon} alt="Imagem de frete"  width={32} height={32} className={styles.iconsBuyingReason}/>
        <div className={styles.contentBuyingReason}>
          <h3>Frete Grátis</h3>
          <p>Em compras acima de R$ 499,00</p>
          </div>
        </div>
      </div>

      <div className={styles.partnerBrands}>
        <h2>Marcas Parceiras</h2>
        <div className={styles.containerImgBrands}>
          <div>
            <Image src={commaImg} width={308} height={64} alt="Imagem Comma"/>
          </div>
          <div>
          <Image src={melissaImg} width={308} height={64} alt="Imagem Melissa"/>
          </div>
          <div>
          <Image src={foreverImg} width={308} height={64} alt="Imagem Forever 21"/>
          </div>
          <div>
          <Image src={zaraImg} width={308} height={64} alt="Imagem Zara"/>
          </div>
          <div>
          <Image src={annTaylorImg} width={308} height={64} alt="Imagem Ann Taylor"/>
          </div>
        </div>
      </div>

      <div className={styles.moreFinding}>
        <h2>As Mais Pedidas</h2>
        <ProductShowCase />
      </div>

    <NewCollection />
    <NewsLetter />
      <div>

      </div>

    </div>
  );
}
