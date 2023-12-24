import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
export default function Tech() {
  return (
    <>
      <Container >
        <Row>
          <div style={{ textAlign: "center" }} className="col col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h1>Learn 4.0 Technologies</h1>
            <p>
              Get trained by alumni of top compaines like
              Amazon,Microsoft,intet,etc.Learn directly from professionals
              involved in project development
            </p>
          </div>
          <Col xs="6" sm="6" md="6" lg="6" xl="6">
            <div style={{ marginTop: "40px" }}>
              <div style={{borderTop:"3px solid pink",borderRadius:"10px",backgroundColor:"lightgray"}}>
                <h4>Data Scientist</h4>
                <p>
                  Data science is the study of data to extract meaningful
                  insights for business.
                </p>
                <img
                  src="https://emeritus.org/in/wp-content/uploads/sites/3/2022/09/data-scientist.jpg.optimal.jpg"
                  alt=""
                  height="100px"
                  width="100px"
                  style={{ marginLeft: "30px",marginBottom: "10px" }}
                />
              </div>
              <div style={{borderTop:"3px solid green",marginTop:"60px",borderRadius:"10px",backgroundColor:"lightgray"}}>
                <h4>VR Developer</h4>
                <p>
                  VR Developer: As a VR developer, you would be responsible for
                  designing and creating virtual reality experiences and
                  applications.
                </p>
                <img
                  src="https://miro.medium.com/v2/resize:fit:1400/0*iWFxDvG9GBDFJEGv.jpg"
                  alt=""
                  height="100px"
                  width="100px"
                  style={{ marginLeft: "30px" ,marginBottom: "10px"}}
                />
              </div>
            </div>
          </Col>
          <Col xs="6" sm="6" md="6" lg="6" xl="6">
            <div style={{ marginTop: "30px" }}>
              <div style={{borderTop:"3px solid blue",borderRadius:"10px",backgroundColor:"lightgray"}}>
                <h4>IOT Developer</h4>
                <p>
                  IOT DeveloperIoT developers possess the skills of machine
                  learning and big data management that helps them in making
                  predictions based on the identification of data patterns.
                </p>
                <img
                  src="https://geekflare.com/wp-content/uploads/2021/12/IoT-careers-1200x385.png"
                  alt=""
                  height="100px"
                  width="100px"
                  style={{ marginLeft: "30px",marginBottom: "10px" }}
                />
              </div>
              <div style={{borderTop:"3px solid yellow",marginTop:"23px",borderRadius:"10px",backgroundColor:"lightgray"}}>
                <h4>ML Engineer</h4>
                <p>
                  Machine learning engineers act as critical members of the data
                  science team.
                </p>
                <img
                  src="https://www.opensourceforu.com/wp-content/uploads/2019/10/Become-a-machine-learning-engineer.jpg"
                  alt=""
                  height="100px"
                  width="100px"
                  style={{ marginLeft: "30px",marginBottom: "10px" }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
