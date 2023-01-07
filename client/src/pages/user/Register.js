import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/action/userAction";
import Loader from "../../components/features/Loader";
import Error from "../../components/features/Error";
import { Link } from "react-router-dom";
import Toast from "../../components/features/Toast";

import {
  Form,
  Button,
  Row,
  Col,
  FormText,
  Container,
  Card,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
const RegisterScreen = () => {
  const navigator = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  useEffect(() => {
    if (userInfo) {
      navigator("/");
    }
  }, [userInfo]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
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
                تسجيل حساب جديد
              </p>
            </div>
            {error && <Error error={error} />}
            <MDBInput
              style={{ textAlign: "right" }}
              wrapperClass="mb-4"
              label="ادخل الاسم"
              id="formControlLg"
              type="text"
              size="lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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

            <div className="text-center text-md-start mt-4 pt-2">
              <MDBBtn
                className="mb-0 px-5"
                color="danger"
                size="lg"
                onClick={submitHandler}
              >
                تسجيل الدخول
              </MDBBtn>
              <p
                className="small fw-bold mt-2 pt-1 mb-2"
                style={{ textAlign: "right" }}
              >
                لديك حساب ؟{" "}
                <Link
                  to={"/login"}
                  style={{ color: "#F93154", textAlign: "right" }}
                >
                  تسجيل الدخول
                </Link>
              </p>
            </div>
          </Card>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
export default RegisterScreen;
