import React, { useEffect } from 'react'



function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
   
    <section className='contactpage_detail'>
    <div className='container'>
        <div className='row contact_page'>
            <div className='col-lg-6 col-sm-12 contact mb-4'>
                <h1 className='text-center'>Get In Touch With Us</h1>
                <p className='py-5'>We can be reached at<strong> +81 23456789</strong><br/> </p>
               <p> or Email us at<strong> info@grandnews.com</strong></p>
            </div>
            <div className='col-lg-6 col-sm-12 col-xs-12'>
  <div className=' get_intouch_form '>
  
 

<div className='name'> Name<br/><input typeof='text'placeholder='Enter name'/></div>
<div className='email'> Email<br/><input typeof='text'placeholder='Enter Email'/></div>
<div className='subject'> Subject<br/><input typeof='text'placeholder='Enter Subject'/></div><br/>
<textarea rows="4" cols="40" name="comment" form="usrform" placeholder="Enter message here.."></textarea><br/>
<button className='btn bg-dark'>Submit</button>

</div>

</div>
        </div>
    </div>
    </section>
    
    </>
  )
}

export default Contact