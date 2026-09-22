import { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import "./cards.css";

function CategoryCard({ cat, index }) {
  // Reference to the card container
  const ref = useRef(null);
  // Detect when the card enters 25% of the viewport (trigger once)
  const inView = useInView(ref, { amount: 0.25, once: true });

  // Animation controller for reveal animation
  const controls = useAnimation();

  // Start reveal animation when card becomes visible
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  // Track scroll progress for parallax animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Horizontal parallax movement for image
  const imgMove = 18;
  const imgX = useTransform(scrollYProgress, [0, 1], [0, imgMove]);

  // Card reveal animation: fade, slide up, and scale
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 110,
        damping: 16,
        mass: 0.6,
        delay: 0.12 * i,
      },
    }),
  };

  // split category title into two styled parts
  const parts = (cat.title || "").split(" ");
  const first = parts[0] || "";
  const second = parts[1] || "";

  // background style for card
  const bgStyle = {
    backgroundImage: cat.bg,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "transparent",
  };

  return (
    <motion.div
      className={
        // Change vertical alignment based on index
        index > 3
          ? "cat-card d-flex align-content-center align-items-md-start p-4"
          : "cat-card d-flex align-content-center align-items-md-end p-4"
      }
      style={bgStyle}
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      custom={index}
      whileHover="hover"
    >
      {/* left side text content */}
      <div className="cat-text ms-2 z-1">
        <p className="mb-1">{first}</p>
        <p className="fs-4 fw-semibold mb-1">{second}</p>
        <p className="display-6 fw-bold opacity-25 mb-3">{cat.cat}</p>
        <button className="fw-bold btn btn-light btn-md px-4 py-2 rounded-pill">
          Browse
        </button>
      </div>
      {/* Right side image content */}
      <div className="cat-overlay">
        <motion.img
          src={cat.image}
          alt={cat.title}
          className="cat-image"
          style={{ x: imgX }} // Parallax scroll movement
          drag={false}
          variants={{ hover: { y: -6, scale: 1.03 } }} // hover lift effect
          transition={{ type: "spring", stiffness: 160, damping: 20 }}
        />
      </div>
    </motion.div>
  );
}

export default CategoryCard;