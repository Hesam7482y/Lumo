import { Link } from "react-router-dom";
import '../pages/products.css'

const IMG = "https://cdn.dummyjson.com/product-images/";
 
const categories = [
    { icon: "💄", name: "Beauty",     text: "Makeup & skincare" },
    { icon: "🧴", name: "Fragrances", text: "Perfumes you'll love" },
    { icon: "🛋️", name: "Furniture",  text: "Style for every room" },
    { icon: "🛒", name: "Groceries",  text: "Fresh every day" },
];
export default function Home(){
    return(
        <>
             {/* ===== Hero ===== */}
        <section className="hero">
            <div className="hero-text">
                <span className="hero-tag">✨ New collection 2026</span>
                <h1 className="hero-title">
                    Shop smarter,<br /><span>live better.</span>
                </h1>
                <p className="hero-sub">
                    Discover beauty, fragrances, furniture and groceries in one place,
                    with great prices and fast shipping.
                </p>
                <div className="hero-btns">
                    <Link to="/products" className="hero-btn primary">Shop now →</Link>
                    <Link to="/about" className="hero-btn ghost">Learn more</Link>
                </div>
                <div className="hero-stats">
                    <div><b>194+</b><span>Products</span></div>
                    <div><b>4</b><span>Categories</span></div>
                    <div><b>24/7</b><span>Support</span></div>
                </div>
            </div>
 
            <div className="hero-visual">
                <div className="float-card c1">
                    <img src={IMG + "beauty/red-lipstick/thumbnail.webp"} alt="Red Lipstick" />
                    <span>Red Lipstick</span><b>$12.99</b>
                </div>
                <div className="float-card c2">
                    <img src={IMG + "fragrances/chanel-coco-noir-eau-de/thumbnail.webp"} alt="Coco Noir" />
                    <span>Coco Noir</span><b>$129.99</b>
                </div>
                <div className="float-card c3">
                    <img src={IMG + "furniture/annibale-colombo-sofa/thumbnail.webp"} alt="Sofa" />
                    <span>Colombo Sofa</span><b>$2499.99</b>
                </div>
            </div>
        </section>
 
        {/* ===== Categories ===== */}
        <section className="home-section">
            <h2 className="home-heading">Shop by category</h2>
            <p className="home-subheading">Find exactly what you are looking for</p>
            <div className="cat-grid">
                {categories.map(c => (
                    <Link to="/products" key={c.name} className="cat-card">
                        <div className="cat-icon">{c.icon}</div>
                        <h3>{c.name}</h3>
                        <p>{c.text}</p>
                    </Link>
                ))}
            </div>
        </section>
 
        {/* ===== Call to action ===== */}
        <section className="cta">
            <h2>Ready to find something you love?</h2>
            <p>Browse the full collection and filter by category in seconds.</p>
            <Link to="/products" className="hero-btn light">Start shopping</Link>
        </section>
        </>
    )

}