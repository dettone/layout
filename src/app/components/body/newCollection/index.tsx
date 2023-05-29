import Image from 'next/image';
import styles from './newCollection.module.css'


export function NewCollection(){
  return (
    <div className={styles.newCollectionContainer}>
    <div className={styles.collectionText}>
        <h3>Lorem Ipsum</h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor phasellus donec condimentum sit sapien.
        </p>
      </div>
      <div className={styles.collectionImg}>
        <Image src={"/newCollection.png"} alt="Collection Image" width={1114} height={500}/>
      </div>
      <div className={styles.collectionImgMobile}>
        <Image src={"/newCollection_mobile.png"} alt="Collection Image" width={300} height={185}/>
      </div>
    </div>

    );
}