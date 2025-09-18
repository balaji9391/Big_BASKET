/* ================= GLOBAL RESET ================= */
body {
  top: 0%;
  margin: 0;
  padding: 0;
}

/* ================= HERO SECTION ================= */
.hero-container {
  padding-right: 2%;
  border-radius: 1%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50vh;
  background: radial-gradient(circle at center,#121212);
   /* only gap between items */
}

.hero-content {
  flex: 1;
  text-align: left;
  color: rgb(6, 121, 188);
}

.hero-content h1 {
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 10px;
}

.hero-content .animate {
  font-size: 3.5rem;
  font-weight: 900;
  text-transform: uppercase;
  background: linear-gradient(500deg, #c5c6c5, #f5f504);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-logo {
  display: block;
  margin: 20px 0;
  width: 180px;
  height: auto;
}

.hero-video {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-video video {
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

/* ================= PRODUCTS SECTION ================= */
.products {
  padding: 60px 0;   /* ❌ no left/right padding */
  margin: 0;
  background: #0f0e0e;
  text-align: center;
}

.products h2 {
  display: inline-block;
  padding: 8px 20px;
  font-size: 2rem;
  color: #fff;
  text-align: center;
  border: 4px solid transparent;
  border-radius: 12px;
  background: linear-gradient(#060606, #060606) padding-box,
              linear-gradient(90deg, #f52323, #ffcc00, #00ffcc, #f52323) border-box;
  background-size: 200% 100%;
  animation: borderAnimation 3s linear infinite;
}

/* Sparkle / flowing border animation */
@keyframes borderAnimation {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

/* Product Card */
.card {
  width: 100%;
  max-width: 450px;
  border-radius: 20px;
  

  /* 🔥 Transparent background */
  background: rgba(0, 0, 0, 0.4) !important; 
  backdrop-filter: blur(6px); /* Glass effect (optional) */

  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  animation: fadeUp 0.6s ease forwards;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.12);
}

.product-card img {
  width: 60%;
  height: 140px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 12px;
  transition: transform 0.3s ease;
}

.product-card:hover img {
  transform: scale(1.05);
}

.product-card h3 {
  margin: 10px 0 6px;
  font-size: 1.2rem;
  color: #f6f3f3;
  font-weight: 600;
}

.product-card .price {
  font-size: 1.15rem;
  font-weight: bold;
  color: #28a745;
  margin: 8px 0 12px;
}

/* Add to Cart Button */
.add-btn {
  background: linear-gradient(135deg, #e0fd04, #c3e703);
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.add-btn:hover {
  background: linear-gradient(135deg, #c3e703, #9fc402);
  transform: scale(1.07);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
}

/* ================= SWIPER CAROUSEL FIX ================= */
.swiper {
  padding-bottom: 40px; /* only bottom space */
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: stretch;
  height: auto;
}

.swiper-pagination-bullet {
  background: #58f57d;
  opacity: 0.7;
}

.swiper-pagination-bullet-active {
  background: #1c7c31;
  opacity: 1;
}

.swiper-button-next,
.swiper-button-prev {
  color: #fcfdfc;
  transition: transform 0.2s ease;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  transform: scale(1.2);
}

/* ================= RESPONSIVE ================= */
@media (max-width: 768px) {
  .hero-container {
    flex-direction: column;
    text-align: center;
    height: auto;
    gap: 20px;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-content .animate {
    font-size: 2.2rem;
  }

  .hero-video video {
    max-width: 250px;
  }

  .products h2 {
    font-size: 1.6rem;
  }

  .product-card img {
    height: 160px;
  }
}

/* ================= ANIMATIONS ================= */
.animate {
  display: inline-block;
  opacity: 0;
  transform: translateX(20px);
  animation: fadeInUp 3.9s forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
