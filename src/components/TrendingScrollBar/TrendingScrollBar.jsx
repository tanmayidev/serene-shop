import "./TrendingScrollBar.css";
import TrendingItem from "./TrendingItem";
import { allProducts } from "../Data/AllProductsData";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const TrendingScrollBar = () => {
  const trendingItems = allProducts.filter((item) => item.id >= 8);

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
            <button title="scroll left" onClick={slideLeft}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button title="scroll right" onClick={slideRight}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
        <div className="row-container" id="slider">
          {trendingItems.map(({ id, img, description, price }) => (
            <Link key={id} to={`/serene-shop/product/${id}`}>
              <TrendingItem
                key={id}
                img={img}
                description={description}
                price={price}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingScrollBar;
