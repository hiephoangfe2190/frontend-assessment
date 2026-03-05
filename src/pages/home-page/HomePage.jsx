import { useNavigate } from "react-router-dom";
import "./home-page.scss";

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="home-page flex items-center justify-center min-h-screen px-5 py-[60px]">
      <div className="home-page__container w-full max-w-[900px]">
        <header className="home-page__header text-center mb-[60px]">
          <h1 className="home-page__title">
            MindArc Frontend Assessment
          </h1>

          <p className="home-page__subtitle">
            Select an exercise below to view the implementation.
          </p>
        </header>

        <section className="home-page__card-grid grid gap-[30px] md:grid-cols-2">
          <button
            className="home-page__card"
            onClick={() => handleNavigate("/exercise-1")}
          >
            <div className="home-page__card-content">
              <h2 className="home-page__card-title">
                Exercise 1
              </h2>

              <p className="home-page__card-description">
                Responsive layout implementation with hero banner and content cards.
              </p>
            </div>

            <span className="home-page__card-arrow">
              →
            </span>
          </button>

          <button
            className="home-page__card"
            onClick={() => handleNavigate("/exercise-2")}
          >
            <div className="home-page__card-content">
              <h2 className="home-page__card-title">
                Exercise 2
              </h2>

              <p className="home-page__card-description">
                Tabs layout for desktop and responsive accordion layout for mobile.
              </p>
            </div>

            <span className="home-page__card-arrow">
              →
            </span>
          </button>
        </section>
      </div>
    </div>
  );
};

export default HomePage;