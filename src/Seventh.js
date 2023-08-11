import React, { useState, useEffect } from 'react';
import { fakeFetch } from './Constants/SeventhConst';

const Seventh = () => {
  const [project, setProject] = useState([]); // Assuming project should store the array of products
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortedByPrice, setSortedByPrice] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/products");
      const data = response; // Assuming response directly provides an array of products
      setProject(data);
      setSortedProducts(data.slice()); // Create a new copy of the array
      console.log(data);
    } catch (err) {
      console.log("Error while fetching data" + err);
    }
  }

  useEffect(() => {
    if (sortedByPrice) {
      const sorted = [...sortedProducts].sort((a, b) => a.price - b.price);
      setSortedProducts(sorted);
    } else {
      setSortedProducts(project); // Create a new copy of the array
    }
  }, [sortedByPrice, project, sortedProducts]);

  return (
    <div>
      <button onClick={() => setSortedByPrice(prevState => !prevState)}>Sort by price</button>
      {sortedProducts?.map((x, index) => {
        return (
          <div key={index}>
            <div>{x.name}</div>
            <div>{x.description}</div>
            <div>{x.price}</div>
            <div>{x.quantity}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Seventh;
