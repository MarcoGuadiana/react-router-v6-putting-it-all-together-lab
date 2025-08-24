import { Link, useOutletContext } from "react-router-dom";

const DirectorList = () => {
  const { directors = [] } = useOutletContext() || {};

  if (directors.length === 0) return <p>No directors found.</p>;

  return (
    <ul>
      {directors.map(director => (
        <li key={director.id}>
          <Link to={`${director.id}`}>{director.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DirectorList;
