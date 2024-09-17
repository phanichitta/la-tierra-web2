import React from 'react'

function Header() {
  return (
    <div>{/*  <!-- HEADER START --> */}
    <header className="site-header header-style-1 mobile-sider-drawer-menu">
        <div className="top-bar bg-gray">
            <div className="container">
                <div className="row">
                    <div className="mt-topbar-left">
                        <ul className="list-unstyled e-p-bx pull-right">
                            <li><i className="fa fa-envelope"></i> info@la-tierrainfra.com</li>
                            <li><i className="fa fa-phone"></i>(+91) 994 994 0333</li>
                            <li><i className="fa fa-clock-o"></i>Mon-Sat 9.45 am</li>
                        </ul>
                    </div>
                    <div className="mt-topbar-right">
                        <div className="appint-btn"><a href="Contact" className="site-button">Make an Appointment</a></div>                            
                    </div>
                </div>
            </div>
        </div>          
        <div className="sticky-header main-bar-wraper">
            <div className="main-bar bg-white">
                <div className="container">
                    <div className="logo-header">
                        <div className="logo-header-inner logo-header-one">
                            <a href="/">
                                <img src="images/BLACK- LA-TIERRA INFRA.png" alt=""  style={{minWidth:'240px', height:'95px'}} />
                            </a>
                        </div>
                    </div>
                  {/*   <!-- NAV Toggle Button --> */}
                    <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggler collapsed">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar icon-bar-first"></span>
                        <span className="icon-bar icon-bar-two"></span>
                        <span className="icon-bar icon-bar-three"></span>
                    </button>
                       {/*  <!-- ETRA Nav --> */}
                        <div className="extra-nav">
                            
                            <div className="extra-cell">
                                <a href="#" className="contact-slide-show"><i className="fa fa-angle-left arrow-animation"></i></a>
                            </div>                                
                        </div>
                       {/*  <!-- ETRA Nav --> */}

                      {/*   <!-- Contact Nav -->     */}                        
                         <div className="contact-slide-hide " style={{ backgroundImage: "url('images/background/WHITE - LA-TIERRA INFRA.png')" }}> 
                            <div className="contact-nav">
                                 <a href="javascript:void(0)" className="contact_close">&times;</a>
                                 <div className="contact-nav-form p-a30">
                                    <div className="contact-info   m-b30">
                         
                                        <div className="mt-icon-box-wraper center p-b30">
                                            <div className="icon-xs m-b20 scale-in-center"><i className="fa fa-phone"></i></div>
                                            <div className="icon-content">
                                                <h5 className="m-t0 font-weight-500">Phone number</h5>
                                                <p>(+91) 994 994 0333</p>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-icon-box-wraper center p-b30">
                                            <div className="icon-xs m-b20 scale-in-center"><i className="fa fa-envelope"></i></div>
                                            <div className="icon-content">
                                                <h5 className="m-t0 font-weight-500">Email address</h5>
                                                <p>info@la-tierrainfra.com</p>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-icon-box-wraper center p-b30">
                                            <div className="icon-xs m-b20 scale-in-center"><i className="fa fa-map-marker"></i></div>
                                            <div className="icon-content">
                                                <h5 className="m-t0 font-weight-500">Address info</h5>
                                                <p>#309, B-block, Asian Sun City, Kondapur, HYD</p>
                                            </div>
                                        </div>
                                    </div>                                          
                                    <div className="full-social-bg">
                                          <ul>
                                                <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                                              {/*   <li><a href="#" className="google"><i className="fa fa-google"></i></a></li> */}
                                                <li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a></li>
                                               {/*  <li><a href="#" className="tumblr"><i className="fa fa-tumblr"></i></a></li> */}
                                                <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="#" className="youtube"><i className="fa fa-youtube"></i></a></li>
                                          </ul>
                                    </div>
                                    <div className="text-center">
                                        <h4 className="font-weight-600">&copy;  2024 La-Tierra</h4> 
                                    </div>                                                                    			
                                 </div>
                            </div> 
                        </div>                               
                   
                                                                                                                                
                      {/*   <!-- MAIN Vav --> */}
                        <div className="header-nav navbar-collapse collapse">
                            <ul className=" nav navbar-nav">
                                <li className="">
                                    <a href="/">Home</a>
                                                                                 
                                </li>

                                <li>
                                    <a href="/about">About us</a>
                                </li> 
                                <li>
                                    <a href="Project">Projects</a>

                                </li> 
                                <li>
                                    
                                            <a href="Contact">Contact us</a>
                                        </li>
                                    </ul>
                                                                                                                                                                              
                                                                     

                               
                                
                        </div>
                        
                </div>
            </div>
        </div>
    </header>
   {/*  <!-- HEADER END --> */}
    </div>
  )
}

export default Header