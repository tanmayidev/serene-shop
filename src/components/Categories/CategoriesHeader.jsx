import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";

const CategoriesHeader = ({ categoryBtn, handleCategoryChange }) => {
  return (
    <>
      <div className="container">
        <div className="catego-header">
          <div className="title-home">
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              <FontAwesomeIcon icon={faAnglesLeft} /> Home
            </Link>
            <h3>{categoryBtn}</h3>
          </div>
          <div className="filter-btns">
            <button onClick={() => handleCategoryChange("all")}>All</button>
            <button onClick={() => handleCategoryChange("furniture")}>
              Furnitures
            </button>
            <button onClick={() => handleCategoryChange("electronic")}>
              Electronics
            </button>
            <button onClick={() => handleCategoryChange("lamp")}>Lamps</button>
            <button onClick={() => handleCategoryChange("kitchen")}>
              Kitchen
            </button>
            <button onClick={() => handleCategoryChange("chair")}>
              Chairs
            </button>
            <button onClick={() => handleCategoryChange("skin-care")}>
              Skin Care
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CategoriesHeader;
