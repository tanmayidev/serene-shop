import Hero from "../Hero/Hero";
import Products from "../Products/Products";
import Banner from "../Banner/Banner";
import BannerReverse from "../Banner/BannerReverse";
import Footer from "../Footer/Footer";
import Banner1 from "../../images/banner/banner1.jpg";
import Banner2 from "../../images/banner/banner2.jpg";
import TrendingScrollBar from "../TrendingScrollBar/TrendingScrollBar";

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
      <Footer />
    </>
  );
};

export default Home;
