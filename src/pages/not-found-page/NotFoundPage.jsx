import { Link } from "react-router-dom";
import "./not-found-page.scss";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1 className="not-found-page__title">404</h1>
      <p className="not-found-page__message">Page not found</p>

      <Link to="/" className="not-found-page__link">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;