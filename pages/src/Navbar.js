import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify';
import { useRouter } from 'next/router'
import { Typography, Button, Paper, Popper, Box, MenuItem, Menu } from '@material-ui/core';


const Navbar = (props) => {

    const router = useRouter();
    const [packages, setPackages] = useState([]);
    const [LoggedInContent, setLoggedInContent] = useState(false);
    // const [openBackdrop, setOpenBackdrop] = useState(false);
    const [anchorElMenu, setAnchorElMenu] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleLogout = () => {
        sessionStorage.setItem('restrictAccess', 'on');
        toast.success('Logged out', { autoClose: 2000 });
        router.push('/');
    }

    const handleClickOnMinicart = e => {
        setAnchorEl(anchorEl ? null : e.currentTarget);
    };

    const handleClickOnMenu = e => {
        setAnchorElMenu(anchorElMenu ? null: e.currentTarget);
    }

    useEffect(() => {
        setLoggedInContent(sessionStorage.getItem('restrictAccess') === 'on' ? true : false);
    });



    useEffect(() => {
        fetch('/api/packageInfo')
            .then(res => res.json())
            .then(data => {
                setPackages(data);
            })
    }, []);

    function isActive(route) {
        return route == router.pathname ? 'active' : '';
    }



    return (
        <>
            <nav className='nav'>
                <ul>
                    <Link href="/">
                        <li className={isActive('/')}>
                            <Typography>Home</Typography>
                        </li>
                    </Link>
                    <Link href='/src/Rough'>
                        <li className={isActive('/src/Rough')}>
                            <Typography>Rough</Typography>
                        </li>
                    </Link>
                    {
                        LoggedInContent &&
                        <Link href='/src/auth/Login'>
                            <li className={isActive('/src/auth/Login')}>
                                <Typography>Login</Typography>
                            </li>
                        </Link>
                    }
                    {
                        LoggedInContent &&
                        <Link href='/src/auth/Signup'>
                            <li className={isActive('/src/auth/Signup')}>
                                <Typography sx={{TransitionEvent: '0.5s'}}>SignUp</Typography>
                            </li>
                        </Link>
                    }
                    <Link href='/src/Details'>
                        <li className={isActive('/src/Details')}>
                            <Typography>Details</Typography>
                        </li>
                    </Link>
                    {
                        !LoggedInContent &&
                        <li className={isActive('')}>
                            <>
                                <Typography aria-controls='stream-menu' aria-haspopup='true'
                                onClick={handleClickOnMenu} >Steam</Typography>

                                <Menu disableAutoFocusItem
                                    PaperProps={{
                                        style: {
                                            transform: 'translateX(-25%) translateY(8%)',
                                        }
                                    }}
                                    MenuListProps={{
                                        style: {
                                            padding: 0,
                                        },
                                    }}
                                    id='stream-menu'
                                    onClick={handleClickOnMenu}
                                    anchorEl={anchorElMenu}
                                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                                    // transformOrigin={{ vertical: "top", horizontal: "center" }} 
                                    open={Boolean(anchorElMenu)}>

                                    {packages.map(p => (
                                        <Link href={'/src/offers/' + p.id} key={p.id}>
                                            <MenuItem onClick={handleClickOnMenu}>{p.name}</MenuItem>
                                        </Link>
                                    ))}
                                </Menu>
                            </>
                        </li>
                    }
                    {
                        !LoggedInContent &&
                        <li onClick={handleLogout}>
                            <Typography>Logout</Typography>
                        </li>
                    }
                    <li onClick={handleClickOnMinicart}>
                        <Typography onClick={handleClickOnMinicart}>
                            Toggle Popper
                        </Typography>
                        <Popper onClick={handleClickOnMinicart} open={Boolean(anchorEl)} anchorEl={anchorEl}>
                            <Box borderRadius='borderRadius' borderColor={'#313131b8'} bgcolor={'background.paper'} border={1} p={3}>
                                <p>The content of the Popper.</p>
                                <p>The content of the Popper.</p>
                                <p>The content of the Popper.</p>
                                <p>The content of the Popper.</p>
                            </Box>
                        </Popper>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
