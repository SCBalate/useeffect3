import React,{useState} from 'react';
import { fakeFetch } from './Constants/FithConst';

function Fifth() {
    const [quote,setQuote]=useState([]);

    const generateRandomQuote =async()=>{
try{
    const response =await fakeFetch();
    setQuote(response);
}catch(e){
    console.log("Error while generating random quotes"+ e);
}
    }
  return quote && (
    <div>
        <blockquote>
          <p>{quote.content}</p>
          <footer>Author : {quote.author}</footer>
        </blockquote>
        <button onClick={ generateRandomQuote}>Generate random quote</button>
    </div>
  )
}

export default Fifth