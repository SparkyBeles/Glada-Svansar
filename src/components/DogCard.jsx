import "../style/DogCard.css";

export default function DogCard({ dog }) {
  return (
    <div className="dog-container">
      <img className="dog-hero" src={dog.img} alt={dog.name} />
      <div className="dog-info">
        <h2>{dog.name}</h2>
        <p>
          <strong>Ras:</strong> {dog.breed}
        </p>
        <p>
          <strong>Kön:</strong> {dog.sex}
        </p>
        <p>
          <strong>Ålder:</strong> {dog.age}
        </p>
        <p>
          <strong>Chip:</strong> {dog.chipNumber}
        </p>
        {dog.owner && (
          <p>
            <strong>Ägare:</strong> {dog.owner.name} {dog.owner.lastName} —
            <a href={`tel:${dog.owner.phoneNumber}`}>
              {" "}
              {dog.owner.phoneNumber}
            </a>
          </p>
        )}
        <p>
          <strong>Närvarande:</strong>{" "}
          <span className={`badge ${dog.present ? "in" : "out"}`}>
            {dog.present ? "På plats" : "Inte på plats"}
          </span>
        </p>
      </div>
    </div>
  );
}
