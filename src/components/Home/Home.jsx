import "./Home.css";
import { useState } from "react";
import Home1 from "../../images/home-img-1.jpg";
import Home2 from "../../images/home-img-2.jpg";
import Home3 from "../../images/home-img-3.jpg";
import Home4 from "../../images/home-img-4.jpg";

const Home = () => {
  const [overlay, setOverlay] = useState(false);

  function inOverlay() {
    setOverlay(true);
  }

  function outOverlay() {
    setOverlay(false);
  }

  return (
    <>
      <div className="home-container">
        <div className="container">
          <div className="grid-container">
            <div className="featured grid-one">
              <div
                id="1"
                className={overlay ? "hard-overlay" : "lil-overlay"}
                onMouseEnter={inOverlay}
                onMouseLeave={outOverlay}
              ></div>
              <img src={Home1} alt="img1" />
              <p className="main-description">Live Comfortably</p>
            </div>
            <div className="featured grid-two">
              <div
                id="2"
                className={overlay ? "hard-overlay" : "lil-overlay"}
                onMouseEnter={inOverlay}
                onMouseLeave={outOverlay}
              ></div>
              <img src={Home2} alt="img2" />
              <p className="main-description">Skincare</p>
            </div>
            <div className="featured grid-four">
              <div
                id="3"
                className={overlay ? "hard-overlay" : "lil-overlay"}
                onMouseEnter={inOverlay}
                onMouseLeave={outOverlay}
              ></div>
              <img src={Home3} alt="img3" />
              <p className="main-description">Kitchen</p>
            </div>
            <div className="featured grid-four-low">
              <div
                id="4"
                className={overlay ? "hard-overlay" : "lil-overlay"}
                onMouseEnter={inOverlay}
                onMouseLeave={outOverlay}
              ></div>
              <img src={Home4} alt="img4" />
              <p className="main-description">Electronics</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
