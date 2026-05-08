type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  fitment: string;
  note: string;
};

type PaymentMethod = {
  name: string;
  label: string;
  status: string;
  description: string;
};

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "All-Season Tires",
    category: "Tires",
    price: "From $120",
    image:
      "https://images.unsplash.com/photo-1600661653561-629509216228?auto=format&fit=crop&w=1200&q=80",
    description:
      "Daily driving tires for comfort, grip and reliable road performance.",
    fitment: "Size required",
    note: "Best for replacements",
  },
  {
    id: 2,
    name: "Custom Wheels",
    category: "Wheels",
    price: "From $450",
    image:
      "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=1200&q=80",
    description:
      "Wheel options for customers upgrading the look and stance of their vehicle.",
    fitment: "Bolt pattern checked",
    note: "Style upgrade",
  },
  {
    id: 3,
    name: "Replacement Rims",
    category: "Rims",
    price: "Quote required",
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80",
    description:
      "Rim replacements and rim sets for damaged, worn or upgraded vehicles.",
    fitment: "Vehicle model needed",
    note: "Model-based matching",
  },
  {
    id: 4,
    name: "Brake Components",
    category: "Parts",
    price: "Quote required",
    image:
      "https://images.unsplash.com/photo-1632823471565-1ecdf5c248c8?auto=format&fit=crop&w=1200&q=80",
    description:
      "Brake-related components for safer driving and repair preparation.",
    fitment: "VIN recommended",
    note: "Safety parts",
  },
  {
    id: 5,
    name: "Replacement Parts",
    category: "Parts",
    price: "Available",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=80",
    description:
      "Automotive parts and components for repair, service and upgrades.",
    fitment: "Year / make / model",
    note: "Repair support",
  },
  {
    id: 6,
    name: "Vehicle Accessories",
    category: "Accessories",
    price: "Available",
    image:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1200&q=80",
    description:
      "Useful accessories for appearance, daily care, utility and comfort.",
    fitment: "Universal or specific",
    note: "Add-on products",
  },
];

const paymentMethods: PaymentMethod[] = [
  {
    name: "Stripe",
    label: "Card checkout",
    status: "Ready to connect",
    description:
      "Prepared for secure card checkout once Stripe keys and checkout flow are added.",
  },
  {
    name: "Affirm",
    label: "Financing",
    status: "Approval dependent",
    description:
      "Page is positioned around vehicle-related products and avoids scooter/e-bike language.",
  },
  {
    name: "Katapult",
    label: "Lease-to-own",
    status: "Optional integration",
    description:
      "Layout can support a Katapult button after account approval and credentials.",
  },
];

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Request the part",
    description:
      "Customer sends tire size, wheel size, part name, vehicle model or VIN.",
  },
  {
    number: "02",
    title: "Confirm compatibility",
    description:
      "Fitment, availability and product details are reviewed before payment.",
  },
  {
    number: "03",
    title: "Choose payment",
    description:
      "Stripe, Affirm or Katapult can be connected after approval and setup.",
  },
  {
    number: "04",
    title: "Complete the order",
    description:
      "Customer receives next steps for pickup, delivery or confirmation.",
  },
];

const highlights = [
  "Tires",
  "Wheels",
  "Rims",
  "Brake parts",
  "Replacement parts",
  "Accessories",
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
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
        <section className="hero-section anchor-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span></span>
                Automotive parts supplier
              </div>

              <h1>Parts, wheels, tires and rims for serious vehicle upgrades.</h1>

              <p>
                Premier Motors SF LLC helps customers request the right automotive
                parts, confirm fitment and prepare checkout through a professional
                quote-first catalog.
              </p>

              <div className="hero-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => scrollToId("products")}
                  type="button"
                >
                  Browse catalog
                </button>

                <button
                  className="btn btn-ghost"
                  onClick={() => scrollToId("contact")}
                  type="button"
                >
                  Request availability
                </button>
              </div>

              <div className="trust-strip">
                <span>Fitment support</span>
                <span>Quote-first orders</span>
                <span>Payment-ready structure</span>
              </div>
            </div>

            <div className="hero-showcase">
              <div className="showcase-main">
                <img
                  src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1400&q=80"
                  alt="Automotive parts and service"
                />
                <div className="showcase-overlay" />

                <div className="showcase-card top">
                  <span>01</span>
                  <strong>Parts</strong>
                  <small>Replacement, repair and upgrade requests</small>
                </div>

                <div className="showcase-card bottom">
                  <span>02</span>
                  <strong>Wheels + Tires</strong>
                  <small>Fitment reviewed before ordering</small>
                </div>
              </div>

              <div className="hero-mini-panel">
                <strong>Catalog focus</strong>
                <span>No scooters, no e-bikes, no electric mobility products.</span>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="section anchor-section">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow">
                  <span></span>
                  Product catalog
                </div>
                <h2>Automotive products customers can request with confidence.</h2>
              </div>

              <p>
                The catalog is focused on eligible vehicle-related products: tires,
                wheels, rims, parts and accessories. No electric scooter or e-bike
                inventory is included.
              </p>
            </div>

            <div className="category-strip">
              {highlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
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
                    <div className="product-note">{product.note}</div>
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

        <section id="payments" className="section payment-section anchor-section">
          <div className="container payment-grid">
            <div className="payment-panel">
              <div className="eyebrow">
                <span></span>
                Payment setup
              </div>

              <h2>Ready for Stripe, Affirm or Katapult when approved.</h2>

              <p>
                Payment buttons can be connected after credentials, merchant approval
                and checkout rules are ready. The current site keeps the business focus
                clean for automotive parts and accessories.
              </p>

              <div className="payment-warning">
                <strong>Important catalog rule</strong>
                <span>
                  Keep the store focused on auto parts, wheels, tires, rims and
                  accessories. Avoid scooters, e-bikes and electric mobility language.
                </span>
              </div>
            </div>

            <div className="payment-methods">
              {paymentMethods.map((method) => (
                <div className="payment-card" key={method.name}>
                  <div>
                    <span>{method.name}</span>
                    <strong>{method.label}</strong>
                    <small>{method.status}</small>
                  </div>
                  <p>{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section anchor-section">
          <div className="container process-layout">
            <div className="process-sticky">
              <div className="eyebrow">
                <span></span>
                Customer flow
              </div>
              <h2>A simple quote-first buying process.</h2>
              <p>
                Instead of forcing a generic checkout, customers can first confirm the
                correct part, size or fitment before payment.
              </p>
            </div>

            <div className="process-list">
              {processSteps.map((step) => (
                <div className="process-item" key={step.number}>
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section anchor-section">
          <div className="container about-card">
            <div>
              <div className="eyebrow">
                <span></span>
                Business focus
              </div>

              <h2>Premier Motors SF LLC</h2>

              <p>
                A professional automotive parts storefront focused on practical vehicle
                products, quote requests, fitment help and payment readiness.
              </p>
            </div>

            <div className="about-grid">
              <div>
                <strong>Included</strong>
                <span>Auto parts, wheels, tires, rims and accessories.</span>
              </div>

              <div>
                <strong>Excluded</strong>
                <span>No electric scooters, no e-bikes and no electric mobility catalog.</span>
              </div>

              <div>
                <strong>Purpose</strong>
                <span>Quote requests, catalog browsing and payment preparation.</span>
              </div>

              <div>
                <strong>Support</strong>
                <span>Help choosing the correct fitment before purchase.</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section anchor-section">
          <div className="container contact-grid">
            <form
              className="contact-form"
              name="quote"
              method="POST"
              data-netlify="true"
              onSubmit={() => {
                window.setTimeout(() => {
                  alert("Request submitted. We will contact you soon.");
                }, 100);
              }}
            >
              <input type="hidden" name="form-name" value="quote" />

              <div className="eyebrow">
                <span></span>
                Request a quote
              </div>

              <h2>Tell us what your vehicle needs.</h2>

              <div className="field-grid">
                <input className="input" name="name" placeholder="Full name" required />
                <input className="input" name="phone" placeholder="Phone number" />
              </div>

              <input
                className="input"
                name="email"
                type="email"
                placeholder="Email address"
                required
              />

              <div className="field-grid">
                <input
                  className="input"
                  name="vehicle"
                  placeholder="Vehicle year / make / model"
                />
                <input
                  className="input"
                  name="category"
                  placeholder="Part category"
                />
              </div>

              <textarea
                className="input textarea"
                name="message"
                placeholder="Example: tire size, wheel size, part name, VIN, or what you need help finding..."
                required
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
                  Payment methods can be connected after approval, credentials and
                  checkout flow are ready.
                </p>
              </div>

              <div className="side-card highlighted">
                <span>Catalog rule</span>
                <strong>Automotive only</strong>
                <p>
                  Keep this page focused on vehicle parts, wheels, tires, rims and
                  accessories only.
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