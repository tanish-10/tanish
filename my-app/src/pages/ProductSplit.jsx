import "./ProductDetail.css";

// IMAGE
import splitImg from "../data/img/split.jpeg";

function ProductSplit() {
  return (
    <div className="product-detail">

      {/* HERO */}
      <section className="product-hero">
        <h1>Split Air Conditioners</h1>
        <p>Perfect cooling solution for homes and small offices</p>
      </section>

      {/* MAIN CONTENT */}
      <section className="product-content">

        {/* IMAGE */}
        <div className="product-image">
          <img src={splitImg} alt="Split AC" />
        </div>

        {/* INFO */}
        <div className="product-info">
          <h2>High Performance Split AC</h2>

          <p>
            Our Split Air Conditioners are designed to deliver powerful cooling
            with energy efficiency. Ideal for bedrooms, living rooms, and small
            office spaces, these ACs provide silent operation and modern design.
          </p>

          <ul>
            <li>✔ Energy Efficient (5 Star Models Available)</li>
            <li>✔ Silent Operation</li>
            <li>✔ Fast Cooling Technology</li>
            <li>✔ Inverter Technology</li>
            <li>✔ Low Maintenance</li>
          </ul>

          <div className="product-actions">
            <a href="/contact" className="btn-primary">Get Quote</a>
            <a href="tel:9800079000" className="btn-secondary">Call Now</a>
          </div>
        </div>

      </section>

      {/* SPECIFICATIONS */}
      <section className="product-specs">
        <h2>Specifications</h2>

        <table>
          <tbody>
            <tr>
              <td>Capacity</td>
              <td>1 Ton - 2 Ton</td>
            </tr>
            <tr>
              <td>Energy Rating</td>
              <td>3 Star - 5 Star</td>
            </tr>
            <tr>
              <td>Technology</td>
              <td>Inverter</td>
            </tr>
            <tr>
              <td>Usage</td>
              <td>Residential / Small Office</td>
            </tr>
          </tbody>
        </table>
      </section>

    </div>
  );
}

export default ProductSplit;