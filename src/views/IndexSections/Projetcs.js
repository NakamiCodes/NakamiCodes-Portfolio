import {
  Container,
  Card,
  CardHeader,
  Nav,
  NavItem,
  NavLink,
  CardBody,
  TabContent,
  Row,
  Col,
  TabPane,
} from "reactstrap";
import PeachQE from "components/projects info/PeachQE";
import SleepRX from "components/projects info/SleepRx";
import SUD from "components/projects info/SUD";
import ShackClone from "components/projects info/ShackClone";
import AbouMe from "./AboutMe";
import PeachQE2 from "components/projects info/PeachQE2";
import PeachQE3 from "components/projects info/PeachQE3";

import React from "react";
import classnames from "classnames";
import Basics from "./Basics";

export default function Projects() {
  const [iconTabs, setIconsTabs] = React.useState(1);
  return (
    <div className="section section-basic" id="basic-elements">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <Container>
        {/* <h1 className="profile-title text-left">Projects</h1> */}
        <Row>
          <AbouMe></AbouMe>
        </Row>
        <h1 className="title">Projetcs</h1>
        <br></br>
        <PeachQE3></PeachQE3>
        <br></br>
        <SleepRX></SleepRX>
        <br></br>
        <SUD></SUD>
        {/* <Row>
          <Col>
            <PeachQE />
            <SUD></SUD>
          </Col>
          <Col>
            <ShackClone></ShackClone>
            <SleepRX></SleepRX>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}
