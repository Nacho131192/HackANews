import React, { useState, useEffect } from 'react';

function Festivals() {
  const [data, setData] = useState([]);
  const targetId = 1; 
  useEffect(() => {
    // Replace 'http://localhost:3001' with your Node.js server URL
    fetch('http://localhost:3000/themes/6')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Se ha producido un errror');
        }
        return response.json();
      })
      .then((data) => {
        // Filter the data array to include only elements with the targetId
        const filteredData = data.filter((item) => item.id === targetId);
        setData(filteredData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [targetId]);

  return (
    <div>
        <h1>FILM FESTIVALS</h1>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default Festivals;


/*
export default function Festivals () {
    return (
    <h1>Film Festivals</h1>
    
    )} */