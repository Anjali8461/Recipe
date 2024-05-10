import React, { useContext, useState } from 'react'
import { nanoid } from "nanoid";
import { Recipecontext } from '../Context/Recipecontext'
import { useNavigate } from "react-router-dom";

const Create = () => {
    const navigate = useNavigate();
    const[recipes, setrecipes] = useContext(Recipecontext);
    const[image,setimage] = useState("");
    const[title,settitle] = useState("");
    const[description,setdescription] = useState("");
    const[ingredients,setingredients] = useState("");
    const[instructions,setinstructions] = useState("");
    
    const submitHandler = (e) =>{
      e.preventDefault();
      const newRecipe = {
        id: nanoid(),
        image,
        title,
        description,
        ingredients,
        instructions
      };
      setrecipes([...recipes, newRecipe]);

      localStorage.setItem("recipes",JSON.stringify([...recipes, newRecipe]));
       navigate("/recipes")

    }
  return (
    <form onSubmit={submitHandler} className='w-[70%] m-auto pb-5'>
        <h1 className='text-7xl mt-5 font-extrabold text-orange-600 mb-[5%]'>Create<br></br>New Recipe</h1>
        <input onChange={(e)=>setimage(e.target.value)}
          value={image} type="url" placeholder = 'Recipe Image Url' className='w-full border rounded-md px-6 py-3 text-lg mb-5' />
        <input onChange={(e)=>settitle(e.target.value)}
          value={title} type="text" placeholder = 'Recipe Name' className='w-full border rounded-md px-6 py-3 text-lg mb-5'/>
        
        <textarea onChange={(e)=>setdescription(e.target.value)}
            value={description} type="text" placeholder = 'Recipe Description'className='w-full border rounded-md px-6 py-3 text-lg mb-5' />
       
        <textarea onChange={(e)=>setingredients(e.target.value)}
            value={ingredients} type="text" placeholder = 'Recipe Ingredients' className='w-full border rounded-md px-6 py-3 text-lg mb-5'/>
        
        <textarea onChange={(e)=>setinstructions(e.target.value)}
            value={instructions} type="text" placeholder = 'Recipe Instructions'className='w-full border rounded-md px-6 py-3 text-lg mb-5'/>
       
        <div>
            <button className='bg-orange-500 px-2 py-2 border rounded-sm'>Publish Recipe</button>
        </div>

    </form>
  )
}

export default Create
