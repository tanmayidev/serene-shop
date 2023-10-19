import "./TrendingScrollBar.css";
import TrendingItem from "./TrendingItem";
import Img1 from "../../images/products/1.jpg";
import Img2 from "../../images/products/2.jpg";
import Img3 from "../../images/products/3.png";
import Img4 from "../../images/products/4.jpg";
import Img5 from "../../images/products/5.jpg";
import Img6 from "../../images/products/6.jpg";
import Img7 from "../../images/products/7.jpg";
import Img8 from "../../images/products/8.jpg";

const TrendingScrollBar = () => {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 235;
  };

  return (
    <div className="trending">
      <div className="container">
        <div className="title-btns">
          <h3>Trending Now</h3>
          <div className="btns">
            <button onClick={slideLeft}>&lt;</button>
            <button onClick={slideRight}>&gt;</button>
          </div>
        </div>
        <div className="row-container" id="slider">
          <TrendingItem
            img={Img2}
            description="Pop-Up Toaster, White, 45cm"
            price="49$"
          />
          <TrendingItem
            img={Img7}
            description="Pop-Up Toaster, White, 45cm"
            price="49$"
          />
          <TrendingItem
            img={Img3}
            description="Pop-Up Toaster, White, 45cm"
            price="49$"
          />
          <TrendingItem
            img={Img4}
            description="Pop-Up Toaster, White, 45cm"
            price="49$"
          />
          <TrendingItem
            img={Img5}
            description="Pop-Up Toaster, White, 45cm"
            price="49$"
          />
          <TrendingItem
            img={Img6}
            description="Pop-Up Toaster, White, 45cm"
            price="49$"
          />
          <TrendingItem
            img={Img1}
            description="Pop-Up Toaster, White, 45cm"
            price="49$"
          />
          <TrendingItem
            img={Img8}
            description="Pop-Up Toaster, White, 45cm"
            price="49$"
          />
        </div>
      </div>
    </div>
  );
};

export default TrendingScrollBar;
