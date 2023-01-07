import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { listDonorsAction } from "../../redux/action/donorAction";
const ListDonors = () => {
  const [blood, setBlood] = useState("");
  const [city, setCity] = useState("");
  const [result, setResult] = useState([]);
  const dispatch = useDispatch();
  const listDonors = useSelector((state) => state.listDonors);
  const { donors, loading, error } = listDonors;
  useEffect(() => {
    dispatch(listDonorsAction());
  }, []);
  useEffect(() => {
    if (blood !== "" && city == "") {
      setResult(donors?.filter((x) => x.blood == blood));
    } else if (blood == "" && city !== "") {
      setResult(donors?.filter((x) => x.city == city));
    } else if (blood !== "" && city !== "") {
      setResult(donors?.filter((x) => x.city == city && x.blood == blood));
    } else {
      setResult(donors);
    }
  }, [donors, blood, city]);
  return (
    <Container>
      <Row>
        <Col>
          <Form.Select
            aria-label="Default select example"
            value={blood}
            onChange={(e) => setBlood(e.target.value)}
          >
            <option>اختر فصيلة الدم</option>

            {donors
              ?.filter(
                (x, i) => donors?.findLastIndex((y) => y.blood == x.blood) == i
              )
              .map((x) => (
                <option value={x.blood}>{x.blood}</option>
              ))}
          </Form.Select>
        </Col>
        <Col>
          <Form.Select
            aria-label="Default select example"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option>اختر المحافظة</option>
            {donors
              ?.filter(
                (x, i) => donors?.findLastIndex((y) => y.city == x.city) == i
              )
              .map((x) => (
                <option value={x.city}>{x.city}</option>
              ))}
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <MDBTable>
          <MDBTableHead>
            <tr>
              <th scope="col">المحافظة</th>
              <th scope="col">الوقت المتاح</th>
              <th scope="col">التليفون</th>
              <th scope="col">شكوي مرضية</th>
              <th scope="col">العمر</th>
              <th scope="col">الفصيلة</th>
              <th scope="col">الاسم</th>
              <th scope="col">#</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {result?.map((x, i) => (
              <tr>
                <td>{x.city}</td>
                <td>{x.time}</td>
                <td>{x.phone}</td>
                <td>{x.disease}</td>
                <td>{x.age}</td>
                <td>{x.blood}</td>
                <td>{x.name}</td>
                <td>{++i}</td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </Row>
    </Container>
  );
};

export default ListDonors;
