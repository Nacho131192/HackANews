import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CategoriesPage() {
  const categories = {
    celebrities: {
      title: "Celebrities", 
      id: 1
    },
    premieres: {
      title: "Premieres", 
      id: 2
    },
    oscars2024:  {
      title: "Oscars 2024", 
      id: 3
    },
    reviews:  {
      title: "Reviews", 
      id: 4
    },
    ranking:  {
      title: "Ranking", 
      id: 5
    },
    festivals:  {
      title: "Film Festivals", 
      id: 6
    },
  }

  let { categoryId } = useParams();
  const [data, setData] = useState([]);
  const targetId = categories[categoryId].id;

  console.log(targetId)
 
  useEffect(() => {
    
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
       <h1>{categories[categoryId].title}</h1>
   
       <h2>{item.new_title}</h2>
       <h3>{item.new_entrance}</h3>
       <h4>{item.new_text}</h4>


        </article>
      ))}
    </div>
  );
}

export default CategoriesPage;

