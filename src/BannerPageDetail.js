import React, { useEffect } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import { Container, Nav, NavLink, Navbar } from 'react-bootstrap';





const BannerDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const navigate = useNavigate();
    const handleInfo = () => {
        
        navigate('/');
      };

 const data =[
    {
    id:1,
    image: require('../src/img/Banner3.jpg'),
    title:'We Can’t Wait to Try These Makeup Trends From the Fall 2016 Runways',
    description :'In a dazzling fusion of style and substance, this seasons fashion narrative unfolds like a captivating story on the runway. From the bold and avant-garde to the timeless and classic, the pages of our fashion magazine are a celebration of individuality and self-expression. Immerse yourself in a kaleidoscope of textures, patterns, and hues that redefine the boundaries of sartorial creativity. Embrace the power of fashion as a form of art, as each ensemble becomes a brushstroke on the canvas of personal identity. Our curated collection unveils a symphony of trends that seamlessly blend tradition with modernity, inviting you to explore and embrace the limitless possibilities of self-discovery through style. Join us on this extraordinary journey, where every stitch and accessory tells a unique story, and fashion becomes a passport to a world of endless inspiration.'
    }
 ]
  
  return (
  <>
     <button className='bg-secondary text-white px-2 mt-3 rounded-2' style={{marginLeft:'150px'}} onClick={handleInfo}><FaArrowLeft/> &nbsp;back</button>
     <div className='container mt-4'><h2>{data[0].title}</h2></div>

     <Navbar  collapseOnSelect expand="md"variant='dark'  >
      <Container className='navbars mt-2'>
      
        <Navbar.Collapse id="responsive-navbar-nav" >
         
        <NavLink to ='' className='text-black me-3'><h4>31.4K </h4>Shares</NavLink>
          
          <Nav className="me-auto gap-2 " style={{fontSize:'20px'}}>
          
            <NavLink to ='' className='bg-primary'><i className='fa fa-facebook '/>&nbsp; Share On Facebook</NavLink>
            <NavLink to ='' className='bg-dark'><i className="fa fa-twitter"/>&nbsp;Tweet it</NavLink>
            
            
            <NavLink to =''className='bg-danger'><i className="fa fa-vimeo-square"/></NavLink>
            <NavLink to =''className='bg-success'><i className="fa fa-google-plus"/></NavLink>
           
            <NavLink to ='' className='bg-danger'><i className="fa fa-instagram"/></NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='container  mb-5  bg-light shadow  ' >
        
        
        <div className='text-center shadow-lg '>
        <img className='w-100' src={data[0].image} alt={data.title} />
        </div>
       
            <div className='p-5'><p>{data[0].description}</p></div>
            
            
            

        

      
      
     
      
    </div>
    </>
  );
};

export default BannerDetails;
