import React, { Fragment, useEffect, useState } from 'react'
import Card from './components/Card'
import Pproperty from './components/Pproperty'
import Testeffect from './components/Testeffect'
const App = () => {
  const[count,setCount] =useState(0)
  const[namee,setName] =useState("firstName")
  const[show,setShow] =useState("HIDE")
  let onincrement=() =>{
    if( count<=10)
      {
    setCount((prev)=>prev+1)
  }
  }
  useEffect(()=>{
    console.log("side effect called")
  },[count])
  const changename=() =>{
    setName("secondName")
  }
  const showhandle=() =>{
    setShow((prev)=>!prev)
  }
  return (

<Fragment>
    <div className='container'>

<button onClick={showhandle}>{show?'Hide':'show'}</button>
  
{show&&
<div>
<h1>safvanasana</h1>
<h3>COUNT <h1>{count}</h1></h3>
<button onClick={onincrement}>increment</button>
<div>{namee}</div>
<button onClick={changename}>change Name</button>
<Card 
        title="Card Title"
        image=""
        content="This is the content of the card."
        footer="This is the footer."
      />
      <Pproperty name="SHABEEB" title="my hubby"/>
</div>}
<Testeffect count="count" onincrement="onincrement"/>
      </div></Fragment>
  )
}

export default App