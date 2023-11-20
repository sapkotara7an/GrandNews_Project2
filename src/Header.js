
import React, { useEffect, useState } from 'react'
import { Button, Col,Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';



function Header() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
   <Navbar  collapseOnSelect expand="md" bg="dark"variant='dark' className='top_navbar' >
      <Container className='navbars'>
      
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto gap-4">
            <NavLink href="#Today_date" >{date.toDateString()}</NavLink>
            <NavLink to='/'>Home</NavLink>
            <NavLink to=''>Advertisement</NavLink>
          
            <NavLink to='/contact'>Contact</NavLink>
            
           
          </Nav>
          <Nav className="ms-auto gap-3">
            <NavLink to =''><i className='fa fa-facebook text-primary bg-light p-1 rounded-3'/></NavLink>
            <NavLink to =''><i className="fa fa-twitter text-primary bg-light p-1 rounded-3"/></NavLink> 
            <NavLink to =''><i className="fa fa-youtube bg-danger p-1 rounded-3"/></NavLink>
            <NavLink to =''><i className="fa fa-vimeo-square bg-danger p-1 rounded-3"/></NavLink>
            <NavLink to =''><i className="fa fa-google-plus bg-success p-1 rounded-3"/></NavLink>
            <NavLink to =''><i className="fa fa-pinterest bg-danger p-1 rounded-3"/></NavLink>
            <NavLink to =''><i className="fa fa-instagram bg-danger p-1 rounded-3"/></NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
 
       

<Container>
  <Row>
    <Col className='col-lg-4 col-md-12 col-sm-6 mx-auto '>
  <div className='image text-centre my-4'>
  <Link to='/'> <img className ='py-3 w-100' src={require('../src/img/logo.png')}/></Link> 
    
  </div>
  </Col>
  </Row>
</Container>


<div className='main_nav mb-3'>
<Navbar expand="lg" className="bg-body-tertiary mininav nav_lists ">
      <Container>
      <Navbar.Brand className='me-auto brand' ><Link to="/"><img src={require('../src/img/logo.png')} width={'180px'}/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto gap-5 ">
            <NavLink to='/' className='pt-2'>HOME</NavLink>
            <NavDropdown title='CATEGORIES' id="navbarScrollingDropdown">
              <NavDropdown.Item >
                <NavLink to ='/economy' >NEWS</NavLink>
                </NavDropdown.Item>
              <NavDropdown.Item >
              <NavLink to ='/magazine'>MAGAZINE</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item ><NavLink to='/fashion'>FASHION</NavLink></NavDropdown.Item>
              
            </NavDropdown>
            <NavLink to={'/entertainment'} className='pt-2'>ENTERTAINMENT</NavLink>
            <NavLink to='/fashion' className='pt-2'>FASHION</NavLink>
            <NavLink to={'/contact'} className='pt-2 '>CONTACT</NavLink>
          </Nav>

          <NavLink className='ms-auto '>
        <Link to={'subscribe'}>
          <Button variant='dark'>SUBSCRIBE</Button>
          </Link>  
            </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>


 

    </>
  )
}

export default Header