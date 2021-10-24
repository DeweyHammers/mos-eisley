import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = ({ setCategory, setInfo }) => {
  const handleClick = () => {
    setCategory(null);
    setInfo(null);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Mos Eisley</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => handleClick()}>Categories</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
