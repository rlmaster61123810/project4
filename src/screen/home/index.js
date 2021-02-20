import { useState } from "react";
import {
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Jumbotron,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";
import Slider from "infinite-react-carousel";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Container>
        <Jumbotron>
          <h1>Hello, world!</h1>
        </Jumbotron>
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">wattano</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem></NavItem>
              </Nav>
              <NavbarText>Simple Text</NavbarText>
            </Collapse>
          </Navbar>
          <Slider dots autoplay>
            <div>
              <img
              src="https://www.cmru.ac.th/assets/images/banners/th/29-12-2020/355e723cf01db446a3ad5daa70225bb1901936d1.png"
              alt="pic1"
              />
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
          </Slider>
        </div>
        <h1>Home Page</h1>
      </Container>
    </div>
  );
};
export default Home;
