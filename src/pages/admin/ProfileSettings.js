import { Link } from 'react-router-dom';
import { Tab, Nav, Card, Button, Alert, Row, Col, Form, OverlayTrigger, Tooltip, ListGroup } from 'react-bootstrap';
import Swal from 'sweetalert2/src/sweetalert2.js';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import { Image, Icon, Media, MediaGroup, MediaText, MediaAction, Select } from '../../components';

function ProfileSettingsPage() {

    // delete account alert
    const alertConfirm = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                Swal.fire('Deleted', 'Your account has been deleted.', 'success')
            } else {
                Swal.fire('Cancelled', 'Your account is still intact', 'info')
            }
        })
    };

    return (
        <Layout title="My Settings" content="container">
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
                    {/* <Block.HeadContent>
                    <div className="d-flex gap g-3">
                        <div className="gap-col">
                            <div className="box-dotted py-2">
                                <div className="d-flex align-items-center">
                                    <div className="h4 mb-0">44.3k</div>
                                    <span className="change up ms-1 small">
                                        <Icon name="arrow-down"></Icon>
                                    </span>
                                </div>
                                <div className="smaller">Followers</div>
                            </div>
                        </div>
                        <div className="gap-col">
                            <div className="box-dotted py-2">
                                <div className="d-flex align-items-center">
                                    <div className="h4 mb-0">4.5k</div>
                                    <span className="change up ms-1 small">
                                        <Icon name="arrow-up"></Icon>
                                    </span>
                                </div>
                                <div className="smaller">Following</div>
                            </div>
                        </div>
                    </div>
                </Block.HeadContent> */}
                </Block.HeadBetween>
            </Block.Head>

            <Tab.Container defaultActiveKey="tab-1">
                <Block.HeadBetween>
                    <div className="gap-col">
                        <Nav variant="pills" className="nav-pills-border gap g-3">
                            <Nav.Item>
                                <Nav.Link eventKey="tab-1">Account</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tab-2">Security</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <div className="gap-col">
                        <ul className="d-flex gap g-2">
                            <li className="d-none d-md-block">
                                <Link to="/admin/profile" className="btn btn-soft btn-primary">
                                    <Icon name="user"></Icon>
                                    <span>View Profile</span>
                                </Link>
                            </li>
                            <li className="d-md-none">
                                <Link to="/admin/profile" className="btn btn-soft btn-primary btn-icon">
                                    <Icon name="user"></Icon>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Block.HeadBetween>

                <Block className="mt-4">
                    <Tab.Content>
                        <Tab.Pane eventKey="tab-1" transition={false}>
                            <Card className="card-gutter-md">
                                <Card.Body>
                                    <div className="bio-block">
                                        <h4 className="bio-block-title mb-4">Edit Profile</h4>
                                        <Form action="#">
                                            <Row className="g-3">
                                                <Col lg="12">
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="fullname">Full Name</Form.Label>
                                                        <div className="form-control-wrap">
                                                            <Form.Control type="text" id="fullname" placeholder="Full name" />
                                                        </div>
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="6">
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="email">Email address</Form.Label>
                                                        <div className="form-control-wrap">
                                                            <Form.Control type="text" id="email" placeholder="Email address" />
                                                        </div>
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="6">
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="company">Company</Form.Label>
                                                        <div className="form-control-wrap">
                                                            <Form.Control type="text" id="company" placeholder="Company name" />
                                                        </div>
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="12">
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="address">Address</Form.Label>
                                                        <div className="form-control-wrap">
                                                            <Form.Control type="text" id="address" placeholder="e.g. California, United States" />
                                                        </div>
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="4">
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="city">City</Form.Label>
                                                        <div className="form-control-wrap">
                                                            <Form.Control type="text" id="city" placeholder="City" />
                                                        </div>
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="4">
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="country">Country</Form.Label>
                                                        <div className="form-control-wrap">
                                                            <Select removeItemButton>
                                                                <option value="">Select a country</option>
                                                                <option value="1">Germany</option>
                                                                <option value="2">Canada</option>
                                                                <option value="3">Usa</option>
                                                                <option value="4">Aus</option>
                                                            </Select>
                                                        </div>
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="4">
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="postalcode">Postal Code</Form.Label>
                                                        <div className="form-control-wrap">
                                                            <Form.Control type="text" id="postalcode" placeholder="Zip code" />
                                                        </div>
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="12">
                                                    <Form.Group className="form-group">
                                                        <Form.Label>About Me</Form.Label>
                                                        <div className="form-control-wrap">
                                                            <Form.Control as="textarea" rows="3" defaultValue="On the other hand, we denounce with righteous indignation"></Form.Control>
                                                        </div>
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="12">
                                                    <Button variant="primary" type="submit">Update Profile</Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Tab.Pane>
                        <Tab.Pane eventKey="tab-2" transition={false}>
                            <Card className="col-sep card-gutter-md">
                                <Card.Body>
                                    <div className="bio-block">
                                        <h4 className="bio-block-title mb-4">Change Password</h4>
                                        <Form action="#">
                                            <Row className="g-3">
                                                <Col lg="4">
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="oldPassword">Old Password</Form.Label>
                                                        <div className="form-control-wrap">
                                                            <a href="#password" className="form-control-icon end password-toggle" title="Toggle show/hide password">
                                                                <Icon name="eye-off" className="on"></Icon>
                                                                <Icon name="eye" className="off"></Icon>
                                                            </a>
                                                            <Form.Control type="text" placeholder="Old password" />
                                                        </div>
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="4">
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="newPassword">New Password</Form.Label>
                                                        <div className="form-control-wrap">
                                                            <a href="#password" className="form-control-icon end password-toggle" title="Toggle show/hide password">
                                                                <Icon name="eye-off" className="on"></Icon>
                                                                <Icon name="eye" className="off"></Icon>
                                                            </a>
                                                            <Form.Control type="text" placeholder="New password" />
                                                        </div>
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="4">
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="confirmPassword">Confirm New Password</Form.Label>
                                                        <div className="form-control-wrap">
                                                            <a href="#password" className="form-control-icon end password-toggle" title="Toggle show/hide password">
                                                                <Icon name="eye-off" className="on"></Icon>
                                                                <Icon name="eye" className="off"></Icon>
                                                            </a>
                                                            <Form.Control type="text" placeholder="Confirm New Password" />
                                                        </div>
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="12">
                                                    <div className="d-flex flex-wrap align-items-center gap g-3">
                                                        <div className="gap-col">
                                                            <Button variant="primary" type="submit">Change Password</Button>
                                                        </div>
                                                        <div className="gap-col">
                                                            <Link to="/auths/auth-reset" className="text-light small" target="_blank">Forgot Password?</Link>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                </Card.Body>
                                <Card.Body>
                                    <div className="bio-block">
                                        <h4 className="bio-block-title mb-4">Delete Account</h4>
                                        <Alert variant="warning" className="mt-2">
                                            <div className="d-flex">
                                                <Icon size="lg" name="question-alt" className="opacity-75"></Icon>
                                                <div className="ms-2">
                                                    <h6 className="alert-heading mb-1">You Are Deleting Your Account!</h6>
                                                    <span className="smaller d-block">For extra security, this requires you to confirm your email or phone number when you reset yousignr password.</span>
                                                    <a className="smaller" href="#learn-more" target="_blank">Learn more</a>
                                                </div>
                                            </div>
                                        </Alert>
                                        <Form.Group controlId="confirmAccountDeteting">
                                            <Form.Check className="form-check-sm" type="checkbox" label="I confirm my account deleting!" />
                                        </Form.Group>
                                        <div className="mt-3">
                                            <Button variant="danger" onClick={alertConfirm}>Delete Account</Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Tab.Pane>
                    </Tab.Content>
                </Block>
            </Tab.Container>

        </Layout>
    )
}

export default ProfileSettingsPage;