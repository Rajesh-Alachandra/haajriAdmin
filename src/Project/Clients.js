import { useEffect, useState } from "react";
import { Nav, Tab } from 'react-bootstrap';
import Layout from '../layout/default';
import DataTable from "../components/DataTable/DataTable";
import { tableData, tableColumns } from '../components/DataTable/TableData';
import { Block } from "../components";

function Clients() {

    return (
        <Layout >
            <Block.Head page>
                <Block.HeadContent>
                    <Block.Title>Clients</Block.Title>
                    <Block.Text>This is a custom alert message!</Block.Text>
                </Block.HeadContent>
            </Block.Head>
            <Tab.Container id="pills-tabs-example" defaultActiveKey="pills-home">
                <Nav variant="pills" className="mb-3 p-4 ">
                    <Nav.Item className="mr-3">
                        <Nav.Link eventKey="pills-home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mr-3">
                        <Nav.Link eventKey="pills-profile">In Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="pills-contact">Inprogress</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className="p-4">
                    <Tab.Pane eventKey="pills-home">
                        <DataTable data={tableData} columns={tableColumns} expandableRows actions />
                    </Tab.Pane>
                    <Tab.Pane eventKey="pills-profile">
                        <DataTable data={tableData} columns={tableColumns} expandableRows actions />
                    </Tab.Pane>
                    <Tab.Pane eventKey="pills-contact">
                        <DataTable data={tableData} columns={tableColumns} expandableRows actions />
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </Layout>
    )
}

export default Clients;