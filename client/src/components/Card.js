import React from 'react';
import { Link } from 'react-router-dom';


const Card = ({
    name, 
    price,
    location
}) => {
  const url = 'https://www.die-wg-boerse.de/wg-suche/suche/'
  return (
    <Link className='card-btn' to={url}>
    <article className='card'>
      <div className="details">
        <h3 className="neigh-name">
         <span>{name}</span>
        </h3>
        <h4>
          Price: <span>{price}</span>
        </h4>
        <h4>
          Location: <span>{location}</span>
        </h4>
      </div>
    </article>
    </Link>
  )
}

export default Card