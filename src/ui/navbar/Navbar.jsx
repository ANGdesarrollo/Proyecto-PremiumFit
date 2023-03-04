import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Instagram from '../../assets/icons/instagram.png';
import WhatsApp from '../../assets/icons/whatsapp.png';
import './_navbar.scss'
import Background from '../../assets/backgrounds/navbar.png';
import IconLogo from '../../assets/icons/logo.png';

function CollapsibleExample() {
    return (
        <Navbar style={{backgroundImage: `url(${Background})`}} collapseOnSelect expand="lg" bg="light" variant="light" className="header position-fixed w-100">
            <Container>
                <Navbar.Brand href="#home"> <img className='iconLogo' src={IconLogo} alt="logo premium fit"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="item-nav text-light">Inicio</Nav.Link>
                        <a className="item-nav nav-link text-light" href="#productos-container">Productos</a>
                    </Nav>
                    <Nav>
                        <a className="nav-link w-25" target="_blank" href="https://www.instagram.com/premium_fit.46/">
                            <img className="w-75"  src={ Instagram } alt="Instagram"/>
                        </a>
                        <a className="nav-link w-25" target="_blank" href="https://wa.me/5493434667572">
                            <img className="w-75"  src={ WhatsApp } alt="WhatsApp"/>
                        </a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;
