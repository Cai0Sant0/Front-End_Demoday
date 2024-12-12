import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import imgLogo from '../../assets/images/logo/logo.svg'
import { Link } from 'react-router-dom';
import './style.css'

function NavbarPadraoLogado(props) {

  let logado = props.usuLogado;

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navBarPrincipal" sticky='top'>
      <Container>
        <Navbar.Brand as={Link} to={"/logado"} className='logoNavbar'>
        <img src={imgLogo} alt="Logo do projeto TeVejoo" width="124" height="54"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto botoesNavbar">
            <Nav.Link as={Link} to={"/sobreLogado"} className='btnNavbar'>Sobre Nós</Nav.Link>
            <Nav.Link as={Link} to={"/jogosLogado"} className='btnNavbar'>Jogos</Nav.Link>
            <Nav.Link as={Link} to={"/iaLogado"} className='btnNavbar'>Lensfy</Nav.Link>
            <Nav.Link as={Link} to={"/blogLogado"} className='btnNavbar'>Blog</Nav.Link>
          </Nav>
          <Nav>
          {!logado ? (
              <Nav.Link as={Link} to={"/login"} className='btnCadastroNavbar'>Login</Nav.Link>
            ) : (
              <Nav.Link as={Link} to={"/fotoUsuario"} className='btnCadastroNavbar'>Meu Perfil</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPadraoLogado;
