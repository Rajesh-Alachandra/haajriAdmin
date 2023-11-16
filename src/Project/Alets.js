import React from 'react'
import Layout from '../layout/default';
import DataTable from "../components/DataTable/DataTable";
import { tableData, tableColumns } from '../components/DataTable/TableData';
import { Card, Nav, Tab, Row, Col, Tabs } from 'react-bootstrap';
import { Block } from '../components';


const Alets = () => {
    return (
        <Layout>
            <Block>
                <Block.Head className="wide-md">
                    <Block.HeadContent>
                        <Block.Title tag="h3">Alerts</Block.Title>
                        <Block.Text>Rajesh Alachandra</Block.Text>
                    </Block.HeadContent>
                </Block.Head>
                <Card>
                    <Card.Body>
                        <Tab.Container id="vertical-tabs-example" defaultActiveKey="vertical-home">
                            <Row>
                                <Col lg="3" xl="2">
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="vertical-home">FeedBack</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="vertical-profile">Requests</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="vertical-contact">Service</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="vertical-setting">Issue</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="vertical-service">New Service</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col lg="9" xl="10">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="vertical-home">
                                            <DataTable data={tableData} columns={tableColumns} expandableRows actions />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="vertical-profile">
                                            <DataTable data={tableData} columns={tableColumns} expandableRows actions />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="vertical-contact">
                                            <DataTable data={tableData} columns={tableColumns} expandableRows actions />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="vertical-setting">
                                            <DataTable data={tableData} columns={tableColumns} expandableRows actions />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="vertical-service">
                                            <DataTable data={tableData} columns={tableColumns} expandableRows actions />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Card.Body>
                </Card>
            </Block>
        </Layout>
    )
}

export default Alets