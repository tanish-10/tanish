import "./ProductDetail.css";

// IMAGE
import vrvImg from "../data/img/vrv.jpeg";

function ProductVRV() {
  return (
    <div className="product-detail">

      {/* HERO */}
      <section className="product-hero">
        <h1>VRV Air Conditioning System</h1>
        <p>Advanced cooling solution for large commercial spaces</p>
      </section>

      {/* MAIN CONTENT */}
      <section className="product-content">

        {/* IMAGE */}
        <div className="product-image">
          <img src={vrvImg} alt="VRV System" />
        </div>

        {/* INFO */}
        <div className="product-info">
          <h2>High Efficiency VRV System</h2>

          <p>
            VRV (Variable Refrigerant Volume) systems are designed for large-scale
            commercial applications such as hotels, malls, offices, and hospitals.
            These systems provide precise temperature control, energy efficiency,
            and flexible installation.
          </p>

          <ul>
            <li>✔ Energy Efficient & Cost Saving</li>
            <li>✔ Centralized Control System</li>
            <li>✔ Ideal for Large Buildings</li>
            <li>✔ Flexible Installation</li>
            <li>✔ Advanced Zoning Capability</li>
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
              <td>System Type</td>
              <td>VRV / VRF</td>
            </tr>
            <tr>
              <td>Capacity Range</td>
              <td>Up to 100+ HP</td>
            </tr>
            <tr>
              <td>Application</td>
              <td>Commercial / Industrial</td>
            </tr>
            <tr>
              <td>Control</td>
              <td>Centralized & Smart Control</td>
            </tr>
            <tr>
              <td>Energy Efficiency</td>
              <td>High (Inverter Based)</td>
            </tr>
          </tbody>
        </table>
      </section>

    </div>
  );
}

export default ProductVRV;