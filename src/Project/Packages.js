import React from 'react'
import Layout from '../layout/default';
import DataTable from "../components/DataTable/DataTable";
import { tableData, tableColumns } from '../components/DataTable/TableData';
import { Block } from '../components';


const Packages = () => {
    return (
        <Layout>
            <Block.Head page>
                <Block.HeadContent>
                    <Block.Title>Packages</Block.Title>
                    <Block.Text>This is a custom Packages Data_table!</Block.Text>
                </Block.HeadContent>
            </Block.Head>
            <DataTable data={tableData} columns={tableColumns} expandableRows actions />
        </Layout>
    )
}

export default Packages