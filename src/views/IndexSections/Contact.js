import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import React from "react";
import classnames from "classnames";

export default function Contact() {
  const [squares12to13, setSquares12to13] = React.useState("");
  const [squares10and11, setSquares10and11] = React.useState("");
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  }, []);
  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares12to13(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    );
    setSquares10and11(
      "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    );
  };

  return (
    <div>
      {/* <Container>
        <Row>
          <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
            <div
              className="square square-12"
              id="square120"
              style={{ transform: squares10and11 }}
            />
            <div
              className="square square-13"
              id="square13"
              style={{ transform: squares10and11 }}
            />
            <Card className="card-register">
              <CardHeader>
                <CardImg
                  alt="..."
                  src={require("assets/img/square-purple-1.png")}
                />
                <CardTitle tag="h4">Register</CardTitle>
              </CardHeader>
              <CardBody>
                <Form className="form">
                  <InputGroup
                    className={classnames({
                      "input-group-focus": fullNameFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Full Name"
                      type="text"
                      onFocus={(e) => setFullNameFocus(true)}
                      onBlur={(e) => setFullNameFocus(false)}
                    />
                  </InputGroup>
                  <InputGroup
                    className={classnames({
                      "input-group-focus": emailFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="text"
                      onFocus={(e) => setEmailFocus(true)}
                      onBlur={(e) => setEmailFocus(false)}
                    />
                  </InputGroup>
                  <InputGroup
                    className={classnames({
                      "input-group-focus": passwordFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-lock-circle" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="text"
                      onFocus={(e) => setPasswordFocus(true)}
                      onBlur={(e) => setPasswordFocus(false)}
                    />
                  </InputGroup>
                  <FormGroup check className="text-left">
                    <Label check>
                      <Input type="checkbox" />
                      <span className="form-check-sign" />I agree to the{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        terms and conditions
                      </a>
                      .
                    </Label>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-round" color="warning" size="lg">
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <div className="register-bg" />
        <div
          className="square square-12"
          id="square12"
          style={{ transform: squares12to13 }}
        />
        <div
          className="square square-13"
          id="square13"
          style={{ transform: squares12to13 }}
        />
        <div
          className="square square-14"
          id="square14"
          style={{ transform: squares12to13 }}
        />
        <div
          className="square square-15"
          id="square15"
          style={{ transform: squares12to13 }}
        />
        <div
          className="square square-16"
          id="square16"
          style={{ transform: squares12to13 }}
        />
        <div
          className="square square-17"
          id="square17"
          style={{ transform: squares12to13 }}
        />
      </Container> */}
      <Container>
        <Row className="justify-content-center">
          <Col lg="12">
            <h1 className="text-center">Find Me Here!</h1>
            <Row className="row-grid justify-content-center">
              <Col lg="3">
                <div className="info">
                  <Button
                    color="facebook"
                    href="https://twitter.com/creativetim"
                    id="tooltip639225725"
                    target="_blank"
                  >
                    <i className="fab fa-google" />
                  </Button>
                  <h4 className="info-title">Low Commission</h4>
                  <hr className="line-primary" />
                  <p>
                    Divide details about your work into parts. Write a few lines
                    about each one. A paragraph describing a feature will.
                  </p>
                </div>
              </Col>
              <Col lg="3">
                <div className="info">
                  <div className="icon icon-warning">
                    <i className="tim-icons icon-chart-pie-36" />
                  </div>
                  <h4 className="info-title">High Incomes</h4>
                  <hr className="line-warning" />
                  <p>
                    Divide details about your product or agency work into parts.
                    Write a few lines about each one. A paragraph describing
                    feature will be a feature.
                  </p>
                </div>
              </Col>
              <Col lg="3">
                <div className="info">
                  <div className="icon icon-success">
                    <i className="tim-icons icon-single-02" />
                  </div>
                  <h4 className="info-title">Verified People</h4>
                  <hr className="line-success" />
                  <p>
                    Divide details about your product or agency work into parts.
                    Write a few lines about each one. A paragraph describing be
                    enough.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
