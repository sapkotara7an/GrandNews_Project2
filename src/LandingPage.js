import React, { useEffect } from 'react';
import { Button, Carousel, Form,} from 'react-bootstrap';
import NewsData from './Data/TopNewsData';
import StoryData from './Data/MoreStoriesData';
import fashionTrendData from './Data/FashionTrendDatas';
import { Link } from 'react-router-dom';
import LatestNewsData from './Data/LatestNewsData';
import { FaBolt } from "react-icons/fa6";


function Landing_Page() {

        useEffect(() => {
                window.scrollTo(0, 0);
              }, []);

        return (
                <>
                        <div className='container mt-2'>
                                <div className='row bg-dark'>
                                        <div className='col-lg-6 col-md-12 col-sm-12 '>
                                           <Link to={'/banner_details_page'}><img className='w-100 mb-2' src={require('../src/img/Banner3.jpg')} /></Link> 
                                        </div>
                                        <div className='col-lg-6 col-md-12 col-sm-12 bg-dark p-3 '>
                                               <Link to={'/fashion'}><button className='top_btn text-center'>Top News</button></Link> 
                                                <h3 className='py-2 text-white'>We Can’t Wait to Try These Makeup Trends From the Fall 2016 Runways</h3>
                                                <p className='text-white py-2'>Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet,
                                                        consectetur Nulla fringilla purus at leo
                                                        dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet […]</p>
                                                <div className='bannerlink'>
                                                     <Link to={'/banner_details_page'}><button type="button"  className="btn btn-link text-white ">Continue Reading...</button></Link> 
                                                     </div>
                                        </div>
                                </div>
                        </div>
                       
                        <div className='bg-light text-black my-3 container pt-3  shadow-sm flex' >
                                <div>
                                        <button className='px-3 py-2 mb-3 text-white text-center border-none me-5' style={{background:'#DA0081'}}><strong> <FaBolt /> TRENDING</strong>
                                        </button>
                                        </div>
                                                <Carousel controls={false} indicators={false}>
                        <Carousel.Item>
                           <Link to ='/topnews/1'>    <h5 className='text-black mt-2'>Blogger Rumi Neely: Where to Eat, Drink and Shop in California</h5> </Link> 
                        </Carousel.Item>
                        <Carousel.Item>
                        <Link to ='/more_stories/3'><h5 className='text-black mt-2'>Kookaï’s Spring 2015 Runway Arrivals Talk Trends and Supporting Local Labels</h5></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Link to ='/latestnews/3'><h5 className='text-black mt-2'>Spotted! What the Editors Wore to Fashion Week Fall 2016</h5></Link>
                        </Carousel.Item>
                        </Carousel>
                                        </div>

                        <div className='container pt-3'>

                                <div className='row '>
                                        <div className='col-lg-6 col-md-12 col-sm-12 '><Link to={'/latestnews/3'}><img src={require('../src/img/bsec2.jpg')} className='w-100' /></Link>
                                                <h2 className='text-black' >Industry Influencers Reveal the Famous Women Who Inspire</h2>
                                                <p className='writer'>John Philippe <span>POSTED ON JULY 22, 2015</span></p>
                                        </div>

                                        <div className='col-lg-6 col-md-12 col-sm-12'>
                                                <div className='row'>
                                                        
                                                        {NewsData.map((post) => (
                                                                <div className='col-lg-6 col-md-12 col-sm-12  '>
                                                                        <Link to={`/topnews/${post.id}`}>
                                                                        <div className='mb-4 '>
                                                                                <img src={post.image} className='w-100 ' />
                                                                                <h5 className='text-black'>{post.title}</h5>
                                                                        </div>

                                                                        </Link>
                                                                </div>
                                                        ))}
                                                                
                                                </div>

                                        </div>
                                </div>


                        </div>

                        <div className='ads_label container my-5'>advertisement
                                <img src={require('../src/img/ad.png')} className='w-100' />
                        </div>

                        <div className='container'>
                                <div className="d-flex">
                                <div className="flex-grow-1">
                                        <p className='bantitle'>ALL THE LATEST NEWS</p>
                                        </div>


                                </div>
                        </div>

                        <div className='container  banner2nd'>

                                <div className='flex row'>
                                        <div className='col-lg-6 col-md-12 col-sm-12'>
                                         <Link to={'/fashion'}>      <img src={require('../src/img/B3A.jpg')} className='w-100' />
                                                <h2 className='text-black' >Industry Influencers Reveal the Famous Women Who Inspire</h2></Link> 
                                                <p className='writer'>John Philippe <span>POSTED ON JULY 22, 2015</span></p>
                                        </div>

                                        <div className='col-lg-6 col-md-12 col-sm-12'>
                                                <div className='row'>
                                                        
                                                        {LatestNewsData.map((post) => (
                                                                <div className='col-lg-6 col-md-12 col-sm-12  '>
                                                                        <Link to={`/latestnews/${post.id}`}>
                                                                        <div className='mb-4 '>
                                                                                <img src={post.image} className='w-100 ' />
                                                                                <h5 className='text-black'>{post.title}</h5>
                                                                        </div>

                                                                        </Link>
                                                                </div>
                                                        ))}
                                                                
                                                </div>

                                        </div>
                                </div>
                        </div>
                        <div className='container my-4 text-white'>
                                <div className='banner-3 '>
                                     <Link to={'/more_stories/4'}>   <img src={require('../src/img/B3B.jpg')} className='w-100' height='450px' /></Link>
                                        <div className='banner3_text px-2 py-2'><button className=''>Beauty</button>
                                                <p className='writer text-white'>John Philippe <span>POSTED ON JULY 22, 2015</span></p>
                                                <h2 className='py-2'>High-End Stree style Shines at Haute Coture Fashion Week in Paris</h2>
                                        </div>

                                </div>
                        </div>

                        <div className='b-3 container my-5'>
      <div className='row justify-content-center gap-5'>
        <p className='bantitle '>Fashion Trends</p>
        {fashionTrendData.map((trend) => (
          <div className='col-lg-3 col-md-5 col-sm-8 col-xs-10' key={trend.id}>
             <Link to={`/fashion_trend/${trend.id}`}>          
            <div className='bimage shadow'>
              <img src={trend.image} height={'450px'} className='w-100' alt={trend.title} />
              <div className='btext'>
                <h3 className='text-white'>{trend.title}</h3>
                <p className='text-white'>{trend.location}</p>
              </div>
            </div>
            </Link> 
          </div>
        ))}
      </div>
    </div>

                        <section className='ad container'>
                                <div className='ads_label pb-5'>advertisement
                                        <img src={require('../src/img/ad2.png')} className='w-100' />
                                </div>
                        </section>

                        <section className='banner_last container'>
                                <p className='bantitle'>MORE STORIES</p>
                                <div className='row'>
                                <div className='col-lg-8 col-md-12 col-sm-12'>
      {StoryData.map((item) => (
        <div className='content flex py-4' key={item.id}>
          
          <div className='pe-3' >
          <Link to={`/more_stories/${item.id}`}>
            <img src={item.image} style={{maxWidth:'250px'}} alt={item.title} />
         </Link>
          </div>
         
          <div><Link to={`/more_stories/${item.id}`}>
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
                                <Button className='bg-dark px-5' size="md">
                                  Sign Up
                                </Button>

                                                </div>

                                                <div className=' '>
                                             
                                                        {LatestNewsData.map((post) => (
                                                                       <Link to={`/latestnews/${post.id}`}> 
                                                               <div className='row flex py-2'>
                                                                 
                                                                <div className='col-lg-5 col-md-5 col-sm-5 '>
                                                                        
                                                                        <img src={post.image} alt={post.id} width={'150px'} />
                                                                </div>

                                                                <div className='col-lg-7 col-md-7 col-sm-7'>
                                                                        <p className='text-black fw-bold'>{post.title}</p>
                                                                        </div>
                                                                       
                                                        
                                                        </div> </Link>
                                                                               
                                                                       ))}

                                                        
                                                </div>
                                        </div>



                                </div>
                        </section>
                </>
        )
}

export default Landing_Page;