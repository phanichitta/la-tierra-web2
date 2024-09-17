import React from 'react'

function Contact() {
  return (
    <div>    
        {/*  <!-- CONTENT START --> */}
    <div class="page-content">
    
       {/*  <!-- INNER PAGE BANNER --> */}
        <div class="mt-bnr-inr overlay-wraper bg-parallax bg-top-center"  data-stellar-background-ratio="0.5"  style={{backgroundImage:"url('images/Webimgs/64.jpg')"}}>
            <div class="overlay-main bg-black opacity-07"></div>
            <div class="container">
                <div class="mt-bnr-inr-entry">
                    <div class="banner-title-outer">
                        <div class="banner-title-name">
                            <h2 class="m-b0">Putting a plan to action, to assure your satisfaction!</h2>
                        </div>
                    </div>
                   {/*  <!-- BREADCRUMB ROW -->        */}                     
                    
                        <div>
                            <ul class="mt-breadcrumb breadcrumb-style-2">
                                <li><a href="/">Home</a></li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    
                  {/*   <!-- BREADCRUMB ROW END -->    */}                     
                </div>
            </div>
        </div>
      {/*   <!-- INNER PAGE BANNER END --> */}
         
      {/*   <!-- SECTION CONTENTG START --> */}
        <div class="section-full p-tb80 inner-page-padding">
          {/*   <!-- LOCATION BLOCK--> */}
            <div class="container">
            
              {/*   <!-- GOOGLE MAP & CONTACT FORM --> */}
                <div class="section-content">
                   {/*  <!-- CONTACT FORM--> */}
                    <div class="row">
                        <div class="col-lg-8 col-md-12">
                            <form class="contact-form cons-contact-form" method="post" action="https://theme7x.com/La-Tierra/form-handler.php"/>
                                <div class="contact-one m-b30">
                                
                                   {/*  <!-- TITLE START --> */}
                                    <div class="section-head">
                                        <div class="mt-separator-outer separator-left">
                                            <div class="mt-separator">
                                                <h2 class="text-uppercase sep-line-one "><span class="font-weight-300 site-text-primary">Get</span> In touch</h2>
                                            </div>
                                        </div>
                                    </div>                   
                               {/*      <!-- TITLE END -->  */}
                                    <div class="contact-one-inner">                                   
                                        <div class="form-group">
                                            <input name="username" type="text" required class="form-control" placeholder="Name"/>
                                        </div>
                                
                                        <div class="form-group">
                                            <input name="email" type="text" class="form-control" required placeholder="Email"/>
                                        </div>
                                
                                        <div class="form-group">
                                            <textarea name="message" rows="4" class="form-control " required placeholder="Message"></textarea>
                                        </div>
                                    
                                        <div class="text-right">
                                            <button name="submit" type="submit" value="Submit" class="site-button btn-effect">submit
                                                    
                                            </button>
                                        </div>
                                    </div> 
                                </div>
                            <form/>
                        </div>                        
                        <div class="col-lg-4 col-md-12">
                            <div class="contact-info m-b30">
                              {/*   <!-- TITLE START --> */}
                                <div class="section-head">
                                    <div class="mt-separator-outer separator-left">
                                        <div class="mt-separator">
                                            <h2 class="text-uppercase sep-line-one "><span class="font-weight-300 site-text-primary">Contact</span> Info</h2>
                                        </div>
                                    </div>
                                </div>                   
                               {/*  <!-- TITLE END -->  */}
                                <div class="contact-one-inner-right site-bg-dark text-white">                          
                                    <div class="mt-icon-box-wraper left p-b40">
                                        <div class="icon-xs"><i class="fa fa-phone"></i></div>
                                        <div class="icon-content">
                                            <h5 class="m-t0 font-weight-500">Phone number</h5>
                                            <p>(123) 456-78910</p>
                                        </div>
                                    </div>
                                    
                                    <div class="mt-icon-box-wraper left p-b40">
                                        <div class="icon-xs"><i class="fa fa-envelope"></i></div>
                                        <div class="icon-content">
                                            <h5 class="m-t0 font-weight-500">Email address</h5>
                                            <p>7xthemehelp@gmail.com</p>
                                        </div>
                                    </div>
                                    
                                    <div class="mt-icon-box-wraper left">
                                        <div class="icon-xs"><i class="fa fa-map-marker"></i></div>
                                        <div class="icon-content">
                                            <h5 class="m-t0 font-weight-500">Address info</h5>
                                            <p>09, Martin Street B190 Polo Alto, San Francisco</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
                
                <div class="gmap-outline">
                    <div class="google-map" style={{width: "100%"}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1903.0110177707516!2d78.36179750554913!3d17.458659391922055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ba498848bb%3A0x303970602aeb124c!2sAsian%20Sun%20City!5e0!3m2!1sen!2sin!4v1726227658392!5m2!1sen!2sin" width="600" height="450" style={{border:"0", allowfullscreen:"" ,loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
                    </div>
                </div>                   
            </div>
       </div>
     
       {/*  <!-- SECTION CONTENT END --> */}
        
    </div>
 {/*    <!-- CONTENT END --> */}
    </div>
  )
}

export default Contact