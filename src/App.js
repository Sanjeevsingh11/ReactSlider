import Slide from "./Components/Slide";
import "./App.css";
import React, { useState,useEffect} from "react";



export default function App() {
  const [data,setData] = useState([])
  const [index,setIndex] = useState(0)
  useEffect( ()=>{
    let url = `https://slides-app-220822.herokuapp.com/slides`
    fetch(url).then((result)=>{
      result.json().then((res)=>{
        setData(res)
      })
    })
  },[])
  console.warn(data)

  const nextfun = ()=>{
    if(index<data.length-1)
    setIndex(index+1)
  }
  const prevfun = ()=>{
    if(index>0)
    setIndex(index-1)
  }
  return (
    <div className="App">
      <h1 data-cy="header">Slides</h1>
      
      <Slide {...data[index]}/>
      <button className="button" onClick={prevfun} disabled={index===0} data-cy="prev">Prev</button>
      <button className="button" onClick={nextfun} disabled={index===data.length-1} data-cy="next">Next</button>
    </div>
  );
}
