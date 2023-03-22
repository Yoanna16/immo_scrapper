import React from 'react';
import { Link } from 'react-router-dom';


const Card = ({
    name, 
    price,
    region, 
    size,
    url
}) => {
  return (
    <Link className='card-btn' to={url}>
    <article className='card'>
      <div className="app-img">
        <img src='test' alt='test' />
      </div>
      <div className="details">
        <h3 className="neigh-name">
         <span>{name}</span>
        </h3>
        <h4>
          Price: <span>{price}</span>
        </h4>
        <h4>
          Region: <span>{region}</span>
        </h4>
        <h4>
          Size: <span>{size}</span>
        </h4>
      </div>
    </article>
    </Link>
  )
}

export default Card