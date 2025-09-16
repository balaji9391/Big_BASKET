import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./store"; 
import "./home.css";

import "./Navbar.css";
import "./index.css";


// Utility: Split text into spans for animation
function AnimatedText({ text, animation = "one" }) {
  return (
    <div className={`animate ${animation}`}>
      {text.split("").map((char, index) => (
        <span key={index}>
          {char === " " ? "\u00A0" : char} {/* preserve spaces */}
        </span>
      ))}
    </div>
  );
}

function Home() {
  const dispatch = useDispatch();

  // Fetch products
  const vegItems = useSelector((state) => state.prod.veg);
  const nonVegItems = useSelector((state) => state.prod.nonveg);
  const chocolates = useSelector((state) => state.prod.chocolates);
  const milkItems = useSelector((state) => state.prod.drinks);

  // Helper function to render category rows
  const renderRow = (title, items) => (
    <div className="category-row">
      <h2>{title}</h2>
      <div className="row-scroll">
        {items.map((product) => (
          <div key={product.id} className="card">
            <div className="image-container">
              <img src={product.imageurl} alt={product.Name} />
            </div>
            <div className="card-body">
              <h3 className="card-title">{product.Name}</h3>
              <p className="card-text">Fresh and high quality</p>
              <h4 className="price-tag">₹{product.price}</h4>
              <button
                className="btn-success"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* ✅ Hero Section with Video Background */}
      <div className="hero-container">
        <video autoPlay loop muted playsInline className="bg-video">
          <source src="/videos/bgHome.mp4" type="video/webm" />
        </video>

        {/* ✅ Text + Button on top of video */}
        <div className="hero-content">
          <AnimatedText text="Welcome to Big Basket" animation="four" />
          <button
            className="shop-btn"
            onClick={() => window.scrollTo({ top: 400, behavior: "smooth" })}
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* ✅ Product Sections */}
      {renderRow("Vegetables", vegItems)}
      {renderRow("Non-Veg", nonVegItems)}
      {renderRow("Chocolates", chocolates)}
      {renderRow("Milk & Drinks", milkItems)}
    </>
  );
}

export default Home;
