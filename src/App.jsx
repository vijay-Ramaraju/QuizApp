import { useState } from 'react'
import Question from './component/Question.json'
import DisplayOptions from './component/DisplayOptions'
import './App.css'

function App() {

  return (
    
      <div style={{display:"flex",flexDirection:"column"}}>
        {Question.map((item,index)=>{
       return(
          // eslint-disable-next-line react/jsx-key
          <div style={{display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"Center"}}>
            <h6>{item.title}</h6>
           <DisplayOptions key={index} data = {item} />
          </div>
        )
          })}
  </div>
  )
}

export default App
