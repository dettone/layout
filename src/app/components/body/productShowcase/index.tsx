'use client';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import styles from './product.module.css';
import schema from './schema.json';
import { useEffect, useState } from 'react';
import { priceFormatter } from '@/utils/formatter';
import fauxeSuedeproduct from '../../../../assets/images/header/fauxe-suede-product.png';
import ruchedRoseProduct from '../../../../assets/images/header/ruched-rose-product.png';

interface ProductProps {
  id: string;
  productName: string;
  productColors: string[];
  productImg: string;
  productDescription: string;
  productPrice:number
}

export function ProductShowCase(){

  const [useProducts, setUseProducts] = useState<ProductProps[]>([]);
  useEffect(() => {
    setUseProducts(schema);
  },[])

  const [sliderRef] = useKeenSlider({
    loop: true,
    slides:{
      perView: () => {
        const windows =  document.documentElement.clientWidth;
        if(windows < 500){
          return 1;
        } else {
          return 5;
        }
      }
    }
  });

  return (
    <div ref={sliderRef} className={styles.containerProducts+ " keen-slider"}>
      {
        useProducts.map(products => {
          return (
            <div className={"keen-slider__slide"} key={products.id}>
              {(products.productImg === "/fauxe-suede-product.png") ?
            <Image src={fauxeSuedeproduct} width={308} height={465} alt ={"logo Image"}/>
            :
            <Image src={ruchedRoseProduct} width={308} height={465} alt ={"logo Image"}/>
          }
            <footer>
              <div className={styles.containerColors}>
                {products.productColors.map(colors => {
                  console.log(styles.colors)
                  return (
                    <div className={styles[colors]} key={colors}>
                    </div>
                    )
                })}
              </div>
              <div className={styles.productPrice}>
                {priceFormatter.format(products.productPrice)}
              </div>
              <div className={styles.productName}>
                {products.productName}
              </div>
              <div className={styles.productDescription}>
                {products.productDescription}
              </div>
              <button className={styles.productAddToCardButton}>Adicionar</button>
            </footer>
          </div>
          )
        })
      }
    
    </div>
  );
};

export default ProductShowCase;