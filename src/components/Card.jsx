import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
    const {id,title, image, description, instructions, ingredients} = props.recipe;
  return (
    <Link to={`/recipes/${id}`} className='mr-[3.3%] mb-[3%]  b p-5 shadow-[10px_10px_15px_0px_rgba(0,0,0,0.1)] hover:scale-[1.02] duration-200'>
        <img className="w-[80%] h-20" src={image}  alt={title}></img> 
        <h1 className='mt-5 mb-3 text-xl text-semibold'>{title}</h1>
        <p>{description.slice(0,100)}...</p>
        <div>
          <p></p>
        </div>
    </Link>
  )
}

export default Card;
