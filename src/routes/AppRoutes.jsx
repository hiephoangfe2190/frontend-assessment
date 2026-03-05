import { Routes, Route } from "react-router-dom";
import ExerciseOnePage from "../pages/exercise-one-page/ExerciseOnePage";
import ExerciseTwoPage from "../pages/exercise-two-page/ExerciseTwoPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ExerciseOnePage />} />
      <Route path="/exercise-two" element={<ExerciseTwoPage />} />
    </Routes>
  );
};

export default AppRoutes;