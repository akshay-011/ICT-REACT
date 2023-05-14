import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TableData = () => {
    var [data, setData] = useState([]);
    useEffect(
        () => {
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {console.log(err)})
        },[])
  return (
    <div>
        <TableContainer sx={{maxWidth:650}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((user, index) => {
                            return(
                                <TableRow key={user.id}>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>

            </Table>
        </TableContainer>
    </div>
  )
}

export default TableData