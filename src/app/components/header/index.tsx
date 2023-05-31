
import styles from "./header.module.css";
import Image from "next/image";
import logoMaeztra from "../../../assets/images/header/logo-maeztra-novo.png";
import iconUser from "../../../assets/images/header/svgs/icon-user.svg";
import iconShoppingBag from "../../../assets/images/header/svgs/icon-shoppingbag.svg";
import iconHeart from "../../../assets/images/header/svgs/icon-heart.svg";
import dressIcon from "../../../assets/images/header/svgs/dress-icon.svg";
import searchIcon from "../../../assets/images/header/svgs/searchIcon.svg";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerPublish}>
        {" "}
        Acompanhe as melhores promoções disponíveis aqui na Maeztra.
      </div>
      <div className={styles.headerSearch}>
        <Image src={"/icon-menu.svg"} width={24} height={24}  alt="Icone de Menu" className={styles.menuIcon}/>
        <Image
          src={logoMaeztra.src}
          width={147}
          height={18}
          className={styles.imageCompany}
          alt="Picture of the author"
        />
        <div className={styles.containerInputSearch}>
          <input type="text" className={styles.inputSearch} placeholder={"O que Você Busca?"}></input>
          <button className={styles.buttonSearch}>Buscar</button>
        </div>
        <div className={styles.profileContainer}>
          <div className={styles.profileSearch}>
          <Image
            src={iconUser.src}
            width={14}
            height={16}
            className={styles.imageCompany}
            alt="Picture of the author"
          />
          <p>Minha Conta</p>
          </div>


        <div className={styles.profileSearch}>
        <div className={styles.mobileSearch}>
      <Image
        src={searchIcon}
        width={16}
        height={16}
        className={styles.searchIcon}
        alt="Search Icon"
      />
    </div>
        <Image
            src={iconShoppingBag.src}
            width={18.28}
            height={16}
            className={styles.imageCompany}
            alt="Picture of the author"
          />
          <p className={styles.myAccount}> Minha Conta </p>
        </div>
        


        <div className={styles.profileSearch}>
          <Image
            src={iconHeart.src}
            width={14.38}
            height={16}
            className={styles.imageCompany}
            alt="Picture of the author"
          />
          <p>Meu Carrinho </p>
        </div>
        </div>
      </div>
      <div>
        <nav className={styles.navbarNavigate}>
          <div className={styles.newsContainer}>
          <Image src={dressIcon} alt="Imagem de vestido" width={12.5} height={15} />
          <a className={styles.news}>Novidades</a>
          </div>
          <a>Vestidos</a>
          <a>Roupas</a>
          <a>Sapatos</a>
          <a>Lingerie</a>
          <a>Acessórios</a>
          <a> OUTLET </a>
        </nav>
      </div>
    </div>
  );
}
