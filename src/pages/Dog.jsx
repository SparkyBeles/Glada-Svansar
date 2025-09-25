import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { fetchDogByChip } from "../api/DogsApi";
import DogCard from "../components/DogCard";

export default function Dog() {
  const { chip } = useParams();
  const preloaded = useLocation().state?.dog ?? null;

  const [dog, setDog] = useState(preloaded);
  const [loading, setLoading] = useState(!preloaded);

  useEffect(() => {
    if (preloaded) return;
    setLoading(true);
    fetchDogByChip(chip)
      .then(setDog)
      .finally(() => setLoading(false));
  }, [chip, preloaded]);

  if (loading) {
    return (
      <div className="dog-detail">
        <p>Laddar…</p>
      </div>
    );
  }

  if (!dog) {
    return (
      <div className="dog-detail">
        <p>Hunden kunde inte hittas.</p>
      </div>
    );
  }

  return (
    <div className="dog-detail">
      <DogCard dog={dog} />
    </div>
  );
}
