import "./Hero.css";
import Hero1 from "../../images/hero/hero-img-1.jpg";
import Hero2 from "../../images/hero/hero-img-2.jpg";
import Hero3 from "../../images/hero/hero-img-3.jpg";
import Hero4 from "../../images/hero/hero-img-4.jpg";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="container">
          <div className="grid-container">
            <div className="featured grid-one">
              <div id="img1" className="lil-overlay"></div>
              <img src={Hero1} alt="img1" />
              <p className="main-description">Live Comfortably</p>
            </div>
            <div className="featured grid-two">
              <div id="img2" className="lil-overlay"></div>
              <img src={Hero2} alt="img2" />
              <p className="main-description">Skincare</p>
            </div>
            <div className="featured grid-four">
              <div id="img3" className="lil-overlay"></div>
              <img src={Hero3} alt="img3" />
              <p className="main-description">Kitchen</p>
            </div>
            <div className="featured grid-four-low">
              <div id="img4" className="lil-overlay"></div>
              <img src={Hero4} alt="img4" />
              <p className="main-description">Electronics</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
