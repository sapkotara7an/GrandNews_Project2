import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import StoryData from './Data/MoreStoriesData'
import { Link } from 'react-router-dom'

function Fashion() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
   
    <section className='fashion'>
    <div className='container py-3 text-white'>
    <div className='shadow py-4 bg-light text-center text-black my-2 '><h2>FASHION</h2> </div><hr/>
        <div className='banner-3 '><img src={require('../src/img/B3A.jpg')}className='w-100'  />
        <div className='banner3_text px-2 py-2'><button className=''>Beauty</button>
        <p className='writer text-white'>John Philippe <span>POSTED ON JULY 22, 2015</span></p>
        <h2 className='py-2'>High-End Stree style Shines at Haute Coture Fashion Week in Paris</h2>
        </div>
        
        </div>
    </div>
    </section>
    
    <section className='banner_last container'>
                                <p className='bantitle'>MORE STORIES</p>
                                <div className='row'>
                                <div className='col-lg-8 col-md-12 col-sm-12'>
      {StoryData.map((item) => (
        <div className='content flex py-4' key={item.id}>
          
          <div className='pe-5'>
          <Link to={`/more_stories/${item.id}`}>
            <img src={item.image} width='270px' alt={item.title} />
         </Link>
          </div>
         
          <div> <Link to={`/more_stories/${item.id}`}>
            <h2 className='text-black'>{item.title}</h2></Link>
            <p>{item.excerpt}</p>
            <p className='writer'>
              {item.writer} <span>{item.date}</span>
            </p>
            
          </div>
         
        </div>
      ))}
    </div>


                <div className='col-lg-4 col-md-8 col-sm-12'>

                 <div className='mb-2 ' >
                <p className='ads_label1'>Advertisement</p>
                <img src={require('../src/img/ad3.png')} className='w-100' /></div>
                                                <div className='subs my-3'><h4>SUBSCRIBE</h4>
                <p>Get the recent popular stories straight into your inbox</p>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Button className='sub_btn' size="lg">
                                  Sign Up
                                </Button>

                                                </div>

                                                <div className='banl '>
                                                        <div className='row flex py-4 '>
                                                                <div className='col-lg-3 px-2'><img src={require('../src/img/f1.jpg')} width='100px' /></div>

                                                                <div className='col-lg-9 '>
                                                                        <h6 className='text-black'>
                                                                               {StoryData[1].title}</h6></div>
                                                        </div>
                                                        <div className='row flex py-2'>
                                                                <div className='col-lg-3 px-2'><img src={require('../src/img/f2.jpg')} width='100px' /></div>

                                                                <div className='col-lg-9'><h6 className='text-black'>We Can’t Wait to Try These Makeup Trends From the Fall 2016 Runways</h6></div>
                                                        </div>
                                                        <div className='row flex py-4'>
                                                                <div className='col-lg-3 px-2 hover-zoom'><img src={require('../src/img/f3.jpg')} width='100px' /></div>

                                                                <div className='col-lg-9 '><h6 className='text-black'>3 Delicious Post-Holiday Detox Recipes,
                                                                        Courtesy of Marc Jacobs’ Personal Chef</h6></div>
                                                        </div>
                                                </div>
                                        </div>



                                </div>
                        </section>
    
    
    </>
  )
}

export default Fashion