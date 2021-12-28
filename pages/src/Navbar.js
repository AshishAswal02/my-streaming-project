import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {Typography, MenuItem, Menu } from '@material-ui/core';



const Navbar = () => {

    const router = useRouter();

    // useEffect(() => {
    //     console.log(sessionStorage.getItem('restrictAccess') + "  is flag");
    // })

    function isActive(route) {
        return route == router.pathname ? 'active' : '';
    }

    const [anchorEl, setAnchorEl] = useState(null);
    
    const handleOpenMenu = e => {
        setAnchorEl(e.currentTarget);
    }
    
    const handleMenuClose = () => {
        setAnchorEl(null);
    }

    return <>
        <nav className='nav'>
            <ul>
                <li className={isActive('/auth/Login')}>
                    <Link href='/auth/Login'>
                        <Typography>Login</Typography>
                    </Link>
                </li>
                <li className={isActive('/auth/Signup')}>
                    <Link href='/auth/Signup'>
                        <Typography>SignUp</Typography>
                    </Link>
                </li>
                <li className={isActive('/src/Details')}>
                    <Link href='/src/Details'>
                        <Typography>Details</Typography>
                    </Link>
                </li>
                <li className={isActive('/src/Rough')}>
                    <Link href='/src/Rough'>
                        <Typography>Rough</Typography>
                    </Link>
                </li>
                <li className={isActive('/')}>
                    <Link href="/">
                        <Typography>Home</Typography>
                    </Link>
                </li>
                <li className={isActive('')}>
                    <Typography aria-controls='menu' onClick={handleOpenMenu}>Steam</Typography>
                    <Menu onClick={handleMenuClose} id='streamMenu' anchorEl={anchorEl} open={Boolean(anchorEl)}>
                        <Link href='/offers/Choice'>
                            <MenuItem onClick={handleMenuClose}>Choice</MenuItem>
                        </Link>
                        <Link href='/offers/Entertainment'>
                            <MenuItem onClick={handleMenuClose}>Entertainment</MenuItem>
                        </Link>
                        <Link href='/offers/Premier'>
                            <MenuItem onClick={handleMenuClose}>Premier</MenuItem>
                        </Link>
                        <Link href='/offers/Ultimate'>
                            <MenuItem onClick={handleMenuClose}>Ultimate</MenuItem>
                        </Link>
                    </Menu>
                </li>
            </ul>
        </nav>

    </>
}

export default Navbar
