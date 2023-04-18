import { Card, CardHeader, Container, Row, Col } from "reactstrap";
import React from "react";

export default function AbouMe() {
  return (
    <div>
      <br></br>
      <br></br>
      <Container className="align-items-center">
        <Row>
          <Col lg="6" md="6">
            <h1 className="profile-title text-left">About Me</h1>
            <h5 className="text-on-back">Who is he?</h5>
            <p className="profile-description">
              Hey there, I'm Nakami Hope-Felix, a web developer and avid gamer.
              When I'm not buried in lines of code, you can usually find me
              taking down bosses and saving the world in some virtual realm. I
              have a passion for creating visually stunning and user-friendly
              websites, and I strive to make every project I work on a
              masterpiece. If you're looking for someone who can turn your web
              development dreams into reality, look no further!
            </p>
            {/* <Button color="warning" to="register-page" tag={Link}>
              Register Page
            </Button> */}
          </Col>
          <Col className="ml-auto mr-auto" lg="4" md="6">
            <Card className="card-coin card-plain">
              <CardHeader>
                <img
                  alt="..."
                  className="img-center img-fluid rounded-circle"
                  src={require("assets/img/Me.jpg")}
                />
                <h4 className="title">What I look like :)</h4>
              </CardHeader>
              {/* <CardBody>
                <Nav className="nav-tabs-warning justify-content-center" tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: tabs === 1,
                      })}
                      onClick={(e) => {
                        e.preventDefault();
                        setTabs(1);
                      }}
                      href="#pablo"
                    >
                      Wallet
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: tabs === 2,
                      })}
                      onClick={(e) => {
                        e.preventDefault();
                        setTabs(2);
                      }}
                      href="#pablo"
                    >
                      Send
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: tabs === 3,
                      })}
                      onClick={(e) => {
                        e.preventDefault();
                        setTabs(3);
                      }}
                      href="#pablo"
                    >
                      News
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent
                  className="tab-subcategories"
                  activeTab={"tab" + tabs}
                >
                  <TabPane tabId="tab1">
                    <Table className="tablesorter" responsive>
                      <thead className="text-primary">
                        <tr>
                          <th className="header">COIN</th>
                          <th className="header">AMOUNT</th>
                          <th className="header">VALUE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>BTC</td>
                          <td>7.342</td>
                          <td>48,870.75 USD</td>
                        </tr>
                        <tr>
                          <td>ETH</td>
                          <td>30.737</td>
                          <td>64,53.30 USD</td>
                        </tr>
                        <tr>
                          <td>XRP</td>
                          <td>19.242</td>
                          <td>18,354.96 USD</td>
                        </tr>
                      </tbody>
                    </Table>
                  </TabPane>
                  <TabPane tabId="tab2">
                    <Row>
                      <Label sm="3">Pay to</Label>
                      <Col sm="9">
                        <FormGroup>
                          <Input
                            placeholder="e.g. 1Nasd92348hU984353hfid"
                            type="text"
                          />
                          <FormText color="default" tag="span">
                            Please enter a valid address.
                          </FormText>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm="3">Amount</Label>
                      <Col sm="9">
                        <FormGroup>
                          <Input placeholder="1.587" type="text" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button
                      className="btn-simple btn-icon btn-round float-right"
                      color="warning"
                      type="submit"
                    >
                      <i className="tim-icons icon-send" />
                    </Button>
                  </TabPane>
                  <TabPane tabId="tab3">
                    <Table className="tablesorter" responsive>
                      <thead className="text-primary">
                        <tr>
                          <th className="header">Latest Crypto News</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>The Daily: Nexo to Pay on Stable...</td>
                        </tr>
                        <tr>
                          <td>Venezuela Begins Public of Nation...</td>
                        </tr>
                        <tr>
                          <td>PR: BitCanna – Dutch Blockchain...</td>
                        </tr>
                      </tbody>
                    </Table>
                  </TabPane>
                </TabContent>
              </CardBody> */}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
