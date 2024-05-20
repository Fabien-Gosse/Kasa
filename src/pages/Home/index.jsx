import Banner from '../../components/Banner'
import CardGallery from '../../components/CardGallery'


function Home() {
  return (
    <div className="home">
      <section className="banner">
        <Banner />
      </section>
      <section className="cardGallery">
        <CardGallery />
      </section>
    </div>
  );
}

export default Home;
