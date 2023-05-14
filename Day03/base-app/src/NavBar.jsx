import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Button, SvgIcon } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton>
                        <Link to={'/'} style={{textDecoration:'none', color:"white"}}>
                            <SvgIcon sx={{fontSize:40}}>
                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                            </SvgIcon>
                        </Link>
                    </IconButton>
                    <Box sx={{flexGrow:1, marginLeft:'50%'}}>
                        
                        <Button variant='oulined' sx={{flexGrow:1}}>
                            <Link to={'/form'} style={{textDecoration:'none', color:"white"}}>
                                Form
                            </Link>
                            </Button>
                        <Button variant='oulined'>
                            <Link to={'/details'} style={{textDecoration:'none', color:"white"}}>
                                Details
                            </Link>
                        </Button>
                    </Box>             
                </Toolbar>
            </AppBar>
        </div>
    )
}



export default  Navbar
