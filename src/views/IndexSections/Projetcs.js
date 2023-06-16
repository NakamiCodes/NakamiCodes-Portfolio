import { Container, Row } from "reactstrap";
import SleepRX from "components/projects info/SleepRx";
import SUD from "components/projects info/SUD";
import AbouMe from "./AboutMe";
import PeachQE3 from "components/projects info/PeachQE3";

import React from "react";

export default function Projects() {
  return (
    <div className="section section-basic" id="basic-elements">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <Container>
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
      </Container>
    </div>
  );
}
