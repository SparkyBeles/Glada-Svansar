import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/Dogs.css";
import { fetchDogList } from "../api/DogsApi";

export default function Dogs() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetchDogList()
      .then(setDogs)
      .catch(() => setDogs([]));
  }, []);

  return (
    <div className="background-dogs">
      <div className="grid-container">
        {dogs.length > 0
          ? dogs.map((dog, i) => (
              <Link
                key={dog.chipNumber ?? i}
                to={`/dog/${dog.chipNumber}`}
                state={{ dog }}
                className="grid-link"
                aria-label={`Visa ${dog.name}`}
              >
                <img
                  className="grid-item"
                  src={dog.img}
                  alt={dog.name}
                  loading="lazy"
                />
              </Link>
            ))
          : Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="grid-item"
                style={{ aspectRatio: "1 / 1", background: "orange" }}
              />
            ))}
      </div>
    </div>
  );
}
