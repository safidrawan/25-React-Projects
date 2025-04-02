import React, { useState } from 'react'

function RandomColor() {
  const [bgColor, setBgColor] = useState("#000000")

  return (
    <div className='w-full mt-5' style={{backgroundColor:bgColor}}>
        <button className='py-2 px-4 m-2 bg-blue-500 text-white rounded-md ' >HEX Color</button>
        <button className='py-2 px-4 m-2 bg-blue-500 text-white rounded-md '>RGB Color</button>
        <button className='py-2 px-4 m-2 bg-blue-500 text-white rounded-md '>Generate Color</button>
    </div>
  )
}

export default RandomColor