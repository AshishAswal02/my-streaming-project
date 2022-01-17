import React, { useContext, useState } from 'react'
import Link from 'next/link'
// import cookie from 'js-cookie' 
import { useCookies } from 'react-cookie';
import { Button, Box, Typography, CircularProgress, Backdrop, Popper, Paper } from '@material-ui/core';
import { con1 } from '../_app'

// const res = await fetch('http://localhost:3000/api/packageInfo');

const Rough = () => {
    const [anchor, setAnchor] = useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openBackdrop, setOpenBackdrop] = useState(false);
    const [cookies, setCookies] = useCookies(['channels']);
    const [count, setCount] = useState(0);
    const c1 = useContext(con1);


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
                <Box borderRadius='borderRadius' borderColor={'#313131b8'} bgcolor={'background.paper'} border={1} p={2}>
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

            <Button onClick={handleBackdrop} > setOpenToTrue </Button>
            <Backdrop open={openBackdrop} onClick={handleClose}>
                <Paper>
                    <p>hi there</p>
                    <p>hi there</p>
                    <p>hi there</p>
                </Paper>
            </Backdrop>

            <div className="section">

            </div>
            <button onClick={() => {
                setCount(count + 1);
                setCookies('cookie key', count, { path: '/' });
                console.dir(cookie);
                // cookie.set('cookie key', 'cookie value', {expires : 1 / 24});
            }}> click here </button>

            <br />

            <button onClick={() => alert(c1)}>context api</button>
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
