import "./App.css";
import Nav from "./components/nav/Nav.tsx";
import FeaturedGames from "./components/FeaturedGames/FeaturedGames";

function App() {
  return (
    <>
      <Nav />
      <main>
        <FeaturedGames />
      </main>
    </>
  );
}

export default App;
