import React, { useEffect } from 'react'
import { Button, Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'


function Footer() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
    <div className='container-fluid'>
      <Row className='ftop py-3'>
        <Col className='col-lg-4 mx-auto'>
          <h2 className='text-center text-black'>Stay Updated</h2>
          <p className='text-center'>Get the recent popular stories straight into your inbox</p>
          <Form className="d-flex">
            <Form.Control
              type="email"
              placeholder="Email"
              className="me-2"
              aria-label="Search"
            />
           <Button type="submit">Sign Up</Button>
            
          </Form>

        </Col>
      </Row>
    </div>

    <div className='container-fluid bg-dark footermain py-5'>
      <div className='row'>
        <div className='col-lg-4 text-center px-5 '>
        <img src={require('../src/img/logo1.png')} width='200px'/>
        <p className='text-secondary'>
          
Mauris elementum accumsan leo vel tempor. Sit amet 
cursus nisl aliquam. Lorem ipsum 
dosectetur adipisicing elit, sed do.Lorem ipsum
 dolor sit amet, consectetur Nulla fringilla
        </p>
        
        <Navbar  collapseOnSelect expand="md" bg="dark"variant='dark' className='top_navbar' >
      <Container className='navbars'>
      
        <Navbar.Collapse id="responsive-navbar-nav" >
         
     
         
          <Nav className="me-auto gap-3">
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
        </div>
        
        
      
        
        
        
     
      <div className='col-lg-4 text-white'>
          <div className='text-center'><h5>RECENT POSTS</h5></div>
          <div className='row flex py-2'>
          
            <div className='col-lg-3'> <img src={require('../src/img/f1.jpg')} width='100px'/></div>
           
            <div className='col-lg-9 '> <Link to ='/latestnews/1'><h6 className='text-white'>3 Delicious Post-Holiday Detox Recipes, 
              Courtesy of Marc Jacobs’ Personal Chef</h6></Link></div>
          </div>
          
          <div className='row flex py-2'>
            <div className='col-lg-3'><img src={require('../src/img/f2.jpg')} width='100px'/></div>
            
            <div className='col-lg-9'><Link to ='/latestnews/2'><h6 className='text-white'>21 Questions with… Fashion Photographer Emma Summerton</h6></Link></div>
          </div>
          <div className='row flex py-2'>
            <div className='col-lg-3'><img src={require('../src/img/f3.jpg')} width='100px'/></div>
            
            <div className='col-lg-9'><h6>Runway Scorecard: The 10 Most In-Demand Models of Fashion Month Fall 2016</h6></div>
          </div>
          
          
        </div>


        <div className='col-lg-4 text-white'>
          <div className='text-center'><h5>POPULAR POSTS</h5></div>
          <div className='row flex py-2'>
            <div className='col-lg-3'><img src={require('../src/img/s1.jpg')} width='100px'/></div>
            
            <div className='col-lg-9'><Link to='/more_stories/3'><h6 className='text-white'>1Magnificent Image Of The New Hoover Dam Bridge Taking Shape</h6></Link></div>
          </div>
          <div className='row flex py-2'>
            <div className='col-lg-3'><img src={require('../src/img/Banner2.jpg')} width='100px'/></div>
            
            <div className='col-lg-9'><h6>3 Delicious Post-Holiday Detox Recipes, 
              Courtesy of Marc Jacobs’ Personal Chef</h6></div>
          </div>
          <div className='row flex py-2'>
            <div className='col-lg-3'><img src={require('../src/img/Banner1.jpg')} width='100px'/></div>
            
            <div className='col-lg-9'><Link to='/topnews/3'><h6 className='text-white'>11 Spring Pieces You Can Start Wearing Now (Seriously)</h6></Link></div>
          </div>
          
          
        </div>


    </div>
    <div className='container bg-dark  pt-5'>
    <p className='ftrcopyright text-secondary py-3'>© Copyright GrandNews Theme Demo - Theme by ThemeGoods</p>
   </div>
   </div>
 
    
    </>
  )
}

export default Footer