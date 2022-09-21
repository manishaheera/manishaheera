import React, {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../styles/Skills.css";

const Skills = (props) => {

    const responsive = {
        superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
        },
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
        },
        tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
        },
        mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
        }
    };

    return(
        <div className="skills" id="skills">

            <div className="container">

                <div className="row">

                    <div className="col-12">

                        <div className="skills-box">
                            
                            <h2>
                                Technical Skills
                            </h2>

                            <p>
                                Libero nunc consequat interdum varius sit. Velit scelerisque in dictum non consectetur a erat. Mi sit amet mauris commodo quis. Aenean sed adipiscing diam donec adipiscing tristique risus. Et magnis dis parturient montes. Orci porta non pulvinar neque. Convallis posuere morbi leo urna molestie at. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Risus ultricies tristique nulla aliquet enim tortor at auctor. Nec nam aliquam sem et tortor consequat id. Egestas congue quisque egestas diam in arcu cursus euismod quis. Amet nisl suscipit adipiscing bibendum est ultricies integer. Elit sed vulputate mi sit amet mauris commodo. Proin libero nunc consequat interdum varius sit amet mattis. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna.
                            </p>

                            <Carousel responsive={responsive} infinite={true} className="skills-carousel" >

                                <div className="item">
                                    {/* <img src={require('')} alt="image"/> */}
                                    <h5> Mern </h5>
                                </div>

                                <div className="item">
                                    {/* <img src={require('')} alt="image"/> */}
                                        <h5> Python </h5>
                                    </div>

                                <div className="item">
                                    {/* <img src={require('')} alt="image"/> */}
                                    <h5> Django</h5>
                                </div>
                                
                            </Carousel>

                        </div>

                    </div>

                </div>

        </div>

    </div>
    )
}

export default Skills;