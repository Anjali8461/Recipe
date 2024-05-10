import React from 'react'
import {Link} from "react-router-dom";
import { CiGrid41 } from "react-icons/ci";


const Nav = () => {
  return (  
    <nav className=' h-[10vh] w-full flex items-center justify-between'>
        <img className='h-full'
            src="https://images-platform.99static.com/TOhM9KiFtS83_j9xBXMuW6cUTYs=/0x0:1600x1600/500x500/top/smart/99designs-contests-attachments/108/108678/attachment_108678654" alt=""
        />
        <div className='flex gap-x-10 text-md items-center'>
            <Link className='hover:text-orange-600 duration:200' to="/">Home</Link>
            <Link className='hover:text-orange-600 duration:200' to="/recipes">Recipes</Link>
            <Link className='hover:text-orange-600 duration:200' to="/about">About</Link>
            <Link className='hover:text-orange-600 duration:200' to="/contact">Contact</Link>
        </div>
        <CiGrid41 className='text-4xl ri-grid-full text-orange-600' />
    </nav>
  )
}

export default Nav
