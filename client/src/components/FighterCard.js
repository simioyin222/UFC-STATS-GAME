import React from 'react';

function FighterCard({ fighter }) {
  return (
    <div>
      <h3>{fighter.name}</h3>
      <p>Weight: {fighter.weight}</p>
      <p>Height: {fighter.height}</p>
    </div>
  );
}

export default FighterCard;