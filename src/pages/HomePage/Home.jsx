import Hero from "../../components/Hero/Hero";
import Products from "../../components/RecommendedProducts/Products";
import Banner from "../../components/Banner/Banner";
import BannerReverse from "../../components/Banner/BannerReverse";
import Footer from "../../components/Footer/Footer";
import Banner1 from "../../images/banner/banner1.jpg";
import Banner2 from "../../images/banner/banner2.jpg";
import TrendingScrollBar from "../../components/TrendingScrollBar/TrendingScrollBar";
import Newsletter from "../../components/Newsletter/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <Banner
        title="Creative harmonious living"
        text=" Products are all made to standard sizes so that you can mix and match them freely."
        img={Banner1}
      />
      <TrendingScrollBar />
      <BannerReverse
        title="Comfortable & Elegante Living"
        text=" Products are all made to standard sizes so that you can mix and match them freely."
        img={Banner2}
      />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
