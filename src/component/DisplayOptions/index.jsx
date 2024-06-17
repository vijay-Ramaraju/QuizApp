import React from 'react'

export default function DisplayOptions(props) {
    const {data} = props
const alpha  = ['A','B',"C","D"]
const handleAns = (e) =>{
    console.log(e.target.value)
    const temp = data.answer === e.target.value ? 1: 0
    alert(temp)
}
    return (
    <div style={{display:"flex",gap:"12px",alignSelf:"flex-start"}}>{data.options.map((each,index)=>{
return(
    // eslint-disable-next-line react/jsx-key
    <div onChange={handleAns} style={{display:"flex",alignItems:"center"}}>
    <p>{alpha[index]}</p>
    <input id={each} value={alpha[index]} type='radio' name={data.title} />
    <label htmlFor  ={each}>{each}</label>
    </div>
    
    
    
)
    })}</div>
  )
}
