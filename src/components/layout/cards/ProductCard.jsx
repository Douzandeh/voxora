import "./cards.css";
import { motion } from "framer-motion";
function ProductCard({ product, index = 0 }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.99 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 110,
        damping: 18,
        mass: 0.6,
        delay: 0.08 * i,
      },
    }),
  };

  return (
    <motion.div
      className="product-card-wrapper"
      variants={cardVariants}
      custom={index} //pass index for stagger animation
      initial="visible"
      transition={0.7 | 0.3}
      viewport={{once: true}}
    >
      {/* Product Card */}
      <div className="card product-card mb-4 border-0">
        {/* Product Image */}
        <div className="card-img position-relative">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded-2 product-image"
          />
        </div>
        {/* Product Center */}
        <div className="card-des mt-3 mb-3">
          <h4 className="card-title transition-color">{product.title}</h4>
          <h5 className="fw-bold price">{product.price}</h5>
          <button className="btn add-to-cart btn-primary btn-md rounded-pill fw-bold mt-3">
            Add To Card
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;
