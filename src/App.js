import './App.css';
import MovieList from './components/MovieList';
import data from "./components/data.js";
import AddMovie from './components/AddMovie';
import { useState } from 'react';
import Filter from './components/Filter';
function App() {
  const [newData,setNewData]=useState(data);
  const Adding=(newMovie)=>{
    setNewData([...newData,newMovie]);
  };
const [search,setSearch]=useState("");
const[rating,setRating]=useState(0);


  return (
    <div className="App">
      <Filter defaultRate={rating} getSearch={setSearch} getRate={setRating}></Filter>
      <AddMovie Adding={Adding}></AddMovie>
   <MovieList data={newData.filter((el)=>el.title.trim().toLocaleLowerCase().includes(search))}></MovieList>
    </div>
  );
}
export default App;