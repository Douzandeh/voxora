import { useEffect, useRef } from "react";
import "./banner.css";
import { motion, useAnimation, useInView } from "framer-motion";
const Banner = ({ bannerInfo }) => {
  // Reference to observe when banner area becomes visible
  const ref = useRef(null);

  // Trigger animation when 20% of the banner enters viewport (only once)
  const inView = useInView(ref, { once: true, amount: 0.2 });

  // Separate animation controls for text and image
  const textControls = useAnimation();
  const imgControls = useAnimation();

  // When banner enters view, trigger animations in sequence
  useEffect(() => {
    if (!inView) return;
    (async () => {
      // Start text reveal animation
      await textControls.start("visible");

      // Image enters after text
      await imgControls.start("visible");

      // Apply infinite floating animation to the image
      imgControls.start({
        y: ["0px", "-6px", "0px"],
        transition: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 4,
          ease: "easeInOut",
          delay: 0.6,
        },
      });
    })();
  }, [inView]);

  // Parent animation to stagger children
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  // Left-slide text (slide-in from left)
  const leftTextVariant = {
    hidden: { opacity: 0, x: -24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 110, damping: 20 },
    },
  };

  // Small fade animation for minor text
  const smallFade = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.48 } },
  };

  // Image entry animation + scale pop
  const imageVariant = {
    hidden: { opacity: 0, scale: 0.9, y: 12 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 20 },
    },
  };

  return (
    <>
      <div className="banner-section position-relative overflow-hidden mt-5 rounded">
        <div className="container">
          <motion.div
            className="banner-card rounded-5"
            style={{
              backgroundImage: bannerInfo.bg,
              backgroundColor: "transparent",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "400px",
            }}
            ref={ref}
            variants={containerVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="row g-0 d-flex align-items-center p-4 p-md-5">
              {/* LEFT TEXT SECTION */}
              <motion.div className="z-1 col-12 col-md-4 order-1">
                <motion.h5 variants={leftTextVariant}>
                  {bannerInfo.discount}
                </motion.h5>
                <motion.h1
                  className="fw-bolder display-5 text-white mb-2"
                  variants={leftTextVariant}
                >
                  {bannerInfo.tag}
                </motion.h1>
                <motion.h5 variants={leftTextVariant}>
                  {bannerInfo.date}
                </motion.h5>
              </motion.div>
              {/* CENTER IMAGE SECTION */}
              <div className="z-0 col-12 col-md-4 d-flex justify-content-center align-items-center banner-wrapper order-2">
                <motion.img
                  src={bannerInfo.image}
                  alt="banner"
                  className="promo-image z-1"
                  variants={imageVariant}
                  animate={imgControls}
                  whileHover={{ scale: 1.03 }}
                />
              </div>
              {/* RIGHT TEXT SECTION */}
              <motion.div className="z-1 col-12 col-md-4 d-flex flex-column justify-content-center gap-3 order-3">
                <motion.h3
                  variants={leftTextVariant}
                  className="fw-bold text-white"
                >
                  {bannerInfo.subTitle}
                </motion.h3>
                <motion.h2 variants={leftTextVariant} className="fw-bold mb-1">
                  {bannerInfo.title}
                </motion.h2>
                <motion.p variants={smallFade}>{bannerInfo.desc}</motion.p>
                <motion.div variants={smallFade}>
                  <button
                    className="btn btn-light fw-bold rounded-pill"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Shop Now
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Banner;
