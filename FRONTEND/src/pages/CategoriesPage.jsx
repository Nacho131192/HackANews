import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CategoriesPage() {
  const categories = {
    celebrities: 1,
    premieres: 2,
    oscars2024: 3,
    reviews: 4,
    ranking: 5,
    festivals: 6
  }

  let { id } = useParams();
  const [data, setData] = useState([]);
  const targetId = categories[id];
  console.log(targetId)
  useEffect(() => {
    // Replace 'http://localhost:3001' with your Node.js server URL
    fetch(`http://localhost:3000/entries/themes/${targetId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Se ha producido un error');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data)
        const filteredData = data.data.entry;
        console.log(filteredData)
        setData(filteredData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [targetId]);

  return (
    <div>
        
      {data.map((item) => (
       <article key={item.id}>
       <h2>{item.new_title}</h2>
       <h3>{item.new_entrance}</h3>
       <h4>{item.new_text}</h4>


        </article>
      ))}
    </div>
  );
}

export default CategoriesPage;


/*export default function Celebrities () {
    try {
      
    } catch (error) {
      error(error.message)
    }
return (
<h1>CELEBRITIES</h1>

)}
*/
