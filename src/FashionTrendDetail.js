import React, { useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import fashionTrendData from './Data/FashionTrendDatas';


import { Container, Nav, NavLink, Navbar } from 'react-bootstrap';


const TrendDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const navigate = useNavigate();
    const handleInfo = () => {
        
        navigate('/');
      };

  let {pid} = useParams()
  let data=fashionTrendData.find((a)=>a.id==pid)
  
  return (
  <>
        <button className='bg-secondary text-white px-2 mt-3 rounded-2' style={{marginLeft:'150px'}} onClick={handleInfo}><FaArrowLeft/> &nbsp;back</button>
        <Navbar  collapseOnSelect expand="md"variant='dark'  >
      <Container className='navbars mt-4'>
      
        <Navbar.Collapse id="responsive-navbar-nav" >
          
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
    <div className='container  mb-5 p-5 bg-light shadow  ' style={{maxHeight:'700px'}} >
        <div className='row'>
       
            <div className='col-lg-5'>
            
      
      
      <div className=' me-4  '>
        <img className='shadow-lg' src={data.image} alt={data.title} style={{maxHeight:'500px'}} />
        </div>


            </div>

            <div className='col-lg-5 px-3 '>
            <div className=' mb-3'><h3>Model: {data.title}</h3> </div>
            <div className=''><p>{data.location}</p></div>
            <div className='py-5'><p>{data.description}</p></div>
           
                
                
                
              </div>
            </div>

        

      
      
     
      
    </div>
    </>
  );
};

export default TrendDetails;
