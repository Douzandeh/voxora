import CategoryCard from "../../components/layout/cards/CategoryCard";
import HeroSlider from "../../components/layout/Hero/HeroSlider";
import { categories } from "../../constants/data";

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
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
