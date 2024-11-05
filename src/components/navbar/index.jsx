import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import imgLogo from '../../assets/images/logo/logo.svg'
import { Link } from 'react-router-dom';
import './style.css'

function NavbarPadrao() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navBarPrincipal" sticky='top'>
      <Container>
        <Navbar.Brand as={Link} to={"/"} className='logoNavbar'>
        <img src={imgLogo} alt="Logo do projeto TeVejoo" width="124" height="54"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto botoesNavbar">
            <Nav.Link as={Link} to={"/sobre"} className='btnNavbar'>Sobre Nós</Nav.Link>
            <Nav.Link as={Link} to={"/jogos"} className='btnNavbar'>Jogos</Nav.Link>
            <Nav.Link as={Link} to={"/ia"} className='btnNavbar'>LensKids</Nav.Link>
            <Nav.Link as={Link} to={"/blog"} className='btnNavbar'>Blog</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to={"/login"} className='btnCadastroNavbar'>Login</Nav.Link>
            {/* <Nav.Link as={Link} to={"/login"} className='btnLoginNavbar'>Logar</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPadrao;
