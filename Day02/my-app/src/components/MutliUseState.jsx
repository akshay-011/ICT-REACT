import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const MutliUseState = () => {
  var [fname, setFname] = useState();
  var [sname, setSName] = useState();

  const changeHandler1 = (event) => {
      setFname(event.target.value);
  }
  const changeHandler2 = (event) => {
      setSName(event.target.value);
  }

  return (
    <div>
        <Typography variant='h3'>Mutiple UseState</Typography>
        <br /><br /><br />
        <TextField label="first name"  variant='filled' onChange={changeHandler1}></TextField>{fname}
        <br /><br />
        <TextField label="second name" variant='filled' onChange={changeHandler2}></TextField>{sname}
    </div>
  )
}

export default MutliUseState