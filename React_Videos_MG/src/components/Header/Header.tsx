
import {Container, Nav, Navbar} from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

 const Header = () => {

  const navigate = useNavigate();

  return (
    <Navbar expand="lg" style={{backgroundColor:'grey', padding:'20px'}}>
      <Container>
        <Navbar.Brand onClick={() => navigate ('/')}><img src='https://as2.ftcdn.net/v2/jpg/05/78/32/05/1000_F_578320583_SUBIDYMRmFXO2Bi3Z9knrvpCbarRDR8u.webp' style={{height: "40px", width:"40px", marginRight:"10px"}}/>React-Vite-TypeScript</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate ('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate ('/componentes')}>Componentes</Nav.Link>
            <Nav.Link onClick={() => navigate ('/administracion')}>Administración</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
);
} 

export default Header;
