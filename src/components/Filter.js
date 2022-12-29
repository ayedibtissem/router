import React from "react";
import Form from 'react-bootstrap/Form';
import Rating from '@mui/material/Rating';
function Filter ({defaultRate,getSearch,getRate}){
  
    const handleChangeTitle=(e)=>{
getSearch(e.target.value);
    }
    return (
<div>
    <form>

<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
<Form.Label style={{color:"red",fontSize:"25px"}}>Title</Form.Label>
<Form.Control
onChange={handleChangeTitle}
  type="text"
  name="title"
  placeholder="Enter your movie"
    autoFocus
/>
</Form.Group>
</form>

<Rating
onChange={(event,newValue)=>{
getRate(newValue);
}}
        name="simple-controlled"
        max={10}
        defaultValue={0} 
         
      />
</div>

    );
}
export default Filter;