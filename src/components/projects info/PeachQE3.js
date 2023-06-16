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

export default function PeachQE3() {
  const [iconTabs, setIconsTabs] = React.useState(1);
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
  ];

  return (
    <div>
      <Container className="align-items-center">
        <h3>01. Peach QE</h3>
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
                      A powerful GraphQl Relay-based Electron application
                      designed for exploring and auditing queries with ease and
                      readability. This innovative application provides an
                      intuitive and user-friendly interface for navigating
                      queries, allowing for seamless exploration and analysis.
                      With a focus on reliability and performance, this Electron
                      application raises the bar for modern web development and
                      sets a new standard for exploring and auditing GraphQL
                      queries.
                    </p>
                  </TabPane>
                  <TabPane tabId="link2">
                    <ul>
                      <li>
                        <p>
                          Designed and developed a cutting-edge GraphQL
                          developer tool and Query Explorer that enables users
                          to visualize and analyze multiple queries with ease.
                          Our tool's custom-generated schemas and render results
                          offer a streamlined way to display query responses and
                          visualize aspects of the Relay environment. Our team
                          also added additional developer tools to enhance
                          GraphQL exploration with Relay.
                        </p>
                      </li>
                      <li>
                        <p>
                          Implemented the Relay environment to harness its
                          powerful structure and opinionatedness. Our
                          application provides users with greater clarity on
                          their query flow in a dynamic visual environment that
                          showcases Relay's unique characteristics. Our
                          visualization is a game-changer for the Relay client,
                          setting it apart from other GraphQL clients.
                        </p>
                      </li>
                      <li>
                        <p>
                          Engineered an Electron base to build multi-platform
                          desktop applications that maximize desktop user
                          capability and facilitate secure, asynchronous, and
                          efficient data flow from server to client. Our
                          approach reinforces data protection and bypasses a
                          server-side infrastructure, enabling optimized data
                          interaction.
                        </p>
                      </li>
                      <li>
                        <p>
                          Created a React structure of reusable components for
                          Front-End UI following atomic design principles,
                          ensuring consistency and modularity across the
                          application codebase. Our approach achieved full site
                          coverage and reduced overall component creation time
                          and memory load, saving valuable development
                          resources.
                        </p>
                      </li>
                      <li>
                        <p>
                          Leveraged React Hooks to manage state and use
                          lifecycle methods within functional components,
                          minimizing the implementation of class-based
                          components in favor of functional components. Our
                          streamlined approach reduced file complexity and
                          improved efficiency, simplifying the build process.
                        </p>
                      </li>
                      <li>
                        <p>
                          Utilized React-bootstrap component library to access
                          labor-intensive components and rapidly apply
                          consistent styling for a clean and responsive UI. Our
                          approach allowed for a smooth build process, requiring
                          less communication for styling between team members,
                          and resulted in a stunning UI.
                        </p>
                      </li>
                      <li>
                        <p>
                          Employed Webpack with babel-loader to transpile
                          JavaScript E6+ and static code, bundling files and
                          dependencies, minimizing and uglifying code. Our
                          implementation reduced file size and improved
                          application load/render times, while leveraging
                          proxy-server configuration for hot module reloading.
                          Our approach improved the development workflow by
                          instantly updating the application when modifications
                          are made in the source code, saving valuable
                          development time.
                        </p>
                      </li>
                      <li>
                        <p>
                          Structured asynchronous Axios API requests via
                          reusable middleware to offer downloadable schema files
                          chosen by the user from diverse URL endpoints. Our
                          approach enabled dynamic editing of schemas, quickly
                          and easily loading new sets of schema - a highly
                          requested feature in the GraphQL community. Our
                          solution offers a unique and exciting feature that
                          sets our tool apart from other GraphQL query
                          explorers.
                        </p>
                      </li>
                    </ul>
                  </TabPane>
                  <TabPane tabId="link3">
                    <ul>
                      <li>
                        <p>GraphQL</p>
                      </li>
                      <li>
                        <p>Relay</p>
                      </li>
                      <li>
                        <p>Electron</p>
                      </li>
                      <li>
                        <p>React</p>
                      </li>
                      <li>
                        <p>React Hooks</p>
                      </li>
                      <li>
                        <p>React-bootstrap</p>
                      </li>
                      <li>
                        <p>Webpack Babel Axios</p>
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
