import React from 'react';
import {useParams}from "react-router-dom";
import data from "./data";
import ReactPlayer from 'react-player';
const Description=()=>{
    console.log(useParams())
    let {id}= useParams();
let myMovie=data.filter((el)=>el.id===id)
console.log(myMovie);
    return (
        <div><h1 style={{color:"red"}}>This is a description</h1>
        {myMovie.map((el)=><div><h3 style={{color:"blue"}}>Read description:</h3>
        <h2>{el.title.toUpperCase()}</h2>
        
       <h4>{el.description}</h4>
       <h3 style={{color:"brown"}}>watch the trailer</h3>

     <ReactPlayer url={el.trailerUrl}/>
       </div>  )}
        
        </div>
    )
} 
export default Description