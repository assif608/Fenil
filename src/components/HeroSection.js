import React, { useEffect, useState, setState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import Image from "react-bootstrap/Image";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import "./HeroSection.scss";
import Splitting from 'splitting';

function HeroSection(props) {

    // useEffect(() => {
    //     // Update the document title using the browser API
    //     console.log('hello');
    //     Splitting();
    //   });

  return (
    <div className="section-standard overlay home-background">
        <div className="container">
            <div className="row align-items-center">
                <div className="col">
                    <div className="d-flex align-items-center">
                        <div className="nav-toggler d-none d-lg-block">
                            <div className="menu-btn">
                                <div className="line-menu half start"></div>
                                <div className="line-menu"></div>
                                <div className="line-menu half end"></div>
                            </div>
                    
                        </div>
                    
                        <div className="g-title">
                            <h4><span>Fenil</span> Parekh</h4>
                            <p className="mb-25">A freelance UI/UX designer and Front-end developer,<br/>Based in San Francisco</p>
                            <a href="https://web.archive.org/web/20180817152005/https://fenilparekh.com/" className="g-link slide-vertical" data-splitting>Get Résumé</a>
                        </div>
                    
                    </div>
                    <div className="social-links d-block d-lg-none mt-30">
                        <a href="https://www.facebook.com/fenilparekh123/" className="slide-horizontal" data-splitting>Facebook</a>
                        <a href="https://www.linkedin.com/in/fenilparekh/" className="slide-horizontal" data-splitting>LinkedIn</a>
                        <a href="https://dribbble.com/fenilparekh" className="slide-horizontal" data-splitting>Dribbble</a>
                    </div>
                    
                </div>
                <div className="col-lg-3 col-md-12 d-none d-lg-block">
                    <div className="standard-text-holder">
                        <h5 className="mb-25">Let's work together</h5>
                        <p className="mb-10">I’m available at</p>
                        <p className="mb-1"><a href="mailto:hello@grit.com" className="slide-vertical colored" data-splitting>hello@fenilparekh.com</a></p>
                        <p><a href="tel:(+650) 741-5063" className="slide-vertical" data-splitting>(650) 741-5063</a></p>
                    </div>
                    
                    <div className="social-links mt-20">
                        <a href="https://www.facebook.com/fenilparekh123/" className="slide-horizontal" data-splitting>Facebook</a>
                        <a href="https://www.linkedin.com/in/fenilparekh" className="slide-horizontal" data-splitting>LinkedIn</a>
                        <a href="https://dribbble.com/fenilparekh" className="slide-horizontal" data-splitting>Dribbble</a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  );
}

export default HeroSection;
