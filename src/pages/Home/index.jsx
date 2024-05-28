import BannerHome from '../../components/BannerHome'
import CardGallery from '../../components/CardGallery'
import styles from "./Home.module.scss"


function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.banner}>
        <BannerHome />
      </section>
      <section className={styles.cardGallery}>
        <CardGallery />
      </section>
    </main>
  );
}

export default Home;
