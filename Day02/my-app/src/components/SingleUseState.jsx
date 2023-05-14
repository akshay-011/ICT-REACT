import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const SingleUseState = () => {
    const form = {
        fname:'',
        sname:''
    }
    const [data, setData] = useState(form);
    const changeHandler = (event) => {
        const {name,value} = event.target;
        setData((data) => ({...data,[name]:value}));
        
    }

  return (
    <div>
        <Typography variant='h3' >Form</Typography>
        <br /><br />
        <TextField label="first name" name='fname' value={data.fname} variant='filled' onChange={changeHandler}></TextField>
        <br /><br /><br />
        <TextField label="second name" name='sname' value={data.sname} variant='filled' onChange={changeHandler}></TextField>
        <br /><br />
        <h4>{ `My name is ${data.fname} ${data.sname}` } </h4>
    </div>
  )
}

export default SingleUseState