import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../components/features/Error";
import Loader from "../../components/features/Loader";
import { login } from "../../redux/action/userAction";

import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
const LoginScrenn = () => {
  const navigator = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigator("/");
    }
  }, [userInfo]);
  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch login
    dispatch(login(email, password));
  };
  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      {loading && <Loader />}

      <MDBRow>
        <MDBCol col="10" md="6" style={{ textAlign: "right" }}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/424/812/original/volunteers-donating-blood-blood-donor-charity-concept-world-blood-donor-day-health-care-for-banner-poster-card-ui-web-landing-page-template-for-blood-bank-or-hospital-flat-illustration-free-vector.jpg"
            class="img-fluid"
            alt="Sample image"
          />
        </MDBCol>

        <MDBCol
          col="4"
          md="6"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Card style={{ padding: "10px" }}>
            <div
              className="d-flex flex-row align-items-center justify-content-center"
              style={{ marginBottom: "10px" }}
            >
              <p
                className="lead fw-normal mb-0 me-3"
                style={{ color: "#F93154" }}
              >
                تسجيل الدخول
              </p>
            </div>
            {error && <Error error={error} />}
            <MDBInput
              wrapperClass="mb-4"
              style={{ textAlign: "right" }}
              label="البريد الالكتروني"
              id="formControlLg"
              type="email"
              size="lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              style={{ textAlign: "right" }}
              label="الرقم السري"
              id="formControlLg"
              type="password"
              size="lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox
                style={{ textAlign: "right" }}
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="تذكرني"
              />
            </div>

            <div className="text-center text-md-start mt-4 pt-2">
              <MDBBtn
                className="mb-0 px-5"
                color="danger"
                size="lg"
                onClick={submitHandler}
                style={{
                  textAlign: "right",
                }}
              >
                تسجيل دخول
              </MDBBtn>
              <p
                className="small fw-bold mt-2 pt-1 mb-2"
                style={{ textAlign: "right" }}
              >
                ليس لديك حساب؟{" "}
                <Link to={"/register"} style={{ color: "#F93154" }}>
                  اشتراك
                </Link>
              </p>
            </div>
          </Card>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
export default LoginScrenn;
