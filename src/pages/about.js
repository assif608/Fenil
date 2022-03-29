import React from "react";
import Meta from "./../components/Meta";
import HeroSection2 from "./../components/HeroSection2";
import TeamBiosSection from "./../components/TeamBiosSection";

function AboutPage(props) {
  return (
    <>
      <div class="page-wrapper">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="page-content">
                        <div class="row">
                            <div class="col-lg-4 col-md-12">
                                <div class="profile-info">
                                    <img class="profile-photo img-fluid tilt" src={require('../img/fenil.jpg').default} alt="" />
                                    

                                    {/* <img class="signature" src="img/signature.png" alt="" /> */}
                                    
                                </div>
                                
                            </div>
                            <div class="col-lg-8 col-md-12">
                                <h2 class="section-heading"><span>1/</span>Biography</h2>
                                
                                <p class="biography-text">I’m a Web Developer in love with design, new technology, traveling and discovering new world and cultures.</p>
                                <div class="row mt-30">
                                    <div class="col-md-12">
                                        <div class="standard-text-holder">
                                            <h5 class="mb-10">Personal Info</h5>
                                        </div>
                                        
                                    </div>
                                    <div class="col-md-6">
                                        <div class="standard-text-holder">
                                            <p><strong>Name:</strong> Fenil Parekh</p>
                                            <p><strong>Age:</strong> 26 Years</p>
                                            <p><strong>Address:</strong> San Francisco</p>
                                        </div>
                                        
                                    </div>
                                    <div class="col-md-6">
                                        <div class="standard-text-holder">
                                            <p><strong>Phone:</strong> (650) 741-5063</p>
                                            <p><strong>Email:</strong> hello@fenilparekh.com</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="divider"></div>
                                
                            </div>

                            <div class="col-md-12">
                                <h2 class="section-heading" style={{color:'#6e80e3'}}><span>2/</span>What I do?</h2>
                                
                            </div>
                            <div class="col-md-4">
                                <div class="service-item">
                                    <i class="lni-layout"></i>
                                    <h4>UI Design</h4>
                                    <p>UX & UI are an integral part of web application. Due to the high and still increasing use of the Internet, communication via the web is an integral component of any marketing strategy.</p>
                                </div>
                                
                            </div>
                            <div class="col-md-4">
                                <div class="service-item">
                                    <i class="lni-website"></i>
                                    <h4>Web Design</h4>
                                    <p>I design & develop a website that will undoubtedly attract the majority to visit you. I build SEO friendly websites which are tailored to your requirements.</p>
                                </div>
                                
                            </div>
                            <div class="col-md-4">
                                <div class="service-item">
                                    <i class="lni-color-pallet"></i>
                                    <h4>Graphic Design</h4>
                                    <p>Today’s world is competitive where graphic design and web graphics attract customer attention within seconds. So you need to carve your own identity to stand out of the crowd.</p>
                                </div>
                                
                            </div>

                            <div class="col-md-12">
                                <div class="divider"></div>
                                
                            </div>

                            {/* <div class="col-md-12">
                                <h2 class="section-heading" style={{color:'#f2c44c'}} ><span>3/</span>Awards</h2>
                                
                            </div>
                            <div class="col-xl-5 col-lg-6">
                                <div class="awards-item">
                                    <span>3</span>
                                    <p>Awwwards <i>- Site of the day</i></p>
                                </div>
                                
                                <div class="awards-item">
                                    <span>2</span>
                                    <p>FWA <i>- FWA of the Day</i></p>
                                </div>
                                
                            </div>
                            <div class="col-xl-5 col-lg-6">
                                <div class="awards-item">
                                    <span>1</span>
                                    <p>Awwwards <i>- Site of the week</i></p>
                                </div>
                                
                                <div class="awards-item">
                                    <span>1</span>
                                    <p>CSSDA <i>- Website Of The Day</i></p>
                                </div>
                                
                            </div> */}

                            {/* <div class="col-md-12">
                                <div class="divider"></div>
                                
                            </div> */}

                            <div class="col-md-12">
                                <h2 class="section-heading" style={{color:'#5faac8'}} ><span>4/</span>Testimonials</h2>
                                
                            </div>
                            <div class="col-md-12">
                                <div class="owl-carousel testimonials-carousel">
                                    <div class="testimonial-item">
                                        <div class="image-info">
                                            <img src="img/testimonials/client_01.jpg" alt="!" />
                                        </div>
                                        <div class="review-info">
                                            <p>Fenil has been very patient, thorough, and professional throughout the process of redesigning our website, We are very excited to finally be at our launch. It's a milestone for our company, and I am so glad that I chose Nurture Client to guide us through this process!.</p>
                                            <h5>Alex Bara</h5>                                            
                                        </div>
                                    </div>
                                    
                                    <div class="testimonial-item">
                                        <div class="image-info">
                                            <img src="img/testimonials/client_02.jpg" alt="!" />
                                        </div>
                                        <div class="review-info">
                                            <p>Amazing experience with Fenil. He is absolutely expert in terms of paid Graphic designing and Web development. He helped us build out amazing landing pages and drove phenomenal results for our brands. Couldn't recommend them more highly.</p>
                                            <h5>John Smith</h5>                                            
                                        </div>
                                    </div>
                                    
                                    <div class="testimonial-item">
                                        <div class="image-info">
                                            <img src="img/testimonials/client_03.jpg" alt="!" />
                                        </div>
                                        <div class="review-info">
                                            <p>If you are looking for someone who can use the latest, up to the minute technology to increase your business, you will not find better than Fenil in Bay Area and what’s possible these days, digitally, is AMAZING.</p>
                                            <h5>Murad Takla</h5>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>

                            {/* <div class="col-md-12">
                                <div class="divider"></div>
                                
                            </div> */}

                            {/* <div class="col-md-12">
                                <h2 class="section-heading" style={{color:'#33d06c'}} ><span>5/</span>Clients</h2>
                                
                            </div>
                            <div class="col-md-12">
                                <div class="owl-carousel clients-carousel">
                                    <img src="img/brand/brand-1.png" alt="" />
                                    <img src="img/brand/brand-2.png" alt="" />
                                    <img src="img/brand/brand-3.png" alt="" />
                                    <img src="img/brand/brand-4.png" alt="" />
                                    <img src="img/brand/brand-5.png" alt="" />
                                    <img src="img/brand/brand-6.png" alt="" />
                                </div>
                            </div> */}

                            <div class="col-md-12">
                                <div class="divider"></div>
                                
                            </div>

                            <div class="col-xl-3 col-sm-6">
                                <div class="counter-iconbox">
                                    <span class="icon lni-crown"></span>
                                    <h2><span class="numberCount">100</span>+</h2>
                                    <p>Finished projects</p>
                                </div>
                                
                            </div>
                            <div class="col-xl-3 col-sm-6">
                                <div class="counter-iconbox">
                                    <span class="icon lni-users"></span>
                                    <h2><span class="numberCount">100</span>%</h2>
                                    <p>Happy customers</p>
                                </div>
                                
                            </div>
                            <div class="col-xl-3 col-sm-6">
                                <div class="counter-iconbox mb-0 mb-sm-30">
                                    <span class="icon lni-alarm-clock"></span>
                                    <h2><span class="numberCount">500</span>+</h2>
                                    <p>Working hours</p>
                                </div>
                    
                            </div>
                            <div class="col-xl-3 col-sm-6">
                                <div class="counter-iconbox mb-0">
                                    <span class="icon lni-quotation"></span>
                                    <h2><span class="numberCount">100</span>+</h2>
                                    <p>Positive Feedback</p>
                                </div>
                    
                            </div>

                            <div class="col-md-12">
                                <div class="divider"></div>
                    
                            </div>

                            <div class="col-md-12">
                                <footer>
                                    <div class="footer-top text-center">
                                        <h2>hello@fenilparekh.com</h2>
                                        <p>(650) 741-5063</p>
                                        {/* <p>New York City, 18569</p> */}
                                    </div>
                    
                                </footer>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default AboutPage;
