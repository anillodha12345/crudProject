import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = ()  => {
  return (
    <Container fluid>
      <Row className='bg-black pt-5 pb-5'>
        <Col className='text-center'><h1 className='text-white ' >Footer</h1></Col>
      </Row>
    </Container>
  );
}

export default Footer;