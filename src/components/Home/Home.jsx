import Hero from "../Hero/Hero";
import Products from "../Products/Products";
import Banner from "../Banner/Banner";
import BannerReverse from "../Banner/BannerReverse";
import Banner1 from "../../images/banner/banner1.jpg";
import Banner2 from "../../images/banner/banner2.jpg";

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
      <BannerReverse
        title="Comfortable & Elegante Living"
        text=" Products are all made to standard sizes so that you can mix and match them freely."
        img={Banner2}
      />
    </>
  );
};

export default Home;
