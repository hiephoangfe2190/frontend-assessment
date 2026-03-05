import { useNavigate } from "react-router-dom";
import "./back-button.scss";

const BackButton = () => {
  const navigate = useNavigate()

  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <button
      className="back-button"
      onClick={handleNavigateHome}
    >
      ← Back to Home
    </button>
  );
};

export default BackButton;