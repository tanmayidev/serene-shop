import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Categories from "./pages/CategoriesPage/Categories";
import Navbar from "./components/Navbar/Navbar";
import ProductDetail from "./pages/ProductDetailPage/ProductDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
