import HeroBanner from "../../components/exercise-one/hero-banner/HeroBanner";
import ContentCard from "../../components/exercise-one/content-card/ContentCard";
import BackButton from "../../components/common/back-button/BackButton";

const ExerciseOnePage = () => {
  const cards = [
    {
      id: 1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
  ];

  return (
    <div className="exercise-one-page">
      <BackButton />

      <HeroBanner />

      <section className="max-w-[1055px] mx-auto my-[40px] px-[25px] lg:px-0 grid gap-[38px] md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {cards.map((card) => (
          <ContentCard
            key={card.id}
            description={card.description}
          />
        ))}
      </section>
    </div>
  );
};

export default ExerciseOnePage;