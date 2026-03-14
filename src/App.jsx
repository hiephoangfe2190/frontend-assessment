import AppRoutes from "./routes/AppRoutes";
import "./app-layout.scss";

const App = () => {
  return (
    <div className="app-layout">
      <main className="app-layout__content">
        <AppRoutes />
      </main>
    </div>
  );
};

export default App;