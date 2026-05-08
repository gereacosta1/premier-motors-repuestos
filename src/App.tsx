type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  fitment: string;
};

type PaymentMethod = {
  name: string;
  label: string;
  description: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Performance Tires",
    category: "Tires",
    price: "From $120",
    image:
      "https://images.unsplash.com/photo-1600661653561-629509216228?auto=format&fit=crop&w=1200&q=80",
    description:
      "Reliable tires for everyday driving, highway comfort and performance upgrades.",
    fitment: "Multiple sizes available",
  },
  {
    id: 2,
    name: "Premium Wheels",
    category: "Wheels",
    price: "From $450",
    image:
      "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=1200&q=80",
    description:
      "Clean wheel options for customers looking to upgrade the look and stance of their vehicle.",
    fitment: "Fitment checked before order",
  },
  {
    id: 3,
    name: "Replacement Rims",
    category: "Rims",
    price: "Quote required",
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80",
    description:
      "Replacement rims and rim sets for damaged, worn or style-upgrade needs.",
    fitment: "Model-based matching",
  },
  {
    id: 4,
    name: "Auto Parts",
    category: "Parts",
    price: "Available",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=80",
    description:
      "Vehicle parts, components and accessories for maintenance, repair and upgrades.",
    fitment: "VIN or model recommended",
  },
  {
    id: 5,
    name: "Brake Components",
    category: "Parts",
    price: "Quote required",
    image:
      "https://images.unsplash.com/photo-1632823471565-1ecdf5c248c8?auto=format&fit=crop&w=1200&q=80",
    description:
      "Brake-related components for safer driving, repair needs and service preparation.",
    fitment: "Vehicle details needed",
  },
  {
    id: 6,
    name: "Vehicle Accessories",
    category: "Accessories",
    price: "Available",
    image:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1200&q=80",
    description:
      "Useful add-ons for appearance, utility, comfort and daily vehicle care.",
    fitment: "Universal and model-specific",
  },
];

const paymentMethods: PaymentMethod[] = [
  {
    name: "Stripe",
    label: "Card checkout",
    description: "Ready structure for secure card payments and checkout sessions.",
  },
  {
    name: "Affirm",
    label: "Financing",
    description: "Catalog positioned around eligible vehicle-related products.",
  },
  {
    name: "Katapult",
    label: "Lease-to-own ready",
    description: "Prepared layout for alternative financing options if approved.",
  },
];

const stats = [
  ["Product focus", "Parts"],
  ["Catalog", "Ready"],
  ["Payments", "Prepared"],
  ["Mobility type", "Automotive"],
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function App() {
  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <div className="container nav">
          <button
            type="button"
            onClick={() => scrollToId("home")}
            className="brand"
            aria-label="Go to home"
          >
            <span className="brand-mark">PM</span>
            <span>
              <span className="brand-title">Premier Motors SF LLC</span>
              <span className="brand-subtitle">Parts • Wheels • Tires • Rims</span>
            </span>
          </button>

          <nav className="nav-links" aria-label="Main navigation">
            <button onClick={() => scrollToId("products")} type="button">
              Catalog
            </button>
            <button onClick={() => scrollToId("payments")} type="button">
              Payments
            </button>
            <button onClick={() => scrollToId("process")} type="button">
              Process
            </button>
            <button onClick={() => scrollToId("contact")} type="button">
              Contact
            </button>
          </nav>

          <button
            className="btn btn-primary nav-cta"
            onClick={() => scrollToId("contact")}
            type="button"
          >
            Request quote
          </button>
        </div>
      </header>

      <main id="home">
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span></span>
                Automotive parts catalog
              </div>

              <h1>
                A sharper parts store for wheels, tires, rims and vehicle upgrades.
              </h1>

              <p>
                Premier Motors SF LLC helps customers request vehicle parts, tires,
                wheels, rims and accessories through a clean, financing-ready catalog
                experience.
              </p>

              <div className="hero-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => scrollToId("products")}
                  type="button"
                >
                  Explore catalog
                </button>

                <button
                  className="btn btn-ghost"
                  onClick={() => scrollToId("payments")}
                  type="button"
                >
                  View payment options
                </button>
              </div>

              <div className="trust-strip">
                <span>Quote-first buying</span>
                <span>Fitment support</span>
                <span>Finance-ready</span>
              </div>
            </div>

            <div className="hero-showcase">
              <div className="showcase-main">
                <img
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80"
                  alt="Premium automotive vehicle"
                />
                <div className="showcase-overlay" />

                <div className="showcase-card top">
                  <span>01</span>
                  <strong>Parts</strong>
                  <small>Replacement & upgrade requests</small>
                </div>

                <div className="showcase-card bottom">
                  <span>02</span>
                  <strong>Wheels + Tires</strong>
                  <small>Fitment checked before ordering</small>
                </div>
              </div>

              <div className="stats-grid">
                {stats.map(([label, value]) => (
                  <div className="stat-card" key={label}>
                    <small>{label}</small>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow">
                  <span></span>
                  Product categories
                </div>
                <h2>Catalog built for automotive parts, not electric mobility.</h2>
              </div>

              <p>
                The product structure stays focused on vehicle-related items that make
                sense for parts sales and financing review.
              </p>
            </div>

            <div className="product-grid">
              {products.map((product, index) => (
                <article
                  className={`product-card product-card-${index + 1}`}
                  key={product.id}
                >
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    <div className="product-category">{product.category}</div>
                  </div>

                  <div className="product-body">
                    <div className="product-title-row">
                      <h3>{product.name}</h3>
                      <span>{product.price}</span>
                    </div>

                    <p>{product.description}</p>

                    <div className="fitment-row">
                      <small>Fitment</small>
                      <strong>{product.fitment}</strong>
                    </div>

                    <button
                      className="btn btn-card"
                      onClick={() => scrollToId("contact")}
                      type="button"
                    >
                      Request this item
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="payments" className="section payment-section">
          <div className="container payment-grid">
            <div className="payment-panel">
              <div className="eyebrow">
                <span></span>
                Payment infrastructure
              </div>

              <h2>Prepared for Stripe, Affirm or Katapult.</h2>

              <p>
                This site is structured so payment methods can be connected later
                without changing the business focus. The page avoids electric scooters,
                e-bikes and electric mobility language.
              </p>

              <div className="payment-warning">
                <strong>Catalog rule</strong>
                <span>
                  Keep products limited to tires, wheels, rims, vehicle parts and
                  accessories.
                </span>
              </div>
            </div>

            <div className="payment-methods">
              {paymentMethods.map((method) => (
                <div className="payment-card" key={method.name}>
                  <div>
                    <span>{method.name}</span>
                    <strong>{method.label}</strong>
                  </div>
                  <p>{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section">
          <div className="container process-layout">
            <div className="process-sticky">
              <div className="eyebrow">
                <span></span>
                Customer flow
              </div>
              <h2>Simple quote-first buying experience.</h2>
              <p>
                Customers can request what they need first, then the business confirms
                availability, fitment and payment options before checkout.
              </p>
            </div>

            <div className="process-list">
              <div className="process-item">
                <span>01</span>
                <div>
                  <h3>Customer requests item</h3>
                  <p>
                    They send the tire size, wheel style, part name, vehicle model or
                    VIN details.
                  </p>
                </div>
              </div>

              <div className="process-item">
                <span>02</span>
                <div>
                  <h3>Fitment is confirmed</h3>
                  <p>
                    The correct part, rim, tire size or accessory is checked before
                    purchase.
                  </p>
                </div>
              </div>

              <div className="process-item">
                <span>03</span>
                <div>
                  <h3>Payment option is selected</h3>
                  <p>
                    Stripe, Affirm or Katapult can be connected when the account and
                    product rules are ready.
                  </p>
                </div>
              </div>

              <div className="process-item">
                <span>04</span>
                <div>
                  <h3>Order is completed</h3>
                  <p>
                    Customer receives next steps for pickup, delivery or final order
                    confirmation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container about-card">
            <div>
              <div className="eyebrow">
                <span></span>
                Business focus
              </div>

              <h2>Premier Motors SF LLC</h2>

              <p>
                A professional automotive parts storefront focused on practical vehicle
                products: replacement parts, tires, wheels, rims and accessories.
              </p>
            </div>

            <div className="about-grid">
              <div>
                <strong>Included</strong>
                <span>Auto parts, wheels, tires, rims, accessories.</span>
              </div>

              <div>
                <strong>Excluded</strong>
                <span>No electric scooters, no e-bikes, no electric mobility catalog.</span>
              </div>

              <div>
                <strong>Purpose</strong>
                <span>Quote requests, catalog browsing and payment readiness.</span>
              </div>

              <div>
                <strong>Customer support</strong>
                <span>Help choosing the correct fitment before purchase.</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Request ready to be connected to email, Netlify Forms or backend.");
              }}
            >
              <div className="eyebrow">
                <span></span>
                Request a quote
              </div>

              <h2>Tell us what your vehicle needs.</h2>

              <div className="field-grid">
                <input className="input" name="name" placeholder="Full name" />
                <input className="input" name="phone" placeholder="Phone number" />
              </div>

              <input className="input" name="email" placeholder="Email address" />

              <div className="field-grid">
                <input
                  className="input"
                  name="vehicle"
                  placeholder="Vehicle year / make / model"
                />
                <input className="input" name="category" placeholder="Part category" />
              </div>

              <textarea
                className="input textarea"
                name="message"
                placeholder="Example: tire size, wheel size, part name, VIN, or what you need help finding..."
              />

              <button className="btn btn-primary submit-btn" type="submit">
                Send request
              </button>
            </form>

            <aside className="contact-side">
              <div className="side-card">
                <span>Business</span>
                <strong>Premier Motors SF LLC</strong>
                <p>Automotive parts, tires, wheels, rims and accessories.</p>
              </div>

              <div className="side-card">
                <span>Payment readiness</span>
                <strong>Stripe • Affirm • Katapult</strong>
                <p>
                  Payment buttons can be connected after approval, credentials and
                  checkout flow are ready.
                </p>
              </div>

              <div className="side-card highlighted">
                <span>Important</span>
                <strong>Affirm-friendly focus</strong>
                <p>
                  Do not add scooters, e-bikes or electric mobility products to this
                  page.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <strong>Premier Motors SF LLC</strong>
            <span>Parts • Wheels • Tires • Rims • Accessories</span>
          </div>

          <p>© {new Date().getFullYear()} Premier Motors SF LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;