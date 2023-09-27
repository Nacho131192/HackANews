import React, { useState, useEffect } from 'react';

function Oscars2024() {
  const [data, setData] = useState([]);
  const targetId = 3; 
  useEffect(() => {
    // Replace 'http://localhost:3001' with your Node.js server URL
    fetch('http://localhost:3000/themes/3')
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
        <h1>Oscars 2024</h1>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default Oscars2024;



/*xport default function Oscars () {
    return (
    <h1>OSCARS 2024</h1>
    
    )} */