import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


 

const Header = () =>  {
  return (
    <Navbar  expand="lg"  bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Col xs={8}>
        <Navbar.Collapse id="navbarScroll" className='justify-content-center'>
           <Link to="/" className='text-light px-3 text-decoration-none '>Home</Link>
           <Link to="/services" className='text-light px-3 text-decoration-none'>Services</Link>
           <Link to="/features" className='text-light px-3 text-decoration-none'>Features</Link>
           <Link to="/about" className='text-light px-3 text-decoration-none'>About Us</Link>
           <Link to="/contact" className='text-light px-3 text-decoration-none'>Contact Us</Link>
        </Navbar.Collapse>
        </Col>

        <Col> 
        <Button variant="success"  >Login</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="warning">Register</Button>
        </Col>
           
        
        

            

   
        
      </Container>
    </Navbar>
  );
}

export default Header;