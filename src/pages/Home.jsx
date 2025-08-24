import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <NavBar />
      <main>
        <h1>🎬 Welcome to the Movie Directory 🎥</h1>
        <p>
          Explore a collection of famous directors and their iconic movies. Click
          below to start exploring!
        </p>
        <nav>
          <Link to="/directors" style={{ marginRight: "10px" }}>View Directors</Link> |{" "}
          <Link to="/about" style={{ marginLeft: "10px" }}>Learn More About This App</Link>
        </nav>
      </main>
    </>
  );
}

export default Home;
