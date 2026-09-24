import Banner from "../../components/layout/banner/Banner";
import CategoryCard from "../../components/layout/cards/CategoryCard";
import HeroSlider from "../../components/layout/Hero/HeroSlider";
import { categories, features , bannerDes } from "../../constants/data";

function Home() {
  return (
    <>
      <HeroSlider />
      <section className="category-section section-spacing ">
        <div className="container">
          <div className="row">
            {/* loop through all categories */}
            {categories.map((cat, index) => {
              const isLarge = index === 2 || index === 3;

              return (
                <div
                  key={index}
                  className={`${
                    isLarge ? "col-lg-6 col-md-12" : "col-lg-3 col-md-6"
                  } mb-4`}
                >
                  <CategoryCard cat={cat} index={index} />
                </div>
              );
            })}
            {features.map((val, index) => {
              return (
                <>
                <div
                  className="feature-section col-lg-3 col-md-6 col-sm-6 col-12 mb-3 mb-md-0 mt-5"
                  key={index}
                  >
                  <div className="feature-item d-flex align-items-center flex-column flex-sm-row">
                    <div className="feature-icon me-sm-3 me-0 mb-sm-0">
                      <i className={val.icon}></i>
                    </div>
                    <div className="feature-text text-center text-sm-start">
                      <h5 className="fw-bold mb-0">{val.title}</h5>
                      <p className="mb-0 text-muted">{val.desc}</p>
                    </div>
                  </div>
                </div>
                <Banner bannerInfo={bannerDes}/>
            </>
              );
            })}
          </div>
        </div>
        </section>
    </>
  );
}

export default Home;
