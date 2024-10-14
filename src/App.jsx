import { useState } from "react"


function App(){

  const [bgColor, setBgcolor] = useState("lightpink");
   return (
    <div className="w-full h-screen flex  justify-center items-center duration-200 relative"
      style={{backgroundColor:bgColor}}
      >
        <h1 className="font-bold text-white text-6xl border border-white rounded-2xl p-2">Change Background Color</h1>
      {/* i am going to make bg changer */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-x-5">
        <button onClick={()=>setBgcolor("red")} 
          className="text-black font-bold rounded-lg border-x-4 bg-red-500 p-4">
          Red
        </button>
        <button onClick={()=>setBgcolor("blue")} 
          className="text-black font-bold rounded-lg border-x-4 bg-blue-500 p-4">
         Blue
        </button>
        <button onClick={()=>setBgcolor("yellow")} 
          className="text-black font-bold rounded-lg border-x-4 bg-yellow-500 p-4">
          Yellow
        </button>
        <button onClick={()=>setBgcolor("green")} 
          className="text-black font-bold rounded-lg border-x-4 bg-green-500 p-4">
          Green
        </button>
      </div>

    </div>
   )
}

export default App




