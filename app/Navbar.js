"use client"
import { useSelector,TypedUseSelectorHook, useDispatch } from "react-redux";
import { setLocation } from "./slices/locationReducer";
import { data } from "./data";
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';




export default function NavbarCom() {
   
    
    const logo = "https://zameensquare.com/_next/static/media/zameen-logo.be926326.png";
    const logo_md = "https://zameensquare.com/_next/static/media/zameen-mob-logo.74a5a37e.png";
    //  const useAppSelector: TypedUseSelectorHook = useSelector;

    const dispatch = useDispatch();

    const location = useSelector((state)=> state.location);

    

    const handleLocation = (location)=> dispatch(setLocation(location));



    return(
        <nav className="navbar navbar-expand-md bg-body-tertiary fixed-top bg-light">
  <div className="container-fluid">
  <a className="navbar-brand">
    <div className="d-flex justify-content-between">
      <div>
      <img src={logo} alt="Logo" className="d-inline-block align-text-top d-none d-lg-block nav-logo"/>
      <img src={logo_md} alt="Logo" className="d-inline-block align-text-top d-block d-lg-none nav-logo"/>
      </div>
      <div className="mt-2">
      <Dropdown>
      <Dropdown.Toggle className="btn btn-secondary dropdown-toggle bg-white text-dark border-0 ms-2" id="dropdown-basic">
        {location}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {data.map((dt,i)=> <Dropdown.Item key={i} role="button" onClick={()=>handleLocation(dt.location)}>{dt.location}</Dropdown.Item>)}
      </Dropdown.Menu>
    </Dropdown>
      </div>
      </div>
    </a>
    <div className="d-flex">
    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item me-4">
          <a className="nav-link text-primary" aria-current="page">Buy</a>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link text-primary">Rent</a>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link text-primary" >Sell</a>
        </li>
      </ul>
    </div> */}
    <Container className="d-flex">
        <Navbar.Brand className="nav-link text-primary d-none d-md-block">Rent</Navbar.Brand>
        <Navbar.Brand className="nav-link text-primary d-none d-md-block">Sell</Navbar.Brand>
    <button className="btn btn-primary">Post Property</button>
    </Container>
    </div>
  </div>
</nav>
    );
}
