import React, { useState } from "react";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/action/userAction";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
const Header = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [showBasic, setShowBasic] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const handleLogout = () => {
    dispatch(logout());
    navigator("/login");
  };
  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic} style={{ textAlign: "right" }}>
          <MDBNavbarNav
            className="mr-auto mb-2 mb-lg-0"
            style={{
              textAlign: "right",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <MDBNavbarItem>
              <MDBNavbarLink
                active
                aria-current="page"
                href="/list-donors"
                style={{ textAlign: "right", marginRight: "20px" }}
              >
                البحث عن المتبرعين
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                active
                aria-current="page"
                href="/add-donor"
                style={{ textAlign: "right", marginRight: "20px" }}
              >
                اضافة متبرع
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href="/">
                <MDBIcon
                  fas
                  icon="clinic-medical"
                  style={{ fontSize: "25px", color: "#F93154" }}
                />
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
