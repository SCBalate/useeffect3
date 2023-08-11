import React,{useState,useEffect} from 'react';
import { fakeFetch } from './Constants/SixthConst';

const Sixth = () => {
    const[movies,setMovies]=useState([]);
    const[filterMovies , setFilterMovies] = useState([]);
    const[selectComapny,setSelectCompany] = useState();

    useEffect(() =>{
        Setdata();
    },[])

    const Setdata =async()=>{
        try{
            const response = await fakeFetch('https://example.com/api/movies');
            const {data} = response;
            setMovies(data);
            setFilterMovies(data);
            console.log(data);
        }catch(e){
            console.log("unable to fetch the data"+e)
        }
    }

    const onFilterMovies = (e)=>{
        
        setSelectCompany(e.target.value);
        if(e.target.value === ''){
            setFilterMovies(movies);
        }else{
            const filteredMovies = filterMovies.filter((x)=>x.genre === e.target.value);
            setFilterMovies(filteredMovies);
        }
    }

  return (
    <div>
    <select value={selectComapny} onChange={onFilterMovies}>
            <option value=" ">All</option>
          
                <option value="Crime">Crime</option>
                <option value="Drama">Drama</option>
                <option value="Action">Action</option>
                <option value="Comedy">Comedy</option>
                <option value="Science Fiction">Science Fiction</option>
            
          
        </select>
        {
            filterMovies.map((x,index)=>{
                return(
                    <div key={index}>
                    <div>{x?.title}</div>
                    <div>{x?.year}</div>
                    <div>{x?.genere}</div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Sixth