import "./App.css";
import Movies from "../movies_rnexgr.json";
import LogoNetflix from "./img/logo.png";

function App() {
  return (
    <div>
      <header>
        <img className="LogoNetflix" alt="Logo Netflix" src={LogoNetflix} />
      </header>

      <main>
        {Movies.map((CategoryofMovie, index) => (
          <div className="Element">
            <h2>{CategoryofMovie.category}</h2>
            <div className="allMovies">
              {CategoryofMovie.images.map((MoviesUrl, MoviesIndex) => (
                <img
                  key={MoviesIndex}
                  src={MoviesUrl}
                  alt={`${CategoryofMovie} ${MoviesIndex}`}
                />
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
