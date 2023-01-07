import React, { useEffect, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import { Card } from "react-bootstrap";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { listDonorsAction } from "../../redux/action/donorAction";
const Bloods = () => {
  const [totalDonors, setTotalDonors] = useState("");
  const dispatch = useDispatch();
  const listDonors = useSelector((state) => state.listDonors);
  const { donors, loading, error } = listDonors;
  useEffect(() => {
    dispatch(listDonorsAction());
  }, []);
  const data1 = [
    {
      id: donors?.filter((x) => x.blood == "A+").length,
      name: "A+",
    },
    {
      id: donors?.filter((x) => x.blood == "B+").length,

      name: "B+",
    },
    {
      id: donors?.filter((x) => x.blood == "O+").length,

      name: "O+",
    },
    {
      id: donors?.filter((x) => x.blood == "AB+").length,

      name: "AB+",
    },
  ];
  const data2 = [
    {
      id: donors?.filter((x) => x.blood == "A-").length,

      name: "A-",
    },
    {
      id: donors?.filter((x) => x.blood == "B-").length,

      name: "B-",
    },
    {
      id: donors?.filter((x) => x.blood == "O-").length,

      name: "O-",
    },
    {
      id: donors?.filter((x) => x.blood == "AB-").length,

      name: "AB-",
    },
  ];
  return (
    <MDBContainer>
      <MDBRow style={{ marginTop: "15px" }}>
        {data1.map((x) => (
          <MDBCol size="md">
            <MDBCard style={{ padding: "10px", border: "1px solid #F93154" }}>
              <MDBCardBody>
                <MDBCardTitle style={{ textAlign: "right" }}>
                  {x.name} {"  "}
                  <MDBIcon
                    fas
                    icon="tint"
                    style={{
                      color: "#F93154",
                      marginLeft: "10px",
                      fontSize: "25px",
                    }}
                  />
                </MDBCardTitle>
                <MDBCardText></MDBCardText>
                <MDBBtn color="danger">{x.id}</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
      <MDBRow style={{ marginTop: "10px" }}>
        {data2.map((x) => (
          <MDBCol size="md">
            <MDBCard style={{ padding: "10px", border: "1px solid #F93154" }}>
              <MDBCardBody>
                <MDBCardTitle style={{ textAlign: "right" }}>
                  {x.name}
                  {"  "}
                  <MDBIcon
                    fas
                    icon="tint"
                    style={{
                      color: "#F93154",
                      marginLeft: "10px",
                      fontSize: "25px",
                    }}
                  />
                </MDBCardTitle>
                <MDBCardText></MDBCardText>
                <MDBBtn color="danger">{x.id}</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
      <hr />
      <MDBRow style={{ marginTop: "10px", marginBottom: "74px" }}>
        <MDBCol size="md"></MDBCol>

        <MDBCol size="md"></MDBCol>
        <MDBCol size="md"></MDBCol>
        <MDBCol size="md">
          <MDBCard style={{ padding: "10px", border: "1px solid #1266F1" }}>
            <MDBCardBody>
              <MDBCardTitle style={{ textAlign: "right" }}>
                المتبرعين{" "}
                <MDBIcon
                  fas
                  icon="users"
                  style={{
                    fontSize: "25px",
                    marginLeft: "10px",
                    color: "#1266F1 ",
                  }}
                />
              </MDBCardTitle>
              <MDBCardText></MDBCardText>
              <MDBBtn color="primary">{donors?.length}</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Bloods;
