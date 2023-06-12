import React, { useEffect, useState } from "react";

function About() { 
  const [APIData, setAPIData] = useState([])
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => setAPIData(data));
  }

  useEffect(() => {
    fetchData();
  },[])

 

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    console.log("hdadajda");
    if (searchInput !== '') {
        const filteredData = APIData.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setAPIData(filteredData)
    }
    else{
      setAPIData(APIData)
    }
}

  return (
    <main>
      <h1>User List</h1>
      <input icon='search' type="text"
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
            />
      <ul>
        {
          APIData.map ((items) => {
            return (
              <>
              <tr>
                <td>{items.name}</td>
                <td>{items.email}</td>
                <td>{items.address.city}</td>
                <td>{items.address.zipcode}</td>

              </tr>
              </>
            )
          })
        }


      </ul>
      
    </main>
  );
}

export default About;