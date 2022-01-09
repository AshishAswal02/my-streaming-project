import React, { useState } from 'react'
import Link from 'next/link'
import { Button, Box, Typography, CircularProgress , Backdrop , Popper, Paper } from '@material-ui/core';
// import { ToggleButton } from '@mui/material';

    // const res = await fetch('http://localhost:3000/api/packageInfo');

const Rough = () => {
    const [anchor, setAnchor] = useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openBackdrop, setOpenBackdrop] = useState(false);


    const openPopover = (e) => {
        setAnchor(e.currentTarget);
    }

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);

    const handleBackdrop = () => {
        setOpenBackdrop(!openBackdrop);
    }

    const handleClose = () => {
        setOpenBackdrop(!openBackdrop);
    }



    return (
        <>

            <button type="button" onClick={handleClick}>
                Toggle Popper
            </button>
            <Popper open={open} anchorEl={anchorEl}>
                <Box  borderRadius='borderRadius' borderColor={'#313131b8'} bgcolor={'background.paper'} border={1} p={2}>
                    <p>The content of the Popper.</p>
                    <p>The content of the Popper.</p>
                    <p>The content of the Popper.</p>
                    <p>The content of the Popper.</p>
                </Box>
            </Popper>

            <Button variant='contained' color='red' onClick={openPopover}> Pop me </Button>
            <Popper
                open={Boolean(anchor)}
                anchorEl={anchor}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}
                onClose={() => setAnchor(null)}
            >
                <Paper style={{

                    width: '30rem',
                    height: '30rem',
                }
                }>
                    <p>hi</p>
                    <p>hi</p>
                    <p>hi</p>
                    <p>hi</p>
                    <p>hi</p>

                </Paper>
            </Popper>

                <Button onClick = {handleBackdrop} > setOpenToTrue </Button>
                <Backdrop open = {openBackdrop} onClick={handleClose}>
                <Paper>
                    <p>hi there</p>
                    <p>hi there</p>
                    <p>hi there</p>
                </Paper>
                </Backdrop>
            
                <div className="section">
                    <Link style={{background:'red'}} href="">
                        link
                    </Link>
                </div>


            {/* <Popover
                open={Boolean(anchor)}
                anchorEl={anchor}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}
                onClose={() => setAnchor(null)}
            >
                <Paper style={{

                    width: '30rem',
                    height: '30rem',
                }
                }>
                    <p>hi</p>
                    <p>hi</p>
                    <p>hi</p>
                    <p>hi</p>

                </Paper>
            </Popover> */}
        </>
    )
}

export default Rough
