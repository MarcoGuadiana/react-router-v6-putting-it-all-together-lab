import { useState } from "react";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

function MovieForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { directors = [], setDirectors = () => {} } = useOutletContext() || {};

  const director = directors.find(d => d.id === id);

  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [genres, setGenres] = useState("");

  if (!director) return <h2>Director not found.</h2>;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: uuidv4(),
      title,
      time: parseInt(time),
      genres: genres.split(",").map(g => g.trim()),
    };

    fetch(`http://localhost:4000/directors/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ movies: [...director.movies, newMovie] }),
    })
      .then(r => {
        if (!r.ok) throw new Error("Failed to add movie");
        return r.json();
      })
      .then(data => {
        // Update state safely
        const updatedDirectors = directors.map(d => d.id === id ? data : d);
        setDirectors(updatedDirectors);
        navigate(`/directors/${id}/movies/${newMovie.id}`);
      })
      .catch(console.log);
  };

  return (
    <div>
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Movie Title" value={title} onChange={e => setTitle(e.target.value)} required />
        <input type="number" placeholder="Duration (minutes)" value={time} onChange={e => setTime(e.target.value)} required />
        <input type="text" placeholder="Genres (comma-separated)" value={genres} onChange={e => setGenres(e.target.value)} required />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default MovieForm;
