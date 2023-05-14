import { useTheme } from '@emotion/react';
import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'


const State = () => {
    let [name, setName] = useState("Ijaz");
    let [n, setN] = useState();

    const change = () => {
      setName(n);
    }

    const handleName = event => {
        setN(event.target.value);
    }
  return (
    <div>
      <em>home</em>
        <Typography variant='h2' >Welcome {name}</Typography><br />

        <TextField label="name" variant='outlined' onChange={handleName}></TextField><br /><br />
        <Button variant='contained'onClick={change} >Change</Button>
    </div>
  )
}

export default State