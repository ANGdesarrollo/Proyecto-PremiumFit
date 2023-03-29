import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Instagram from '../../assets/icons/instagram.png';
import WhatsApp from '../../assets/icons/whatsapp.png';
import './_navbar.scss'
import Background from '../../assets/backgrounds/5.png';
import IconLogo from '../../assets/icons/logo premium SIN-FONDO.png';
import { NavLink, useNavigate } from "react-router-dom";

function CollapsibleExample() {
    const navigate = useNavigate();

    const scrollToElement = (id) => {
        navigate('/inicio')
        setTimeout(() => {
                const element = document.getElementById(`${id}`);
                element.scrollIntoView({ behavior: 'smooth' });
            }, 200
        )
    };

    return (
        <Navbar style={{backgroundImage: `url(${Background})`}} collapseOnSelect expand="lg" bg="light" variant="light" className="header position-fixed w-100">
            <Container>
                <Navbar.Brand href="#home"> <img className='iconLogo' src={IconLogo} alt="logo premium fit"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto navSection">
                        <NavLink to="/inicio" className="item-nav nav-link text-light">Inicio</NavLink>
                        <NavLink className="item-nav nav-link text-light" href="#nosotros-container" to="/nosotros">Nosotros</NavLink>
                        <a onClick={() => scrollToElement('productos-container')} className="item-nav nav-link text-light">Productos</a>
                        <NavLink className="item-nav nav-link text-light" href="#nosotros-container" to="/contacto">Contacto</NavLink>

                    </Nav>
                    <Nav className="d-flex networks-container flex-row">
                        <a className="nav-link networks" target="_blank" href="https://www.instagram.com/premium_fit.46/">
                            <img className="w-75"  src={ Instagram } alt="Instagram"/>
                        </a>
                        <a className="nav-link networks" target="_blank" href="https://wa.me/5493434045012">
                            <img className="w-75"  src={ WhatsApp } alt="WhatsApp"/>
                        </a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;
