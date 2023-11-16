import { Link } from 'react-router-dom';
import { Tab, Nav, Card, Button, Alert, Row, Col } from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import { Image, Icon, Schedule, Media, MediaGroup, MediaText, MediaAction } from '../../components';

function MyProfilePage() {
    return (
        <Layout title="My Profile" content="container">
            <Block.Head>
                <Block.HeadBetween className="align-items-start">
                    <Block.HeadContent>
                        <div className="d-flex flex-column flex-md-row align-items-md-center">
                            <Media size="huge" shape="circle">
                                <Image src="/images/avatar/c.jpg" staticImage thumbnail alt="user" />
                            </Media>
                            <div className="mt-3 mt-md-0 ms-md-3">
                                <h3 className="title mb-1">Wesley Burland</h3>
                                <span className="small">Owner & Founder</span>
                                <ul className="nk-list-option pt-1">
                                    <li><Icon name="map-pin"></Icon><span className="small">California, United States</span></li>
                                    <li><Icon name="building"></Icon><span className="small">Softnio</span></li>
                                </ul>
                            </div>
                        </div>
                    </Block.HeadContent>
                </Block.HeadBetween>
            </Block.Head>
            <Tab.Container defaultActiveKey="tabOne">
                <Block.HeadBetween>
                    <div className="gap-col">
                        <Nav variant="pills" className="nav-pills-border gap g-3">
                            <Nav.Item>
                                <Nav.Link eventKey="tabOne">Overview</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <div className="gap-col">
                        <ul className="d-flex gap g-2">
                            <li className="d-none d-md-block">
                                <Link to="/admin/profile-settings" className="btn btn-soft btn-primary">
                                    <Icon name="edit"></Icon>
                                    <span>Edit Profile</span>
                                </Link>
                            </li>
                            <li className="d-md-none">
                                <Link to="/admin/profile-settings" className="btn btn-soft btn-primary btn-icon">
                                    <Icon name="edit"></Icon>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Block.HeadBetween>

                <Block className="mt-4">
                    <Tab.Content>
                        <Tab.Pane eventKey="tabOne">
                            <Card className="card-gutter-md">
                                <div className="card-row card-row-lg col-sep col-sep-lg">
                                    <div className="card-aside">
                                        <Card.Body>
                                            <div className="bio-block">
                                                <h4 className="bio-block-title">Details</h4>
                                                <ul className="list-group list-group-borderless small">
                                                    <li className="list-group-item">
                                                        <span className="title fw-medium w-40 d-inline-block">Account ID:</span>
                                                        <span className="text">ID-45453423</span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <span className="title fw-medium w-40 d-inline-block">Full Name:</span>
                                                        <span className="text">Wesley Burland</span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <span className="title fw-medium w-40 d-inline-block">Email:</span>
                                                        <span className="text">wesley@gmail.com</span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <span className="title fw-medium w-40 d-inline-block">Address:</span>
                                                        <span className="text">California, United States</span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <span className="title fw-medium w-40 d-inline-block">Joining Date</span>
                                                        <span className="text">2 Dec 2021</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Card.Body>
                                    </div>
                                    <div className="card-content col-sep">
                                        <Card.Body>
                                            <div className="bio-block">
                                                <h4 className="bio-block-title">About Me</h4>
                                                <p>I code and design websites worldwide. Mauris varius tellus vitae tristique sagittis. Sed aliquet, est nec auctor aliquet, orci ex vestibulum ex, non pharetra lacus erat ac nulla.</p>
                                                <p>Sed vulputate, ligula eget mollis auctor, lectus elit feugiat urna, eget euismod turpis lectus sed ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ut velit finibus, scelerisque sapien vitae, pharetra est. Nunc accumsan ligula vehicula scelerisque vulputate. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, dolore?</p>
                                                <Row className="g-gs pt-2">
                                                    <Col lg="6">
                                                        <div className="small">Designation:</div>
                                                        <h5 className="small">Node.js Developer</h5>
                                                    </Col>
                                                    <Col lg="6">
                                                        <div className="small">Website:</div>
                                                        <h5 className="small">www.softnio.com</h5>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card.Body>
                                    </div>
                                </div>
                            </Card>
                        </Tab.Pane>
                    </Tab.Content>
                </Block>
            </Tab.Container>

        </Layout>
    )
}

export default MyProfilePage;