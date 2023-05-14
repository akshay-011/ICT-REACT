import { Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Alerts from './alerts/Alerts';
import LoadingBody from './LoadingBody';

const ViewDetails = () => {
    const [data, setData] = useState([]);
    const [deleted, setDeleted]  = useState(false);
    const [loading, setLoading] = useState(true);


    const del = (ids) => {
        axios.post("http://localhost:9876/deletes", {id:ids})
        .then((res) => {
            if(res.status === 200){
                setDeleted(true)
            }
        })
    }

    useEffect(() => {
        axios.get("http://localhost:9876/view")
        .then((response) => {
            setData(response.data);
            setLoading(false);
        })
        .catch((err) => { console.log(err) })

    }, [deleted]);

    if(loading){
        return(
            <section style={{width:600, marginLeft:'30%'}}>
                <br />
                <LoadingBody />
            </section>
        )
    }

  return (
    <div >
        <section style={{width:600, marginLeft:'30%'}}>
            {
                deleted ? <Alerts sev="error" open={deleted} onclick={() => setDeleted(false)} msg="Deleted Data" /> : null
            }
        </section>
        <TableContainer sx={{maxWidth:650, marginLeft:'25%'}} >
            <Table>
                <TableHead>
                    <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Grade</TableCell>
                            <TableCell>Edit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((val,index) => {
                            return(
                                <TableRow key={index} >
                                    <TableCell>{val.name}</TableCell>
                                    <TableCell>{val.grade}</TableCell>
                                    <TableCell>
                                        <Button onClick={() => del(val._id)} size='small' variant='outlined' color='error'>Delete</Button>
                                    </TableCell>
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

export default ViewDetails