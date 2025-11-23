import "./App.css";
import Movies from "../movies_rnexgr.json";
import LogoNetflix from "./img/logo.png";
import Category from "./components/Category";

function App() {
  return (
    <div>
      <header>
        <img className="LogoNetflix" alt="Logo Netflix" src={LogoNetflix} />
      </header>

      <main>
        {Movies.map((categoryObj, index) => (
          <Category
            key={index}
            category={categoryObj.category}
            images={categoryObj.images}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
