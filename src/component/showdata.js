import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom'


 const Showdata  = ()  => {
  const params = useParams();
  const { id } = params;
  const[data,setData] = useState("")

  function getData() {
    fetch(`http://localhost:8000/posts/${id}`)
    .then((response) => response.json())
    .then((datas) => setData(datas));

  }
  
  useEffect(() => {
    getData()

  },[])
 
    
    

  
  return (
  <>
  <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Add</th>
        <th>College</th>
        <th>Branch</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
  
 
     <tr> 
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.add}</td>
      <td>{data.college}</td>
      <td>{data.branch}</td>
     
     </tr>
      
   
</tbody>
  </Table>
  
</>
  )
}


export default Showdata