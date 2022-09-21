import React, {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import Typewriter from "typewriter-effect";
import "../styles/About.css";

const About = (props) => {

    return(

        <div className="about" id="about">

            <Container>

                <Row className="align-items-center">

                    <Col xs={12} md={7} xl={7}>

                        <span className="welcome-tag">
                            Welcome to my portfolio 
                        </span>

                        <h1>
                            Hello, I am Manisha!
                            <Typewriter className="wrap" onInit={(typewriter) => {typewriter.typeString(" Full-Stack Developer").start();}} />
                        </h1>
                        
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        {/* <button onClick={() => console.log('connect')}> Let's Connect &#9825; </button> */}
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        {/* <img src={require('../images/about.png')} alt="aboutImage" /> */}
                    </Col>

                </Row>

            </Container>

        </div>
    )
}

export default About;