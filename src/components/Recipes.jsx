import React from 'react'
import { useContext } from 'react';
import Card from "./Card";
import { Link, useLocation } from "react-router-dom";
import { Recipecontext } from '../Context/Recipecontext';

const Recipes = () => {
  const[recipes,setrecipes] = useContext(Recipecontext);
  const{pathname} = useLocation();
  return (
    <div>
      <h1 className='text-center text-2xl font-semibold'>OUR RECIPES</h1>
      <p className='text-center text-zinc-400'>Explore are recipes and create you own with lots of love </p>
      <div className='recipe-card mt-[5%] flex flex-wrap p-5'>
        {recipes.length>0 ? (recipes.map((r)=> <Card key={r.id} recipe={r} />)) : (
          <h1 className='w-full text-orange-600 font-extrabold text-center mt-10'>No Recipe Found</h1>
        )}
      </div>

    {pathname === "/recipes" && (
      <Link to='/create-recipe' className="">Create Recipe</Link>
    )}
    </div>
  )
}

export default Recipes;
