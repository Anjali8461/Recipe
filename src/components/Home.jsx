import React from 'react'
// food = require('../assets/samosha.png')


const Home = () => {
  return (
    <div className='w-full flex justify-between items-center h-[60vh]'>
      <div className='left w-1/2'>
        <h1 className='text-7xl font-extrabold text-orange-600'>We Serve Delicious Food</h1>
        <p className='text-zinc-400 mt-5 mb-10'>Keep it easy with these simple but delicious recipes from make-ahead lunches and midweek meals to fuss-free sides.</p>
        <button className='bg-orange-600 text-white py-2 px-2 hover:bg-orange-700 duration-200'>Get Started</button>
      </div>
      <img className="w-1/2 mt-10" src="https://img.freepik.com/premium-photo/samosa-isolated-white-background_398492-14263.jpg"></img>
       
      
      
    </div>
  )
}

export default Home
