import React, { useState, useEffect } from 'react';
import { fakeFetch } from './Constants/ThirdConst';

const Third = () => {
  const [allMovies, setAllMovies] = useState([]); // Original list of movies fetched from API
  const [filteredMovies, setFilteredMovies] = useState([]); // List of movies filtered by year
  const [selectedYear, setSelectedYear] = useState('');

  useEffect(() => {
    // Function to fetch movies from the API
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/movies");
      const { data } = response;
      setAllMovies(data);
      setFilteredMovies(data); 
     // Initialize filteredMovies with allMovies data
    } catch (e) {
      console.log("error while fetching the data" + e);
    }
  };

  // Function to handle the year filter dropdown change
  const handleYearFilterChange = (event) => {
    setSelectedYear(event.target.value);
    if (event.target.value === '') {
      // If 'All Years' is selected, show all movies
      setFilteredMovies(allMovies);

    } else {
      // Filter movies based on the selected year
      const filteredRestaurent = allMovies.filter((x) => x.year.toString() === event.target.value);
      setFilteredMovies(filteredRestaurent);
     
    }
  };

  return (
    <div>
      <h1>Movie List</h1>
      <select value={selectedYear} onChange={handleYearFilterChange}>
        <option value="">All Years</option>
        <option value="2005">2005</option>
        <option value="2006">2006</option>
        <option value="2007">2007</option>
        <option value="2008">2008</option>
        <option value="2009">2009</option>
        <option value="2010">2010</option>
      </select>
      <ul>
        {filteredMovies.map((movie, index) => (
          <li key={index}>
            <h3>{movie?.title}</h3>
            <p>Year: {movie?.year}</p>
            <p>Rating: {movie?.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Third;
