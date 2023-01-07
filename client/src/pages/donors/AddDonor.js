import React, { useState, useEffect } from "react";
import { Container, Card, Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addDonorAction } from "../../redux/action/donorAction";
import Error from "../../components/features/Error";
import Loader from "../../components/features/Loader";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
const AddDonor = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [blood, setBlood] = useState("");
  const [city, setCity] = useState("");
  const [disease, setDisease] = useState("");
  const [time, setTime] = useState("");
  const [age, setAge] = useState("");
  const addDonor = useSelector((state) => state.addDonor);
  const { loading, error, donor, success } = addDonor;
  const bloods = ["A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"];
  const handleSubmit = (e) => {
    e.preventDefault();
    const donor = {
      name,
      time,
      age,
      disease,
      city,
      phone,
      blood,
    };
    console.log(donor);
    dispatch(addDonorAction(donor));
    setName("");
    setAge("");
    setBlood("");
    setCity("");
    setDisease("");
    setPhone("");
    setTime("");
  };
  useEffect(() => {
    if (success) {
      alert("تم اضافة متبرع");
    }
  }, [success]);
  const govs = [
    "القاهرة",
    "الجيزة",
    "الاسكندرية",
    "الدقهلية",
    "البحر الاحمر",
    "البحيرة",
    "الفيوم",
    "الغربية",
    "الاسماعيلية",
    "المنوفية",
    "المنيا",
    "القليوبية",
    "الوادي الجديد",
    "السويس",
    "اسوان",
    "اسيوط",
    "بني سويف",
    "بورسعيد",
    "دمياط",
    "الشرقية",
    "جنوب سيناء",
    "كفر الشيخ",
    "مطروح",
    "الأقصر",
    "قنا",
    "شمال سيناء",
    "سوهاج",
  ];
  return (
    <>
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
                  style={{
                    color: "#fff",
                    backgroundColor: "#F93154",
                    padding: "5px",
                    borderRadius: "10px",
                  }}
                >
                  اضافة متبرع
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
              <Row>
                <Col>
                  <MDBInput
                    style={{ textAlign: "right" }}
                    wrapperClass="mb-4"
                    label="الوقت المتاح"
                    id="formControlLg"
                    type="text"
                    size="lg"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </Col>
                <Col>
                  <MDBInput
                    wrapperClass="mb-4"
                    style={{ textAlign: "right" }}
                    label="تاريخ الميلاد"
                    id="formControlLg"
                    type="date"
                    size="lg"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </Col>
              </Row>

              <MDBInput
                wrapperClass="mb-4"
                style={{ textAlign: "right" }}
                label="رقم الموبايل"
                id="formControlLg"
                type="text"
                size="lg"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Row>
                <Col>
                  <MDBInput
                    style={{ textAlign: "right" }}
                    wrapperClass="mb-4"
                    label="شكوي مرضية"
                    id="formControlLg"
                    type="text"
                    size="lg"
                    value={disease}
                    onChange={(e) => setDisease(e.target.value)}
                  />
                </Col>
                <Col>
                  <div
                    className="form-outline mb-4"
                    style={{ textAlign: "right" }}
                  >
                    <Form.Select
                      aria-label="Default select example"
                      value={blood}
                      onChange={(e) => setBlood(e.target.value)}
                    >
                      <option style={{ textAlign: "right" }}>
                        اختر فصيلة الدم
                      </option>
                      {bloods?.map((x) => (
                        <option value={x} style={{ textAlign: "right" }}>
                          {x}
                        </option>
                      ))}
                    </Form.Select>
                  </div>
                </Col>
              </Row>

              <div className="form-outline mb-4" style={{ textAlign: "right" }}>
                <Form.Select
                  aria-label="Default select example"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option style={{ textAlign: "right" }}>اختر المحافظة</option>
                  {govs?.map((x) => (
                    <option value={x} style={{ textAlign: "right" }}>
                      {x}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <MDBBtn
                className="mb-0 px-5"
                color="danger"
                size="lg"
                onClick={handleSubmit}
              >
                حفظ
              </MDBBtn>
            </Card>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default AddDonor;
