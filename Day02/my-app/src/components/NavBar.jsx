import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Basics from './Basics'
import State from "./State"
import SigleUseState from './SingleUseState'
import TableData from './TableData'

const NavBar = () => {
  return (
    <div>
        <AppBar>
            <Container>
                <Toolbar>
                    <Link to={"/"} style={{margin:"1rem", textDecoration:"none"}}>
                        <Typography variant='h6'>Home</Typography>
                    </Link>
                    <Link to={"/state"} style={{margin:"1rem", textDecoration:"none"}}>
                        <Typography variant='h6'>State</Typography>
                    </Link>
                    <Link to={"/table"} style={{margin:"1rem", textDecoration:"none"}}>
                        <Typography variant='h6'>Data Fetch</Typography>
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
        <br /><br /><br /><br />
        <Routes>
            <Route path='/' element={<SigleUseState/>}/>
            <Route path='/state' element={<State/>} />
            <Route path='/table' element={<TableData/>} />

        </Routes>
    </div>
  )
}

export default NavBar
