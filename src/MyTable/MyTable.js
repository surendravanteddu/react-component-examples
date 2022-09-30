import React from 'react'
import {DataTable} from "./DataTable";
import 'bulma/css/bulma.min.css';

const data = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        company: "DataPro",
        jobTitle: "CEO",
        state: "TX",
        isSiteAdmin: true,
        dateJoined: "04/20/1999"
    },
    {
        id: 1,
        firstName: "Adam",
        lastName: "Zeus",
        company: "Instant",
        jobTitle: "Manager",
        state: "CA",
        isSiteAdmin: false,
        dateJoined: "02/12/1993"
    }
]
export const MyTable = () => {
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
        <DataTable colDefs={colDefs} data={data} />
    </div>;
};

