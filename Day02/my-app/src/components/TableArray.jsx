import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'

const TableArray = () => {
    var [data, setData] = useState([
        {
            name:"ijaz",
            age:19
        },
        {
            name:"akshay",
            age:19
        }
    ]);
  return (
    <div>
        
        <Typography variant='h3'>Table & Array</Typography>
        <br /><br />
        <TableContainer>
            <Table sx={{maxWidth:350}}>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((data,index) => {
                            return(
                                <TableRow key={index}>
                                    <TableCell>{data.name}</TableCell>
                                    <TableCell>{data.age}</TableCell>
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

export default TableArray