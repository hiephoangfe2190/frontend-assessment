import HeroBanner from "../../components/exercise-one/hero-banner/HeroBanner";
import ContentCard from "../../components/exercise-one/content-card/ContentCard";
import productDesktop from "../../assets/products/product-desktop.jpg";
import productMobile from "../../assets/products/product-mobile.jpg";
import BackButton from "../../components/common/back-button/BackButton";
import "./exercise-one-page.scss";

const productList = Array.from({ length: 4 }, (_, index) => ({
  id: index,
  brandName: "Brand Name",
  heading: "Heading",
  price: "$80.95",
  oldPrice: "$80.95",
  imageDesktop: productDesktop,
  imageMobile: productMobile,
  link: "#"
}));

const ExerciseOnePage = () => {
  return (
    <main className="exercise-one-page">

      <BackButton />

      <HeroBanner />

      <section className="exercise-one-page__products bg-[#efefef] px-6 py-16 max-sm:px-3 max-sm:py-8">

        <h2 className="exercise-one-page__heading text-center mb-12 max-sm:mb-6">
          Heading
        </h2>

        <div
          className="
          exercise-one-page__grid
          grid
          grid-cols-2
          gap-4
          max-sm:gap-x-[4px]
          max-sm:gap-y-[8px]
          xl:grid-cols-4
          "
        >

          {productList.map((product) => (
            <ContentCard
              key={product.id}
              {...product}
            />
          ))}

        </div>

      </section>

    </main>
  );
};

export default ExerciseOnePage;