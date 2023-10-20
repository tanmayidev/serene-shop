import "./Categories.css";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";
import CategoriesHeader from "../../components/Categories/CategoriesHeader";
import CategoriesBody from "../../components/Categories/CategoriesBody";
import { useState } from "react";
import { allProducts } from "../../components/Data/AllProductsData";

const Categories = () => {
  const [categoryBtn, setCategoryBtn] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  const handleCategoryChange = (category) => {
    setCategoryBtn(category);
    const newFilteredItems = filteredItems(category);
    setFilteredProducts(newFilteredItems);
  };

  const filteredItems = (selectedCategory) => {
    switch (selectedCategory) {
      case "all":
        return allProducts;
      default:
        return allProducts.filter((item) => item.category === selectedCategory);
    }
  };
  return (
    <>
      <CategoriesHeader
        categoryBtn={categoryBtn}
        handleCategoryChange={handleCategoryChange}
      />
      <CategoriesBody filteredProducts={filteredProducts} />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Categories;
