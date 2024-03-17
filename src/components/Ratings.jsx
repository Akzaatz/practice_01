import React from "react";
import PropTypes from "prop-types";

const Ratings = ({ logement }) => {
  // Nous utilisons parseInt pour convertir la valeur de la note du logement en un nombre entier
  const score = parseInt(logement.rating);
  const stars = [];

  for (let i = 0; i < 5; i++) {
    const color = i < score ? "#FF6060" : "#E3E3E3";
    stars.push(
      <span key={i} style={{ color: color }}>
        ★
      </span>
    );
  }

  return (
    <div>
      <div className="stars">{stars}</div>
    </div>
  );
};
// Nous spécifions que le composant Ratings attend une propriété logement qui doit être un objet et qui est requise
Ratings.propTypes = {
  logement: PropTypes.object.isRequired,
};

export default Ratings;
