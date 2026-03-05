import "./hero-banner.scss";

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <picture className="hero-banner__picture">
        <source
          media="(max-width: 768px)"
          srcSet="https://placehold.co/600x600"
        />

        <img
          className="hero-banner__image"
          src="https://placehold.co/1920x650"
          alt="Hero banner"
        />
      </picture>

      <div className="hero-banner__content flex flex-col items-center justify-center text-center">
        <h1 className="hero-banner__title">
          Hello Developer!
        </h1>

        <p className="hero-banner__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;