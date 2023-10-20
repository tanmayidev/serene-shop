import "./TrendingScrollBar.css";
import TrendingItem from "./TrendingItem";
import { items } from "../Data/ProductData";

const TrendingScrollBar = () => {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 220;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 220;
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
          {items.map(({ id, img, description, price }) => (
            <TrendingItem
              key={id}
              img={img}
              description={description}
              price={price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingScrollBar;
