import "./Products.css";
import { useNavigate } from "react-router-dom";

// IMAGES
import vrvImg from "../data/img/vrv.jpeg";
import splitImg from "../data/img/split.jpeg";
import cassetteImg from "../data/img/cassete.jpeg";
import ductImg from "../data/img/vrv.jpeg"; // fallback for now

function Products() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "VRV System",
      type: "Commercial",
      desc: "Advanced VRV air conditioning system for large buildings and hotels.",
      path: "/products/vrv",
      img: vrvImg,
    },
    {
      id: 2,
      name: "Split AC",
      type: "Residential",
      desc: "Energy-efficient split AC perfect for homes and small offices.",
      path: "/products/split",
      img: splitImg,
    },
    {
      id: 3,
      name: "Cassette AC",
      type: "Commercial",
      desc: "Ceiling-mounted cassette AC ideal for offices and showrooms.",
      path: "/products/cassette",
      img: cassetteImg,
    },
  ];

  return (
    <div className="products-page">

      {/* HERO */}
      <section className="products-hero">
        <h1>Our Products</h1>
        <p>Explore our wide range of air conditioning solutions</p>
      </section>

      {/* PRODUCTS GRID */}
      <section className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>

            {/* IMAGE */}
            <div className="product-img">
              <img src={product.img} alt={product.name} />
            </div>

            {/* INFO */}
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="type">{product.type}</p>
              <p>{product.desc}</p>

              <button
                className="btn"
                onClick={() => navigate(product.path)}
              >
                View Details
              </button>
            </div>

          </div>
        ))}
      </section>

    </div>
  );
}

export default Products;