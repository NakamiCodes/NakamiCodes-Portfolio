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
import classnames from "classnames";

export default function SUD() {
  const [iconTabs, setIconsTabs] = React.useState(1);
  const [tabs, setTabs] = React.useState(1);
  const carouselItems = [
    {
      src: require("assets/img/SUD.jpg"),
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
        <h3>03. Substance Abuse Assistant</h3>
        <Row>
          <Col md="6">
            <Row className="justify-content-between align-items-center">
              <UncontrolledCarousel items={carouselItems} />
            </Row>
          </Col>
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
                <TabContent className="tab-space" activeTab={"link" + iconTabs}>
                  <TabPane tabId="link1">
                    <p>
                      As a dedicated team of engineers, we were inspired to make
                      a positive impact on the world by helping individuals
                      struggling with substance abuse. Using our expertise in
                      web development, we created a powerful online application
                      that provides users with a comprehensive suite of tools
                      for tracking their daily activities, journaling their
                      progress, and accessing helpful tips and resources. By
                      leveraging advanced technologies like React and database
                      management systems, we built a scalable, reliable, and
                      user-friendly platform that delivers exceptional
                      performance and functionality. Our application is more
                      than just a tool - it's a powerful resource for those in
                      need, offering hope, support, and encouragement to those
                      on their path to recovery.
                    </p>
                  </TabPane>
                  <TabPane tabId="link2">
                    <ul>
                      <li>
                        <p>
                          Employed cutting-edge security measures by integrating
                          Google OAuth 2.0 with Passport.js, delivering seamless
                          and secure authentication experiences while minimizing
                          sensitive data exposure. Our users can trust that
                          their personal information is safe and secure at all
                          times.
                        </p>
                      </li>
                      <li>
                        <p>
                          Transformed our application's performance by deploying
                          a high-performance NoSQL (MongoDB) database for
                          real-time data stream manipulation, ensuring fast and
                          efficient data retrieval and scalability as our user
                          base grows. Our platform delivers lightning-fast data
                          access and manipulation, empowering our users to make
                          the most of our application's powerful features.
                        </p>
                      </li>
                      <li>
                        <p>
                          Delivered a personalized experience to our users with
                          the incorporation of a Base64 library for user image
                          file encoding and decoding. With this powerful tool,
                          users can easily upload and retrieve personalized
                          images within our app, making their experience more
                          engaging and enjoyable. Our attention to detail and
                          focus on personalization sets us apart from the
                          competition, delivering an exceptional user experience
                          that keeps our users coming back for more.
                        </p>
                      </li>
                    </ul>
                  </TabPane>
                  <TabPane tabId="link3">
                    <ul>
                      <li>
                        <p>Google OAuth 2.0</p>
                      </li>
                      <li>
                        <p>Passport.js</p>
                      </li>
                      <li>
                        <p>NoSQL database (MongoDB)</p>
                      </li>
                      <li>
                        <p>Base64 library</p>
                      </li>
                    </ul>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
