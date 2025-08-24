import { useEffect, useState } from "react";
import { Outlet, Link, useOutletContext } from "react-router-dom";
import NavBar from "../components/NavBar";

const DirectorContainer = () => {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then(r => {
        if (!r.ok) throw new Error("Failed to fetch directors");
        return r.json();
      })
      .then(setDirectors)
      .catch(console.log);
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <h1>Welcome to the Director's Directory!</h1>
        <Link to="new">Add New Director</Link>
        <ul>
          {directors.length > 0 ? (
            directors.map(d => (
              <li key={d.id}>
                <Link to={`${d.id}`}>{d.name}</Link>
              </li>
            ))
          ) : (
            <li>No directors found.</li>
          )}
        </ul>
        <Outlet context={{ directors, setDirectors }} />
      </main>
    </>
  );
};

export default DirectorContainer;
