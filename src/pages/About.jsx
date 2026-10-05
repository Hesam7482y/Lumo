import { Link } from "react-router-dom";
 import '../pages/products.css'

const values = [
    { icon: "🚚", title: "Fast shipping",  text: "Your order is on its way quickly." },
    { icon: "🔄", title: "Easy returns",   text: "Changed your mind? No problem." },
    { icon: "⭐", title: "Quality picks",  text: "Products we are happy to recommend." },
];
export default function About(){
    return(
        <>
                {/* ===== Hero ===== */}
        <section className="about-hero">
            <span className="hero-tag">About Lumo</span>
            <h1 className="hero-title">Who <span>we are</span></h1>
            <p className="hero-sub">
                Lumo is a simple online shop that makes finding what you need
                clear, fast and enjoyable.
            </p>
        </section>
 
        {/* ===== Story ===== */}
        <section className="about-story">
            <div>
                <h2>Our story</h2>
                <p>
                    Lumo started with one idea: shopping online should feel easy.
                    We bring beauty, fragrances, furniture and groceries together
                    in one place, with a clean design and a fast search so you can
                    find your next favorite product in seconds.
                </p>
                <Link to="/products" className="hero-btn primary">Browse products →</Link>
            </div>
            <div className="about-visual">
                <img
                    src="https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp"
                    alt="Featured product"
                />
            </div>
        </section>
 
        {/* ===== Values ===== */}
        <section className="home-section">
            <h2 className="home-heading">Why choose us</h2>
            <p className="home-subheading">Three things we care about</p>
            <div className="cat-grid">
                {values.map(v => (
                    <div key={v.title} className="cat-card">
                        <div className="cat-icon">{v.icon}</div>
                        <h3>{v.title}</h3>
                        <p>{v.text}</p>
                    </div>
                ))}
            </div>
        </section>
 
        {/* ===== Contact ===== */}
        <section className="cta">
            <h2>Have a question? Get in touch</h2>
            <p>We are happy to hear from you.</p>
            <div className="cta-contact">
                <a href="tel:09307337482">📞 09307337482</a>
                <a href="mailto:hesan7482u@gmail.com">✉️ hesan7482u@gmail.com</a>
            </div>
        </section>
        </>
    )

}