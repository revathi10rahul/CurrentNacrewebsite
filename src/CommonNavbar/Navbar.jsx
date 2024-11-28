import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function CollapsibleExample() {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const handleAboutus = () => {
    navigate("/aboutus");
  };

  const handleAporaFulfillmentautomation = () => {
    navigate("/aporafulfillmentautomation");
  };
  const handleServices = () => {
    navigate("/services");
  };
  const handleContactus = () => {
    navigate("/contactus");
  };
  const handlePurveyordermanagementsystem = () => {
    navigate("/purveyordermanagementsystem");
  };
  const handleCasestudies = () => {
    navigate("/articles");
  };
  const handlePurveywarehousemanagement = () => {
    navigate("/productwarehousemanagementsystem");
  };
  const handleLastmiledelivery=()=>{
    navigate('/deliverymanagementsystem')
  }
  const handleBlog = () => {
    navigate("/blog");
  };
  const handleYardmanagement=()=>{
    navigate('/yardmanagement')
  }
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleLinkClick = () => setExpanded(false);
  return (
    <Navbar
    collapseOnSelect
    expand="xl"
    expanded={expanded}
    onToggle={handleToggle}
    style={{ background: "white" }}
    sticky="top"
  >
    <Container>
      <Navbar.Brand >
        <img  onClick={() => { handleHome(); handleLinkClick(); }} style={{cursor:"pointer"}}
          src="./Assets/ns black transparent.png"
          width="100"
          height="50"
          alt="ns black image"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link  onClick={() => { handleHome(); handleLinkClick(); }}>
            Home
          </Nav.Link>
          <Nav.Link onClick={() => { handleAboutus(); handleLinkClick(); }}>
            About Us
          </Nav.Link>
          <NavDropdown title="Warehouse Management" id="nav-dropdown">

          <NavDropdown.Item
                eventKey="4.2"
              
              onClick={() => { handlePurveywarehousemanagement(); handleLinkClick(); }}
            >
              PURVEY  Warehouse Management System
            </NavDropdown.Item>
            <NavDropdown.Item
              
              eventKey="4.1"
              onClick={() => { handleAporaFulfillmentautomation(); handleLinkClick(); }}
            >
              APORA Omni Channel Fulfillment Automation
            </NavDropdown.Item>
           
          
            
            <NavDropdown.Item
             
              eventKey="4.3"
              onClick={() => { handleLastmiledelivery(); handleLinkClick(); }}
            >
              Delivery Management System
            </NavDropdown.Item>
            <NavDropdown.Item
                eventKey="4.4"
             
              onClick={() => { handleYardmanagement(); handleLinkClick(); }}
            >
             Yard Management
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link onClick={() => { handleServices(); handleLinkClick(); }}>
            Services
          </Nav.Link>
          <Nav.Link onClick={() => { handleCasestudies(); handleLinkClick(); }}>
          Articles
          </Nav.Link>
          <Nav.Link onClick={() => { handleBlog(); handleLinkClick(); }}>
            Blogs
          </Nav.Link>
        </Nav>

        <Nav>
          <button className="custom-btn btn-5" onClick={() => { handleContactus(); handleLinkClick(); }}>
            <span>Contact Us</span>
          </button>
          {/* <button className="custom-btn btn-5">
            <span>Request Demo</span>
          </button> */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default CollapsibleExample;
