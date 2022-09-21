import React, {useState, useEffect} from "react";
import {Nav, Navbar, Container} from "react-bootstrap";
import "../styles/NavBar.css";

const NavBar = (props) =>{

    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const onScroll = () =>{
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)

    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

return(

    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>

            <Navbar.Brand href="#about">
                &hearts;
            {/* <img src={require('../images/logo.png')} className="logo" alt="logo"/> */}
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"> </span>
            </Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="ms-auto">
                    <Nav.Link className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} href="#about" onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                    <Nav.Link className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} href="#skills" onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} href="#projects" onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                
                <span className="navbar-text">
                    <div className ="social-icon"> 
                    <a href="https://linkedin.com/in/manisha-heera"> <img src={require('../images/linkedin.png')} alt="linkedin-icon" /> </a>
                    <a href="https://github.com/manishaheera"> <img src={require('../images/github.png')} alt="github-icon" /> </a>
                    <a href="https://www.youtube.com/channel/UCDTEZPMx7wNoWt8VxJDWTVA/featured"> <img src={require('../images/youtube.png')} alt="youtube-icon" /></a>
                    </div>
                    <button className="vvd" onClick={() => console.log('connect')}><span> Get In Touch </span></button>
                </span>

            </Navbar.Collapse>

        </Container>

    </Navbar>
)
}

export default NavBar;