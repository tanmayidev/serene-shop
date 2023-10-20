import "./Categories.css";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";
import CategoriesHeader from "../../components/Categories/CategoriesHeader";
import CategoriesBody from "../../components/Categories/CategoriesBody";

const Categories = () => {
  return (
    <>
      <CategoriesHeader />
      <CategoriesBody />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Categories;
