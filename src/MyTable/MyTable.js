import React from 'react'
import {DataTable} from "./MyTable/DataTable";

const MyTable = () => {
    const colDefs = [
        {
            field: "id",
            header: "Id",
        },
        {
            field: "firstName",
            header: "Firstname",
        },
        {
            field: "lastName",
            header: "Lastname",
        },
        {
            field: "company",
            header: "Company",
        },
        {
            field: "jobTitle",
            header: "Job Title",
        },
        {
            field: "state",
            header: "State",
        },
        {
            field: "isSiteAdmin",
            header: "Site Admin",
            type: "bool"
        },
        {
            field: "dateJoined",
            header: "Date Joined",
            type: "date",
            renderCell: ({value}) => <div style={{float: 'right'}}>{value}</div>
        },
    ]

    return <div>
        <DataTable colDefs={colDefs} data={window.userData} />
    </div>;
};

