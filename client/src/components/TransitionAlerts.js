import * as React from 'react';
import {
    Box,
    Alert,
    IconButton,
    Collapse,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close.js';


export default function TransitionAlerts(props) {

    return (

        <Box style={{ margin: '0 auto' }} sx={{ width: '80%' }}>
            <Collapse in={props.open}>
                <Alert size="medium"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                        /* onClick={() => {
                          setOpen(false);
                        }} */
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    Message submitted!
                </Alert>
            </Collapse>

        </Box>
    );
}
