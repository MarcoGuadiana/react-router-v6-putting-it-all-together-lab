import { useParams, Link, Outlet, useOutletContext } from 'react-router-dom';

function DirectorCard() {
  const { id } = useParams();
  const { directors = [], setDirectors = () => {} } = useOutletContext() || {};
  
  const director = directors.find(d => d.id === id);

  if (!director) return <h2>Director not found.</h2>;

  return (
    <div>
      <h2>{director.name}</h2>
      <p>{director.bio}</p>
      <h3>Movies:</h3>
      <ul>
        {director.movies && director.movies.length > 0 ? (
          director.movies.map(movie => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))
        ) : (
          <li>No movies found.</li>
        )}
      </ul>

      <Link to={`movies/new`}>Add New Movie</Link>
      <Outlet context={{ director, setDirectors }} />
    </div>
  );
}

export default DirectorCard;
