import React, {useEffect, useState} from "react";
import axios from "axios";
import {DataTable} from "./DataTable";

export const ContactsTable = () => {
    const [contacts, setContacts] = useState([]);
    useEffect(async () => {
        const data = await fetchContacts();
        setContacts(data.data);
    }, [])
    const colDefs = [
        {
            field: "id",
            header: "Id",
        },
        {
            field: "name",
            header: "Name",
            sort: "desc"
        },
        {
            field: "email",
            header: "Email",
        }
    ]

    const fetchContacts = () => {
        return axios(
            {
                method: 'GET',
                url: 'http://localhost:4000/contacts',
                headers: {
                    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MDUyNzMwMTEsImV4cCI6MTcwNTM1OTQxMX0.2hNriM28B11jgwa_zsWnqd5RUH_jU-lagnA7q1-w1pA'
                }
            }
        )
    }

    return (
        <DataTable colDefs={colDefs} data={contacts}/>
    )
}
