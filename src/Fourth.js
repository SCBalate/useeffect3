import React,{useState,useEffect} from 'react';
import { fakeFetch } from './Constants/FourthConst';

function Fourth() {
    const [user,setUser] = useState([]);
    const[filterUser , setFilterUser] = useState([]);
    const[selectComapny,setSelectCompany] = useState();

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
try{
    const response = await fakeFetch("https://example.com/api/users");
    const {data} = response;
    setUser(data);
    setFilterUser(data);
}catch(err){
    console.log("Error while fetching users", err);
}
    }

const onSelectCompany=(e)=>{
setSelectCompany(e.target.value);
if(e.target.value === " "){
    setFilterUser(user);
}else{
    const filteredcompany = user.filter((x)=>x.company === e.target.value);
    setFilterUser(filteredcompany);
}
}


  return (
    <div>
        <select value={selectComapny} onChange={onSelectCompany}>
            <option value=" ">All</option>
          
                <option value="ABC Inc">ABC Inc</option>
                <option value="XYZ Corp">XYZ Corp</option>
                <option value="ACME Corp">ACME Corp</option>
            
          
        </select>
    <div>
        {filterUser.map((x)=>{
            return(
                <ul>
                    <li>
                        <h3>Name : {x?.name}</h3>
                        <div>Email : {x?.email}</div>
                        <div>Website : {x?.website}</div>
                        <div>Company : {x?.company}</div>
                    </li>                </ul>
            )
        })}
    </div>
    </div>
  )
}

export default Fourth