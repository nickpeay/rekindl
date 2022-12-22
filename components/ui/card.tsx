import React from 'react';

const Card = (props: any) => {
  return (
    <div className='card'>
      <h2>{props.pack.title}</h2>
      <h3>{props.pack.description}</h3>
      <p>Cost: ${props.pack.cost}</p>
    </div>
  );
};

export default Card;
