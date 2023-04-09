/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
// reactstrap components
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

export default function Signup() {
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  React.useEffect(() => {
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  }, []);
  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    );
  };
  return (
    <div className="section section-signup">
      <Container>
        <div className="squares square-1" />
        <div className="squares square-2" />
        <div className="squares square-3" />
        <div className="squares square-4" />

        <Row className="row-grid justify-content-between align-items-center">
          <Col lg="12">
            <h1 className="text-center">Find Me Here!</h1>
            <Row className="row-grid justify-content-center">
              <Card className="card-register"></Card>
              <Col lg="3">
                <div className="info">
                  <Button
                    color="facebook"
                    href="https://twitter.com/Nuckaahfs"
                    id="tooltip639225725"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <h4 className="info-title">Twitter</h4>
                  <hr className="line-primary" />
                  <p>
                    Follow me on Twitter for a mix of tech news, gaming updates,
                    and the occasional witty one-liner. Guaranteed to make you
                    laugh and maybe even learn something new!
                  </p>
                </div>
              </Col>
              <Col lg="3">
                <div className="info">
                  <Button
                    color="facebook"
                    href="https://www.instagram.com/kallme_kami/"
                    id="tooltip639225725"
                    target="_blank"
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                  <h4 className="info-title">Instagram</h4>
                  <hr className="line-warning" />
                  <p>
                    My Instagram is where I share my passions and interests
                    outside of work. Follow me for a mix of my adventures, my
                    hobbies and my daily life. You'll see photos of me hiking,
                    cooking, playing with my pets and more. I also love to
                    connect with fellow gamers and web developers, so feel free
                    to drop a comment or DM!
                  </p>
                </div>
              </Col>
              <Col lg="3">
                <div className="info">
                  <Button
                    color="facebook"
                    href="https://github.com/NakamiCodes"
                    id="tooltip639225725"
                    target="_blank"
                  >
                    <i className="fab fa-github" />
                  </Button>
                  <h4 className="info-title">GitHub</h4>
                  <hr className="line-warning" />
                  <p>
                    Want to see some of the awesome code I've written? Check out
                    my GitHub page! From responsive web design to seamless
                    integration with APIs, I've got it all. Follow me for
                    updates on my latest projects and to see my coding skills in
                    action.
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
