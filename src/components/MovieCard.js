import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import {useNavigate}from "react-router-dom";

function MovieCard({data}){
  console.log(data);
  const navigate=useNavigate();
    return ( <div> <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={data.posterUrl} />
    <Card.Body>
      <Card.Title>{data.title}</Card.Title>
      <Card.Text>
       {data.description}
      </Card.Text>
      <Button variant="primary" onClick={()=>navigate(`/movie/${data.id}`)} >Go</Button>
      <Rating name="read-only" value={data.rating} max={10} readOnly />

    </Card.Body>
  </Card>

</div>
    );
}
export default MovieCard;