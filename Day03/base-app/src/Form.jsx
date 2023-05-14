import { Button, CardContent, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from "axios"
import Alerts from './alerts/Alerts'

const Form = () => {
  const [succes, setSucces] = useState(false);
  const [warn, setWarn] = useState(false);

  var [data, setData] = useState({
    name:'',
    grade:''
  });
  const handler = (e) => {
    const {name, value} = e.target;
    setData((data) => ({...data, [name]:value}));
  }
  const addDb = () => {
    if(data.name.length === 0 || data.grade.length === 0){
        setWarn(true);
        return 0;
    }
    console.log(data);
    axios.post("http://localhost:9876/create", data)
    .then((res) => {
      setData({name:'', grade:''})
      if(res.status === 200){
          setSucces(true);
      }
      else{
        setWarn(true);
      }
    })
  }
  return (
    <div className='App'>
      <section style={{width:600, marginLeft:'30%'}}>
      {
        succes? <Alerts open={ succes } onclick={() => setSucces(false)} msg="Succesfully added " sev='success' /> :null
      }
      {
        warn ? <Alerts open={warn} sev='warning' msg="Something went wrong Try Again" onclick={() => setWarn(false)} /> : null
      }
      </section>
      <br />
      <CardContent>

        <TextField size='small' required autoFocus variant='filled' name="name" value={data.name} onChange={handler} label="Name"></TextField><br /><br />
        <TextField size='small' required type={'number'} name="grade" value={data.grade} variant='filled' onChange={handler} label="Grade"></TextField>
        <br /><br />
        <Button onClick={addDb} variant="contained">Submit</Button>

      </CardContent>
    </div>
  )
}

export default Form