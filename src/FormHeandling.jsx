import React, { useState } from 'react'

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault() // Prevents the default form submission behavior, which would cause a page reload.
    //console.log(e.target) // Logs the form element that triggered the submit event to the console.
  }
  return (
    <div className=' h-full w-full p-5'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}
      className='flex flex-col items-center justify-center h-full w-full'>
        <input 
         className='px-4 py-2 lg:mx-50 w-[70%] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
         type='text'
          placeholder='Enter your details'
          onChange={(e)=>
          {
            console.log(e.target.data) // Logs the current value of the input field to the console whenever it changes.
          }
        }
          />
         <div className='flex flex-col items-center justify-center h-full w-full lg:flex-row lg:gap-4'>
          <button className='mt-8 px-4 py-2 w-74 lg:mx-30 border border-gray-300 rounded-md'>Enter</button>
         <button className='mt-8 px-4 py-2 w-74 lg:mx-30 border border-gray-300 rounded-md'>Clear</button>
         </div>
      </form>
    </div>
  )
}

export default App
