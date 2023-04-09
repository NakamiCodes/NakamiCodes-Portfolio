import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import PeachQE from "./PeachQE";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";

export default function PeachQE2() {
  const carouselItems = [
    {
      src: require("assets/img/PeachQE.jpg"),
      altText: "Slide 1",
      caption: "",
    },
    {
      src: require("assets/img/PeachQE2.jpg"),
      altText: "Slide 2",
      caption: "",
    },
    // {
    //   src: require("assets/img/mark-finn.jpg"),
    //   altText: "Slide 3",
    //   caption: "Stocks, United States",
    // },
  ];
  const [iconTabs, setIconsTabs] = React.useState(1);
  const [tabs, setTabs] = React.useState(1);
  return (
    <div>
      <Container>
        <Row className="justify-content-between">
          <Col md="6">
            <Row className="justify-content-between align-items-center">
              <UncontrolledCarousel items={carouselItems} />
            </Row>
          </Col>
          <Col md="5">
            {/* <h1 className="profile-title text-left">Projects</h1> */}
            <Container className="align-items-center">
              <h3>02. Sleep RX</h3>
              <Row>
                <Col>
                  <Card>
                    <CardHeader>
                      <Nav className="nav-tabs-info" role="tablist" tabs>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: iconTabs === 1,
                            })}
                            onClick={(e) => setIconsTabs(1)}
                            href="#pablo"
                          >
                            <i className="tim-icons icon-spaceship" />
                            Summary
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: iconTabs === 2,
                            })}
                            onClick={(e) => setIconsTabs(2)}
                            href="#pablo"
                          >
                            <i className="tim-icons icon-settings-gear-63" />
                            Details
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: iconTabs === 3,
                            })}
                            onClick={(e) => setIconsTabs(3)}
                            href="#pablo"
                          >
                            <i className="tim-icons icon-bag-16" />
                            Tech
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </CardHeader>
                    <CardBody>
                      <TabContent
                        className="tab-space"
                        activeTab={"link" + iconTabs}
                      >
                        <TabPane tabId="link1">
                          <p>
                            Collaboratively administrate empowered markets via
                            plug-and-play networks. Dynamically procrastinate
                            B2C users after installed base benefits. <br />
                            <br />
                            Dramatically visualize customer directed convergence
                            without revolutionary ROI.
                          </p>
                        </TabPane>
                        <TabPane tabId="link2">
                          <p>
                            Update your resume and portfolio: Make sure your
                            resume and portfolio are up-to-date, and highlight
                            any relevant skills and experience you have in web
                            development. Look for entry-level positions: While
                            the web development market may be tough right now,
                            there are still entry-level positions available that
                            can help you gain more experience. You may need to
                            be open to internships, apprenticeships, or other
                            positions that offer training and experience.
                            Networking: Networking is one of the most effective
                            ways to find a job, especially in a competitive
                            market. Reach out to your contacts in the industry,
                            attend events, and join online communities related
                            to web development. Freelancing: Consider
                            freelancing as a way to gain experience and build
                            your portfolio. You can offer your services on
                            freelance websites such as Upwork or Freelancer, or
                            reach out to local businesses in your area. Upskill:
                            Consider taking online courses or attending
                            workshops to learn new skills or technologies that
                            are in demand in the web development industry. This
                            can make you a more competitive candidate and help
                            you stand out from other applicants. <br />
                            <br />
                            Dynamically innovate resource-leveling customer
                            service for state of the art customer service.
                          </p>
                        </TabPane>
                        <TabPane tabId="link3">
                          <p>
                            Efficiently unleash cross-media information without
                            cross-media value. Quickly maximize timely
                            deliverables for real-time schemas. <br />
                            <br />
                            Dramatically maintain clicks-and-mortar solutions
                            without functional solutions.
                          </p>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* <div className="btn-wrapper pt-3">
              <Button
                className="btn-simple"
                color="warning"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="tim-icons icon-book-bookmark" /> Bookmark
              </Button>
              <Button
                className="btn-simple"
                color="info"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="tim-icons icon-bulb-63" /> Check it!
              </Button>
            </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
