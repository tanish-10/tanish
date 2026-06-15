import "./ProductDetail.css";

// IMAGE
import cassetteImg from "../data/img/cassete.jpeg";

function ProductCassette() {
  return (
    <div className="product-detail">

      {/* HERO */}
      <section className="product-hero">
        <h1>Cassette Air Conditioners</h1>
        <p>Perfect cooling solution for offices and commercial spaces</p>
      </section>

      {/* MAIN CONTENT */}
      <section className="product-content">

        {/* IMAGE */}
        <div className="product-image">
          <img src={cassetteImg} alt="Cassette AC" />
        </div>

        {/* INFO */}
        <div className="product-info">
          <h2>Ceiling Mounted Cassette AC</h2>

          <p>
            Cassette Air Conditioners are designed for uniform cooling in large
            spaces like offices, showrooms, and restaurants. Installed in the
            ceiling, they provide 360° airflow and maintain a clean interior look.
          </p>

          {/* FEATURES */}
          <ul>
            <li>✔ 360° Airflow Distribution</li>
            <li>✔ Ideal for Offices & Showrooms</li>
            <li>✔ Space Saving Ceiling Design</li>
            <li>✔ Powerful & Uniform Cooling</li>
            <li>✔ Low Noise Operation</li>
          </ul>

          {/* CTA */}
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
              <td>1.5 Ton - 4 Ton</td>
            </tr>
            <tr>
              <td>Installation</td>
              <td>Ceiling Mounted</td>
            </tr>
            <tr>
              <td>Airflow</td>
              <td>4-Way / 360°</td>
            </tr>
            <tr>
              <td>Usage</td>
              <td>Commercial Spaces</td>
            </tr>
            <tr>
              <td>Technology</td>
              <td>Inverter Compatible</td>
            </tr>
          </tbody>
        </table>
      </section>

    </div>
  );
}

export default ProductCassette;