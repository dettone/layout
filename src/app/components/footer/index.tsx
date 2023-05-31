import Image from 'next/image'
import styles from './footer.module.css'
import facebookIcon from '../../../assets/images/footer/facebook-icon.png'
import linkedinIcon from '../../../assets/images/footer/linkedin-icon.png'
import instagramIcon from '../../../assets/images/footer/instagram-icon.png'
import youtubeIcon from '../../../assets/images/footer/youtube-icon.png'
import visaIcon from '../../../assets/images/footer/visa-icon.png'
import masterCardIcon from '../../../assets/images/footer/mastercard-icon.png'
import vtexIcon from '../../../assets/images/footer/vtex-icon.png'
import maeztraIcon from '../../../assets/images/footer/maeztra-icon.png'
import plusIcon from '../../../assets/images/header/svgs/plus-icon.svg'


export default function Footer(){
  return (
    <div className={styles.containerFooter}> 
      <div className={styles.containerInformation}>
      <div className={styles.dataInformation}>
      <h4>Informações</h4>
      <a>Quem somos</a>
      <a>Prazo de Envio</a>
      <a>Trocas e Devoluções</a>
      <a>Promoções e Cupons</a>
      <Image src={plusIcon} alt="Imagem de mais informações" className={styles.plusIcon} width={9} height={18}/>
      </div>
      <div className={styles.dataInformation}>
      <h4>Minha Conta</h4>
      <a>Minha Conta</a>
      <a>Meus Pedidos</a>
      <a>Cadastre-se</a>
      <Image src={plusIcon} alt="Imagem de mais informações" className={styles.plusIcon} width={9} height={18}/>
      </div>
      <div className={styles.dataInformation}>
      <h4>Onde nos Encontrar</h4>
      <a>Lojas</a>
      <a>Endereço</a>
      <Image src={plusIcon} alt="Imagem de mais informações" className={styles.plusIcon} width={9} height={18}/>
      </div>
      </div>

      <div className={styles.footerMarks}>
        <div className={styles.informationItems}>
        <Image src={facebookIcon} alt={"Imagem Facebook"} width={32} height={32}/>
        <Image src={linkedinIcon} alt={"Imagem Linkedin"} width={32} height={32}/>
        <Image src={instagramIcon} alt={"Imagem Instagram"} width={32} height={32}/>
        <Image src={youtubeIcon} alt={"Imagem Youtube"} width={32} height={32}/>
        </div>

        <div className={styles.informationItems}>
        <Image src={visaIcon} alt={"Imagem Cartão Visa"} width={32} height={25}/>
        <Image src={masterCardIcon} alt={"Imagem Cartão Mastercard"} width={32} height={25}/>
        <Image src={visaIcon} alt={"Imagem Cartão Visa"} width={32} height={25}/>
        <Image src={masterCardIcon} alt={"Imagem Cartão Mastercard"} width={32} height={25}/>
     
        </div>

        <div className={styles.companyContainer}>
          <div className={styles.companyContainerItems}>
            <p>Power By</p>
            <Image src={vtexIcon} alt={"Imagem VTEX"} width={67.83} height={25}/>
          </div>
          <div className={styles.companyContainerItems}>
            <p>Developer by</p>
            <Image src={maeztraIcon} alt={"Imagem Maeztra"} width={118.56} height={28.81}/>
          </div>
        </div>
      </div>
    </div>
  )
}