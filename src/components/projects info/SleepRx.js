import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledCarousel,
} from "reactstrap";

import React from "react";

export default function SleepRX() {
  const [iconTabs, setIconsTabs] = React.useState(1);
  const carouselItems = [
    {
      src: require("assets/img/SleepRX.png"),
      altText: "Slide 1",
      caption: "",
    },
    // {
    //   src: require("assets/img/fabien-bazanegue.jpg"),
    //   altText: "Slide 2",
    //   caption: "Somewhere Beyond, United States",
    // },
    // {
    //   src: require("assets/img/mark-finn.jpg"),
    //   altText: "Slide 3",
    //   caption: "Stocks, United States",
    // },
  ];

  return (
    <div>
      <Container className="align-items-center">
        <h3>02. Sleep RX</h3>
        <Row className="justify-content-between align-items-center">
          <Col>
            <Card>
              <CardHeader>
                <Nav className="nav-tabs-info" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      // className={classnames({
                      //   active: iconTabs === 1,
                      // })}
                      onClick={(e) => setIconsTabs(1)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-spaceship" />
                      Summary
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      // className={classnames({
                      //   active: iconTabs === 2,
                      // })}
                      onClick={(e) => setIconsTabs(2)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-settings-gear-63" />
                      Details
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      // className={classnames({
                      //   active: iconTabs === 3,
                      // })}
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
                <TabContent className="tab-space" activeTab={"link" + iconTabs}>
                  <TabPane tabId="link1">
                    <p>
                      We created an innovative online sleep tracker and journal
                      to help users take control of their sleep habits and
                      achieve their wellness goals. By leveraging cutting-edge
                      web technologies like React, PostgreSQL, and Express, we
                      built a platform that delivers powerful features like
                      customizable data storage, seamless CRUD operations, and a
                      REST API for easy access to sleep data. With a sleek and
                      intuitive user interface, our application empowers users
                      to monitor and improve their sleep patterns, all while
                      enjoying a smooth and responsive user experience. Whether
                      you're a seasoned wellness enthusiast or just starting out
                      on your wellness journey, our sleep tracker and journal is
                      the perfect tool to help you achieve your goals and live
                      your best life.
                    </p>
                  </TabPane>
                  <TabPane tabId="link2">
                    <ul>
                      <li>
                        <p>
                          Leveraged the power of ​PostgreSQL​ database to create
                          a dynamic and scalable web application that meets the
                          needs of our users, with efficient CRUD operations and
                          a relational data model that prevents redundancy and
                          conforms with ACID standards. This ensures that our
                          users' data is always safe and accessible, no matter
                          how much the application grows.
                        </p>
                      </li>
                      <li>
                        <p>
                          Engineered a high-performance Express server that can
                          handle multiple concurrent requests with ease,
                          providing users with a seamless experience while
                          querying our REST API. This not only boosts our
                          application's speed and reliability, but also makes it
                          easier for us to maintain and upgrade as needed.
                        </p>
                      </li>
                      <li>
                        <p>
                          Streamlined our development process with a custom
                          Webpack configuration that minimizes dependencies and
                          optimizes build times. With features like hot-module
                          reloading, transpilation of React / ES6+ syntax, and
                          uglification/minification to reduce bundle size, we
                          were able to quickly and efficiently update our
                          application in response to user feedback and changing
                          requirements. Our smooth and responsive development
                          workflow makes it easy to stay agile and adaptable in
                          a fast-paced web development environment.
                        </p>
                      </li>
                    </ul>
                  </TabPane>
                  <TabPane tabId="link3">
                    <ul>
                      <li>
                        <p>PostgreSQL database</p>
                      </li>
                      <li>
                        <p>Express server</p>
                      </li>
                      <li>
                        <p>Electron</p>
                      </li>
                      <li>
                        <p>REST API</p>
                      </li>
                      <li>
                        <p>Webpack</p>
                      </li>
                      <li>
                        <p>React</p>
                      </li>
                      <li>
                        <p>ES6+ syntax</p>
                      </li>
                    </ul>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Row className="justify-content-between align-items-center">
              <UncontrolledCarousel items={carouselItems} />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
