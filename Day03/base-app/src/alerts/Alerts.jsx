import { Alert, Collapse, IconButton } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const Alerts = (props) => {
  return (
    <Box>
        <Collapse in={props.open}>
            <Alert
                action={
                    <IconButton
                        aria-label='close'
                        size='small'
                        onClick={props.onclick}
                    >
                        <CloseIcon/>
                    </IconButton>
                }
                sx={{mb:2}}
                severity={props.sev}
            >
                { props.msg }
            </Alert>
        </Collapse>
    </Box>
  )
}

export default Alerts