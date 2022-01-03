import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify';
import { useRouter } from 'next/router'
import { Typography, MenuItem, Menu } from '@material-ui/core';

const Navbar = () => {
    
    const router = useRouter();
    const [packages, setPackages] = useState([]);
    const [LoggedInContent, setLoggedInContent] = useState(false);

    const handleLogout = () => {
        // alert('logout clicked')
        sessionStorage.setItem('restrictAccess', 'on');
        toast.success('Logged out', { autoClose: 2000 });
        router.push('/');
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

    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenMenu = e => {
        setAnchorEl(e.currentTarget);
        // console.dir(packages)
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
    }

    return (

        <>
            <nav className='nav'>
                <ul>
                    <li className={isActive('/')}>
                        <Link href="/">
                            <Typography>Home</Typography>
                        </Link>
                    </li>
                    <li className={isActive('/src/Rough')}>
                        <Link href='/src/Rough'>
                            <Typography>Rough</Typography>
                        </Link>
                    </li>
                    {
                        LoggedInContent &&
                        <li className={isActive('/auth/Login')}>
                            <Link href='/auth/Login'>
                                <Typography>Login</Typography>
                            </Link>
                        </li>
                    }
                    {
                        LoggedInContent &&
                        <li className={isActive('/auth/Signup')}>
                            <Link href='/auth/Signup'>
                                <Typography>SignUp</Typography>
                            </Link>
                        </li>
                    }

                    <li className={isActive('/src/Details')}>
                        <Link href='/src/Details'>
                            <Typography>Details</Typography>
                        </Link>
                    </li>
                   

                    {
                        // !LoggedInContent &&
                        <li className={isActive('')}>
                            <Typography aria-controls='menu' onClick={handleOpenMenu}>Steam</Typography>
                            <Menu onClick={handleMenuClose} id='streamMenu' anchorEl={anchorEl} open={Boolean(anchorEl)}>



                                {packages.map(p => (
                                    <Link href={'/offers/' + p.id} key={p.id}>
                                        <MenuItem onClick={handleMenuClose}>{p.name}</MenuItem>
                                    </Link>
                                    // console.log(p + " is the data");
                                ))}

                                {
                                    // packages.map( package => {
                                    //     <Link href={'api/offers/' + package.id} key={pacakge.id}>
                                    //         <Typography>{package.name}</Typography>
                                    //     </Link>
                                    // })
                                }

                                {/* <Link href='/offers/Choice'>
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
                            </Link> */}
                            </Menu>
                        </li>
                    }
                    {
                        !LoggedInContent &&
                        <li onClick={handleLogout}>
                            <Typography>Logout</Typography>
                        </li>
                    }
                </ul>
            </nav>
        </>
    )
}

export default Navbar


export async function getStaticProps() {

    //    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    //    const data = await res.json();
    //     console.log(data + " prerenderd data");
    return {
        props: { data: '2' }
    };
};