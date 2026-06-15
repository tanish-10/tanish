import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// MAIN
import Home from "./pages/Home";

// ABOUT
import About from "./pages/About";
import CustomerAppreciation from "./pages/CustomerAppreciation";
import Awards from "./pages/Awards";
import Team from "./pages/Team";

// PORTFOLIO
import CompletedProjects from "./pages/CompletedProjects";
import CurrentProjects from "./pages/CurrentProjects";

// PRODUCTS
import Products from "./pages/Products";
import ProductVRV from "./pages/ProductVRV";
import ProductSplit from "./pages/ProductSplit";
import ProductCassette from "./pages/ProductCassette";

// OTHER
import Services from "./pages/Services";
import Credentials from "./pages/Credentials";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* SIMPLE + WORKING */}
      <div style={{ padding: "40px" }}>
        <Routes>
          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* ABOUT */}
          <Route path="/about" element={<About />} />
          <Route path="/appreciation" element={<CustomerAppreciation />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/team" element={<Team />} />

          {/* PORTFOLIO */}
          <Route path="/completed" element={<CompletedProjects />} />
          <Route path="/current" element={<CurrentProjects />} />

          {/* PRODUCTS */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/vrv" element={<ProductVRV />} />
          <Route path="/products/split" element={<ProductSplit />} />
          <Route path="/products/cassette" element={<ProductCassette />} />

          {/* OTHER */}
          <Route path="/services" element={<Services />} />
          <Route path="/credentials" element={<Credentials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;