import React from "react";
import "../styles/GlobalSection.css";

export default function GlobalSection() {
  return (
    <section className="global-section">
      {/* WHY NETRADYNE */}
      <div className="why-netradyne">
        <h2>Why Netradyne?</h2>
        <div className="why-features">
          <div className="why-feature">
            <h3>Elevate safety</h3>
            <p>
              Unite your team around a safety-first culture. We recognize and reward safe driving
              behavior, with curated insights to help you journey toward safer roads.
            </p>
          </div>

          <div className="why-feature">
            <h3>Increase profitability</h3>
            <p>
              Reduce incidents, resolve insurance claims more quickly, decrease the chance of
              litigation and boost profits through improved operational efficiency.
            </p>
          </div>

          <div className="why-feature">
            <h3>Enable transparency</h3>
            <p>
              Ground conversations in facts to eliminate unfair judgement. With full context and
              accurate information, deliver and managers engage in cleaner, more productive
              discussions.
            </p>
          </div>
        </div>
      </div>

      {/* CUSTOMER PARTNERS */}
      <div className="partners-section">
        <h2>Why customers partner with Netradyne.</h2>

        <div className="partner-quote">
          <div className="quote-box">           
          </div>
          <p className="quote">
              “We didn’t buy a product. We bought a partnership that, you know, we’re going to invest
              in for the years to come.”
            </p>
            <p className="quote-name">Randy Sheltra</p>
            <p className="quote-role">EVP of Risk Management at Loomis</p>
        </div>

        <div className="partner-cards">
          <div className="partner-card">
            <h4>KNIGHT</h4>
            <p className="card-subtitle">David Tillman</p>
            <p className="card-role">
              SVP Safety & Driver Development at Knight-Swift Transportation
            </p>
            <p className="card-text">
              “At Knight Transportation and Swift Transportation, safety is a top priority, and
              Netradyne’s unmatched AI technology made them the clear choice for our fleets.”
            </p>
          </div>

          <div className="partner-card">
            <h4>LOAD ONE</h4>
            <p className="card-subtitle">John Elliott</p>
            <p className="card-role">CEO at Load One Transportation & Logistics</p>
            <p className="card-text">
              “We can clearly see the difference before and after installing the cameras — accident
              rates dropped significantly.”
            </p>
          </div>

          <div className="partner-card">
            <h4>LOOMIS</h4>
            <p className="card-subtitle">Randall Sheltra</p>
            <p className="card-role">EVP Risk Management at Loomis</p>
            <p className="card-text">
              “Transparency is key — with video telematics, our drivers and managers see the full
              picture, building trust and improving safety culture.”
            </p>
          </div>
        </div>

        <div className="partner-logos">
          <img src="../images/logo-swift.png" alt="Swift" />
          <img src="../images/logo-knight.png" alt="Knight" />
          <img src="../images/logo-loadone.png" alt="Load One" />
          <img src="../images/logo-loomis.png" alt="Loomis" />
          <img src="../images/logo-sts.png" alt="STS" />
          <img src="../images/logo-vascor.png" alt="Vascor" />
        </div>
      </div>
      <div className="world-map">
          <img src="src/assets/world-map.webp" alt="World-map" />
      </div>

      {/* MAP SECTION */}
      <div className="map-section">
        <h2>We serve the global market.</h2>
        <p>
          From small family-owned companies to large enterprise corporations, our team of trained
          sales reps and technicians will work to understand your business and ensure you make
          strategically sound decisions tailored to your global needs.
        </p>
        <button className="learn-btn">Learn More About Our Customers</button>
        {/* <img src="../images/world-map.png" alt="World map" className="map-img" /> */}
      </div>

      {/* AWARDS & ACCOLADES */}
      <div className="awards-section">
        <div className="awards-left">
          <p className="awards-heading">AWARDS & ACCOLADES</p>
          <p className="awards-text">
            Better road safety is thanks enough, but awards are nice too. Our honors include being an
            industry leader in fleet safety solutions, a trusted service provider, and an employer of
            distinction.
          </p>
        </div>

        <div className="awards-right">
          <div className="awards-grid">
            <div>
              <img src="../images/award-forbes.png" alt="Forbes" />
              <p>
                Forbes Best Startup Employers List <br />
                <span>2023–2025</span>
              </p>
            </div>
            <div>
              <img src="../images/award-hdt.png" alt="HDT" />
              <p>
                HDT Top 20 Products <br />
                <span>2025</span>
              </p>
            </div>
            <div>
              <img src="../images/award-stevie.png" alt="Stevie" />
              <p>
                Gold Stevie® Award <br />
                <span>2024</span>
              </p>
            </div>
            <div>
              <img src="../images/award-ai.png" alt="AI" />
              <p>
                AI Safety Solution of the Year <br />
                <span>2025</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BLOG SECTION */}
      <div className="blog-section">
        <h2>Explore the blog</h2>
        <button className="view-all">View All</button>
      </div>
    </section>
  );
}