import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/home-page/HomePage";
import ExerciseOnePage from "../pages/exercise-one-page/ExerciseOnePage";
import ExerciseTwoPage from "../pages/exercise-two-page/ExerciseTwoPage";
import NotFoundPage from "../pages/not-found-page/NotFoundPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/exercise-1" element={<ExerciseOnePage />} />
      <Route path="/exercise-2" element={<ExerciseTwoPage />} />

      {/* 404 route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;