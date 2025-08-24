import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import DirectorContainer from "./pages/DirectorContainer";
import DirectorCard from "./pages/DirectorCard";
import MovieCard from "./pages/MovieCard";
import DirectorForm from "./pages/DirectorForm";
import MovieForm from "./pages/MovieForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Directors parent route */}
        <Route path="/directors" element={<DirectorContainer />}>
          <Route index element={<DirectorForm />} />
          <Route path="new" element={<DirectorForm />} />
          <Route path=":id" element={<DirectorCard />}>
            <Route path="movies/new" element={<MovieForm />} />
            <Route path="movies/:movieId" element={<MovieCard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
