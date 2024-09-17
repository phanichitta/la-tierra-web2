import React from 'react'

function Footer() {
  return (
    <div> {/*  <!-- FOOTER START --> */}
    <footer className="site-footer footer-large  footer-dark	footer-wide">
        <div className="container">
            <div className="p-a30 call-to-action-wrap bg-no-repeat bg-center site-bg-primary" style={{ backgroundImage: "url('images/background/bg-site.png')" }} >
                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <div className="call-to-action-left text-black">
                            <h4 className="text-uppercase m-b10 m-t0">Subscribe to our newsletter!</h4>
                            <span>Never Miss Anything From Construx By Signing Up To Our Newsletter.</span>
                        </div>
                    </div>
                    
                    <div className="col-lg-4  col-md-6">
                        <div className="call-to-action-right">
                            <div className="widget_newsletter">
                                <div className="newsletter-bx">
                                    <form role="search" method="post">
                                        <div className="input-group">
                                            <input name="news-letter" className="form-control" placeholder="ENTER YOUR EMAIL" type="text"/>
                                            <span className="input-group-btn">
                                                <button type="submit" className="site-button"><i className="fa fa-paper-plane-o"></i></button>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>                                                           
                        </div>
                    </div>
                </div>
             </div>
        </div>            
      {/*   <!-- FOOTER BLOCKES START -->   */}
        <div className="footer-top overlay-wraper">
            <div className="overlay-main"></div>
            <div className="container">
                <div className="row">
                   {/*  <!-- ABOUT COMPANY --> */}
                    <div className="col-lg-6 col-md-6 col-sm-6">  
                        <div className="widget widget_about">
                           {/*  <!--<h4 className="widget-title">About Company</h4>--> */}
                            <div className="logo-footer clearfix p-b15">
                                <a href="/"><img src="images/WHITE - LA-TIERRA INFRA - 50.png" alt="" style={{minWidth:'280px', height:'180px'}}/></a>
                            </div>
                            <p className="max-w400">Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house great looks.</p>                                
                            
                            <ul className="social-icons  mt-social-links">
                                {/* <li><a href="https://www.google.com/" className="fa fa-google"></a></li>
                                <li><a href="https://rss.com/" className="fa fa-rss"></a></li> */}
                                 <li><a href="#" className="fa fa-instagram"></a></li>
                                <li><a href="https://www.facebook.com/" className="fa fa-facebook"></a></li>
                                <li><a href="https://twitter.com/" className="fa fa-twitter"></a></li>
                                <li><a href="https://in.linkedin.com/" className="fa fa-linkedin"></a></li>
                            </ul>                                     
                        </div>
                    </div> 

                    {/*   <!-- USEFUL LINKS --> */}
                    <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                        <div className="widget widget_services inline-links">
                            <h4 className="widget-title">Useful links</h4>
                            <ul>
                                <li><a href="About">About</a></li>
                                <li><a href="Project">Projects</a></li>
                                <li><a href="Contact">Contact Us</a></li>
                            </ul>
                        </div>                           
                    </div>
                    
                  {/*   <!-- RESENT POST --> */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="widget widget_address_outer">
                            <h4 className="widget-title">Contact Us</h4>
                            <ul className="widget_address">
                                <li>#309, B-block, Asian Sun City, Kondapur, HYD</li>
                                <li>info@la-tierrainfra.com</li>
                                <li>(+91) 994 994 0333</li>
                                <li>(+91) 123 456 7890</li>
                            </ul>
                       
                        </div>                                              	
                    </div>                          
                    
                  
                    


                </div>
            </div>  
        </div>
        {/* <!-- FOOTER COPYRIGHT --> */}
        <div className="footer-bottom overlay-wraper">
            <div className="overlay-main"></div>
            <div className="container">
                <div className="row">
                    <div className="mt-footer-bot-center">
                        <span className="copyrights-text">© 2024 La-tierra Infra</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
   {/*  <!-- FOOTER END --> */}
    </div>
  )
}

export default Footer