import React from "react";
import Meta from "./../components/Meta";
import ContactSection from "./../components/ContactSection";

function ContactPage(props) {
  return (
    <>
      <div class="page-wrapper">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="page-content">
                        <div class="row">
                            <div class="col-md-6">
                                <h2 class="contact-page-heading" style={{color:'#33D06C'}}>If Not Now, When? <br/> Let’s Work Together!</h2>
                                
                                <p class="mb-30 text-white">
I'm seeking out opportunities to collaborate with companies / agencies / individuals, not just work for them. I want to bring my collective design experience to the table where we can work together to solve real business-problems in a way that optimizes all of our respective experience and knowledge.
			</p>
                                
                                <div class="social-links">
                                    <a href="https://www.facebook.com/fenilparekh123/" class="slide-horizontal" data-splitting>Facebook</a>
                                    <a href="https://www.linkedin.com/in/fenilparekh/" class="slide-horizontal" data-splitting>LinkedIn</a>
                                    <a href="https://dribbble.com/fenilparekh" class="slide-horizontal" data-splitting>Dribbble</a>
                                </div>
                                
                            </div>
                            <div class="col-md-6">
                                <div class="contact">
                                    <form id="contact-form" action="https://flexplate.netlify.app/grit/php/mail.php">
                                        <div class="row">
                                            <div class="col">
                                                <p class="form-message"></p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                
                                                <input class="input_field required" type="text" name="name" placeholder="Name"/>
                                            </div>
                                            <div class="col-md-12">
                                                
                                                <input class="input_field required" type="email" name="email" placeholder="Email"/>
                                            </div>
                                            <div class="col-md-12">
                                                
                                                <textarea class="input_field required" name="message" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">                                                
                                                <button class="w-100 g-link slide-vertical" data-splitting type="submit">Send Message</button>
                                            </div>                                            
                                        </div>
                                    </form>
                                    
                                </div>
                    
                            </div>

                            {/* <div class="col-md-12">
                                <div class="map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d115100.58177413383!2d-73.99917938947878!3d40.70448528484011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1585187687760!5m2!1sen!2sbd"></iframe>
                                </div>
                    
                            </div> */}

                            <div class="col-md-12">
                                 <div class="divider"></div>
                    
                            </div>

                            <div class="col-md-12">
                                <footer>
                                    <div class="footer-top text-center">
                                        <h2>hello@fenilparekh.com</h2>
                                        <p>(650) 741-5063</p>
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

export default ContactPage;
