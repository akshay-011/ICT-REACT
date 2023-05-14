import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Basics = () => {
  return (
    <div>
        <Typography variant="h2">My Site</Typography><br /> <br />
        <TextField label="username" variant='standard'></TextField><br /><br />
        <Button variant='contained' color="error" size='large'>Submit</Button><br />
        <Button variant='text' color="success">hehe</Button><br />
        <Button variant='outlined' color="secondary">hehe</Button>
        <br />
    </div>
  )
}

export default Basics