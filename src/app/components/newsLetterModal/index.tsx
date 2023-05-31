import React, { useState, useEffect } from "react";
import styles from "./modal.module.css";
import envelopeSimple from "../../../assets/images/header/svgs/envelope-simple.svg";
import paper from "../../../assets/images/header/svgs/paper-plane.svg";
import fitness from "../../../assets/images/header/fitness.png";

import Image from "next/image";
interface NewsletterModalProps {
  onClose: () => void;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const subscribedCookie = getCookie("subscribed");
    if (!subscribedCookie) {
      setIsOpen(true);
    }
  }, []);

  const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  };

  const getCookie = (name: string): string | null => {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");

    for (const cookie of cookieArray) {
      let trimmedCookie = cookie.trim();
      if (trimmedCookie.indexOf(cookieName) === 0) {
        return trimmedCookie.substring(cookieName.length, trimmedCookie.length);
      }
    }

    return null;
  };

  const handleSubscribeClick = () => {
    if (email.trim() !== "") {
      setCookie("subscribed", "true", 30); //30 dias de cookie
      onClose();
      console.log(`Email cadastrado: ${email}`);
    }
  };
         

  return (
    <>
      {isOpen && (
        <>
          <button onClick={onClose} className={styles.closeButton}> FECHAR </button>
        <div className={styles.modal}>
          <div>
            <Image src={fitness} alt="Imagem Homem Esportivo" className={styles.fitnessMan} width={500} height={550.83} />
          </div>
          <div className={styles.contentModal}>
            <Image src={envelopeSimple} alt="Imagem de ícone email" width={23.33} height={19.77} />
            <p>BEM VINDO Á MAEZTRA</p>
            <div className={styles.containerModalInformation}>
              <div className={styles.contentModalInformation}>
              <p>Receba em Primeira Mão</p>
              <p>desconto e ofertas exclusivas</p>
              </div>
              <div className={styles.containerInputInformation}>

              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleSubscribeClick}>
                Enviar
                <Image src={paper} alt="Imagem de ícone carta" width={12} height={20}/>

                </button>
                                
              </div>
            </div>
          </div>
        </div>
        </>
      )}
      {isOpen && <div className={styles.overlay} />}
    </>
  );
};

export default NewsletterModal;
