import styles from './newsLetter.module.css';
export function NewsLetter(){
  return(
    <div className={styles.containerNewsLetter}>
      <h3>
        Receba Nossa Newsletter
      </h3>
      <div className={styles.containerSendingNewsLetter}>
      <input type="text" placeholder={"Digite seu e-mail "} />
      <button>
        Enviar
      </button>
      </div>

    </div>
  )
}