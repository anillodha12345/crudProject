import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

 const  Features = () => {
  const [ user,setUser] = useState()

  function getData  () {
    fetch("http://localhost:8000/posts")
    .then((result) =>  result.json())
    .then((resp) =>setUser(resp))
  } 

  useEffect(() =>{
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
  
  {
    user?.map((items,i) => {
      return (
     <tr key={i}>
       <td>{i}</td>
      <td>{items.name}</td>
      <td>{items.email}</td>
      <td>{items.add}</td>
      <td>{items.college}</td>
      <td>{items.branch}</td>
      <Link to={`/features/${items.id}`}><td><Button variant="primary">Details</Button></td></Link>
     </tr>
      )
    })
  }
</tbody>
  </Table>
  
  
  </>
  )
}


export default Features