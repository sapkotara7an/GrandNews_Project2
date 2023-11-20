import { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';







const Entertainment = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const data = [
        {
            id: 1,
            image: require('../src/img/Banner2.jpg'),
            title: 'We Can’t Wait to Try These Makeup Trends From the Fall 2016 Runways',
            description: 'In a dazzling fusion of style and substance, this seasons fashion narrative unfolds like a captivating story on the runway. From the bold and avant-garde to the timeless and classic, the pages of our fashion magazine are a celebration of individuality and self-expression. Immerse yourself in a kaleidoscope of textures, patterns, and hues that redefine the boundaries of sartorial creativity. Embrace the power of fashion as a form of art, as each ensemble becomes a brushstroke on the canvas of personal identity. Our curated collection unveils a symphony of trends that seamlessly blend tradition with modernity, inviting you to explore and embrace the limitless possibilities of self-discovery through style. Join us on this extraordinary journey, where every stitch and accessory tells a unique story, and fashion becomes a passport to a world of endless inspiration.'
        }
    ]

    return (
        <>

            <div className='banner_last container'>

            <div className='shadow py-4 mt-3 bg-light text-center text-black my-2 '><h2>ENTERTAINMENT</h2> </div>
            <section className='fashion'>
    <div className='container py-3 text-white'>
    
        <div className='banner-3 '><img src={require('../src/img/s2.jpg')}className='w-100'  />
        <div className='banner3_text px-2 py-2'><button className=''>Trending</button>
        <p className='writer text-white'>John Philippe <span>POSTED ON JULY 22, 2015</span></p>
        <h2 className='py-2'>High-End Stree style Shines at Haute Coture Fashion Week in Paris</h2>
        </div>
        
        </div>
    </div>
    </section>

                <div className='row'>
                    <div className='col-lg-8 col-md-12 col-sm-12 pe-4'>

                        <div className='container mt-4'><h2>{data[0].title}</h2></div>

                        <Navbar collapseOnSelect expand="md" variant='dark'  >
                            <Container className='navbars mt-2'>

                                <Navbar.Collapse id="responsive-navbar-nav" >

                                    <NavLink to='' className='text-black me-3'><h4>31.4K </h4>Shares</NavLink>

                                    <Nav className="me-auto gap-2 " style={{ fontSize: '20px' }}>

                                        <NavLink to='' className='bg-primary'><i className='fa fa-facebook ' />&nbsp; Share On Facebook</NavLink>
                                        <NavLink to='' className='bg-dark'><i className="fa fa-twitter" />&nbsp;Tweet it</NavLink>


                                        <NavLink to='' className='bg-danger'><i className="fa fa-vimeo-square" /></NavLink>
                                        <NavLink to='' className='bg-success'><i className="fa fa-google-plus" /></NavLink>

                                        <NavLink to='' className='bg-danger'><i className="fa fa-instagram" /></NavLink>

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

                    </div>

                    <div className='col-lg-4 col-md-8 col-sm-12 mt-5 '>

                        <div>
                            <p className='ads_label1'>Advertisement</p>
                            <img src={require('../src/img/ad3.png')} className='w-100' />
                        </div>



                        
          <div className='text-center mt-5 '><h3>Whats Tredning?</h3></div><hr/>
          <div className='row flex py-2'>
          
            <div className='col-lg-3'> <img src={require('../src/img/f1.jpg')} width='100px'/></div>
           
            <div className='col-lg-9 '> <Link to ='/latestnews/1'><h6 className='text-black'>3 Delicious Post-Holiday Detox Recipes, 
              Courtesy of Marc Jacobs’ Personal Chef</h6></Link></div>
          </div>
          
          <div className='row flex py-2'>
            <div className='col-lg-3'><img src={require('../src/img/f2.jpg')} width='100px'/></div>
            
            <div className='col-lg-9'><Link to ='/latestnews/2'><h6 className='text-black'>21 Questions with… Fashion Photographer Emma Summerton</h6></Link></div>
          </div>
          <div className='row flex py-2'>
            <div className='col-lg-3'><img src={require('../src/img/f3.jpg')} width='100px'/></div>
            
            <div className='col-lg-9'><h6>Runway Scorecard: The 10 Most In-Demand Models of Fashion Month Fall 2016</h6></div>
          </div>
          
          
          
          <div className='row flex py-2'>
            <div className='col-lg-3'><img src={require('../src/img/s1.jpg')} width='100px'/></div>
            
            <div className='col-lg-9'><Link to='/morestories/3'><h6 className='text-black'>1Magnificent Image Of The New Hoover Dam Bridge Taking Shape</h6></Link></div>
          </div>
          <div className='row flex py-2'>
            <div className='col-lg-3'><img src={require('../src/img/Banner2.jpg')} width='100px'/></div>
            
            <div className='col-lg-9'><h6>3 Delicious Post-Holiday Detox Recipes, 
              Courtesy of Marc Jacobs’ Personal Chef</h6></div>
          </div>
          <div className='row flex py-2'>
            <div className='col-lg-3'><img src={require('../src/img/Banner1.jpg')} width='100px'/></div>
            
            <div className='col-lg-9'><Link to='/topnews/3'><h6 className='text-black'>11 Spring Pieces You Can Start Wearing Now (Seriously)</h6></Link></div>
          </div>
          
                    
                    
                    </div>





                </div>
            </div>
        </>
    )
}

export default Entertainment;

