import React, { useState } from 'react'

const App = () => {

  const [Tiltle, setTiltle] = useState('')
  const [Description, setDescription] = useState('')
  const [Notes, setNotes] = useState([])

  const [ShowAlert, setShowAlert] = useState(false)
  const [AddMessage, setAddMessage] = useState('')
  const [DeleteMassage, setDeleteMassage] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

     if (!Tiltle.trim() || !Description.trim()) 
      {
       setShowAlert(true)
       setTimeout(() => { setShowAlert(false) }, 3000)
       return
      }
    const newNote = [...Notes];
    newNote.push({Tiltle, Description})
    setNotes(newNote)

    setTiltle('')
    setAddMessage(true)
    setTimeout(() => { setAddMessage(false) }, 3000)
    setDescription('')

    
  }
  const Delete = (index) =>{
      const updatedNotes = [...Notes];
      updatedNotes.splice(index, 1)
      setNotes(updatedNotes)
      setDeleteMassage(true)
      setTimeout(() => { setDeleteMassage(false) }, 3000)
    }
  return (
    <div className='h-screen w-full lg:flex bg-[url("https://t4.ftcdn.net/jpg/03/92/25/09/360_F_392250914_2Od8jNRBPgpMu8W29vCh4hiu5EUXbgGU.jpg")] bg-cover bg-center '>
      {ShowAlert && ( 
         <div className=" top-5 right-5
        bg-red-500 text-white
         px-6 py-3
         rounded-lg
         shadow-lg
         animate-bounce
         transition-all
         absolute
      ">
          Please fill both Title and Description
      </div>
      )}
      {DeleteMassage && ( 
         <div className=" top-5 right-5
        bg-gray-500 text-white
         px-6 py-3
         rounded-lg
         shadow-lg
         animate-bounce
         transition-all
         absolute
      ">
          Note deleted successfully!
      </div>
      )}
      {AddMessage && ( 
         <div className=" top-5 right-5
        bg-green-500 text-white
         px-6 py-3
         rounded-lg
         shadow-lg
         animate-pulse
         transition-all
         absolute
      ">
          Note added successfully!
      </div>
      )}

      <form onSubmit={(e)=>{
        submitHandler(e)
      }}
      className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>
        <h1 className='text-4xl'>Add Note</h1>

        <input
         type="text" 
         placeholder='Enter Note Title' 
         value={Tiltle}
         onChange={(e)=>setTiltle(e.target.value)}
         className='font-medium border-2 outline-none border-gray-300 rounded-md px-3 py-2 w-full' />

        <textarea
         type="text"
          placeholder='Enter Note Description'
          value={Description}
          onChange={(e)=>setDescription(e.target.value)}
         className='font-medium border-2 outline-none border-gray-300 rounded-md px-3 py-2 w-full' />

        <button 
          type='submit'
          className='
          bg-gradient-to-r from-blue-500 to-indigo-600 
        text-white font-medium px-6 py-2 rounded-md
          transition-all duration-200
          hover:scale-105 hover:shadow-lg
          active:scale-95 active:shadow-inner '>
          Add Note
        </button>
      </form>
      <div className='h-full pt-10 relative lg:w-1/2'>
        <h1 className='text-4xl pb-6'>Your Notes</h1>
        <div id='Notes' className='flex flex-wrap gap-2 h-[90%] overflow-y-auto'>   
       {Notes.length === 0 ? (
       <div><p className="text-gray-400 text-lg">No notes yet...</p></div>
       ) : (
    Notes.map((NoteData, index) => (
      <div
        id='Notes'
        key={index}
        className='
          relative
          bg-white
          text-gray-900
          w-64
          h-88
          m-3
          overflow-scroll
          rounded-2xl
          shadow-md
          hover:shadow-xl
          transition-all
          duration-300
          hover:-translate-y-1
          flex flex-col
          cursor-pointer
          bg-[url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm90ZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60")]
        '
    
      >
        
        <div className="relative group">
          <h2 className='
          text-xl
          font-semibold
          p-4
          border-b-2
          border-gray-400
          break-words
          
        '>
          {NoteData.Tiltle}
           <span className="text-[13px] text-gray-400 m-2 opacity-0 group-hover:opacity-100 ">
             Haeding
            </span>
        </h2>
        </div>
        <p className='
          p-4
          text-gray-800
          break-words
        '>
          {NoteData.Description}
        </p>
        
        <button onClick={() => {
            Delete(index)
          }}
          className="
          absolute top-3 right-3
          hover:bg-red-100
          hover:text-red-600
          text-sm
          px-3 py-2
          rounded-full
          hover:bg-red-200
          active:scale-95
          transition-all duration-200
          cursor-pointer
         "
        >
          ✕
        </button>
      </div>
    ))
    )}
    </div>
      </div>
  
    </div>
  )
}

export default App
