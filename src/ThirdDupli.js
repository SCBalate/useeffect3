import React,{useState,useEffect} from 'react';
import { fakeFetch } from './Constants/ThirdConst';

function ThirdDupli() {
    const[movies,setMovies] = useState([]);
    const[filterdMovies,setFilterdMovies] = useState([]);
    const[selectedYear,setSelectedYear] = useState('');

    useEffect(()=>{
fetchMovies();
    },[]);

const fetchMovies =async()=>{
    try{
        const response = await fakeFetch("https://example.com/api/movies");
        const{data} = response;
        setMovies(data);
        setFilterdMovies(data); //()
    }
catch(err){
    console.log("error while fetching the movies",err);
}
}

const handleYearFilterChange=(e)=>{
    setSelectedYear(e.target.value);
if(e.target.value === ''){
    setFilterdMovies(movies);
}else{
    const filteredMovies = movies.filter((x)=>x.year.toString() === e.target.value)
    setFilterdMovies(filteredMovies);

}
}

  return (
    <div>
    <select value={selectedYear} onChange={handleYearFilterChange}>
    <option value="">All Years</option>
    <option value="2005">2005</option>
    <option value="2006">2006</option>
    <option value="2007">2007</option>
    <option value="2008">2008</option>
    <option value="2009">2009</option>
    <option value="2010">2010</option>
  </select>
    <div>{filterdMovies.map((x,index)=>{
        return(
            <li key={index}>
                <h1>{x?.title}</h1>
                <div>Year : {x?.year}</div>
                <div>Ratings : {x?.rating}</div>
            </li>
        )
    })}</div></div>
  )
}

export default ThirdDupli