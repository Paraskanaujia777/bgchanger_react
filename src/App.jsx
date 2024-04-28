import { useState } from 'react'
// import './App.css'

function App() {
  const [ color , setColor ] = useState("olive")
 
  return (

    <div className="w-full h-screen"
    style={{backgroundColor:color}}>


      <div className='fixed flex flex-wrap justify-center bottom-12 px-12'>

        <div className='flex flex-wrap justify-center px-3 py-2 gap-3 bg-white rounded-2xl' >
          <button className='outline-none px-4 py-2 rounded-xl text-white' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>

          <button className='outline-none px-4 py-2 rounded-xl text-white' style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>

          <button className='outline-none px-4 py-2 rounded-xl text-white' style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>

          <button className='outline-none px-4 py-2 rounded-xl text-white' style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>

          <button className='outline-none px-4 py-2 rounded-xl text-white' style={{backgroundColor:"brown"}} onClick={()=>setColor("brown")}>brown</button>

          <button className='outline-none px-4 py-2 rounded-xl text-white' style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>purple</button>
          
          <button className='outline-none px-4 py-2 rounded-xl text-white' style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>yellow</button>

          <button className='outline-none px-4 py-2 rounded-xl text-white' style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>black</button>

          <button className='outline-none px-4 py-2 rounded-xl text-white' style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>orange</button>

          <button className='outline-none px-4 py-2 rounded-xl text-white' style={{backgroundColor:"darkgreen"}} onClick={()=>setColor("darkgreen")}>darkgreen</button>

          <button className='outline-none px-4 py-2 rounded-xl text-white' style={{backgroundColor:"magenta"}} onClick={()=>setColor("magenta")}>magenta</button>

        </div>

      </div>

    </div>
     

  )
}

export default App
