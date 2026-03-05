import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import ExerciseOnePage from "./pages/exercise-one-page/ExerciseOnePage";
import ExerciseTwoPage from "./pages/exercise-two-page/ExerciseTwoPage";
import "./app-layout.scss";

const App = () => {
  return (
    <div className="app-layout">
      <main className="app-layout__content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exercise-1" element={<ExerciseOnePage />} />
          <Route path="/exercise-2" element={<ExerciseTwoPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
