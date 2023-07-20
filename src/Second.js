import React ,{useState,useEffect}from 'react';
import { fakeFetch } from './Constants/SecondConst';


function Second() {
    const[details,setDetails]= useState([]);
    

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
        try{
const response = await fakeFetch("https://example.com/api/user");
const{data}=response;
setDetails(data);
        }catch(err){
            console.log("Error while fetchimg the data"+err);

        }
    }

    const onHideAddress =()=>{
        setDetails(prevData =>({...prevData,address : ""}));
    }


  return details && (
    <div>
        <div>{details.name}</div>
        <div>{details.email}</div>
        <div>{details.phone}</div>
        <div>{details?.address?.street}</div>
        <div>{details?.address?.suit}</div>
        <div>{details?.address?.city}</div>
        <div>{details?.address?.zipcode}</div>
        <button onClick={onHideAddress}>Hide Address</button>
    </div>
  )
}

export default Second