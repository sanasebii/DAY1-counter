import React, { useEffect,useState } from 'react'

const Testeffect = ({count,onincrement}) => {
    const[countt,setCountt] =useState(0)
    let onincrementt=() =>{
        if( countt<=10)
          {
        setCountt((prev)=>prev+1)
      }
      }
    useEffect(() => {
        console.log('Mounting.....')
        console.log('updating...')
        return()=>{
            console.log('cleanup...'+countt)
        }
    },[countt])
  return (
    <div>Testeffect <h1>count:{countt}</h1>
        <button onClick={onincrementt}>increment</button>
    </div>
  )
}

export default Testeffect