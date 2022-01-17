import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
// import Cookies from "js-cookie";
import { Typography, MenuItem, Menu } from '@material-ui/core';
import Minicart from './Minicart';


const Navbar = () => {

    const router = useRouter();
    const [packages, setPackages] = useState([]);
    const [LoggedInContent, setLoggedInContent] = useState(false);
    // const [openBackdrop, setOpenBackdrop] = useState(false);
    const [anchorElMenu, setAnchorElMenu] = useState(null);
    const [cookies] = useCookies();
    const [cookieData, setCookieData] = useState({});


    const handleLogout = () => {
        sessionStorage.setItem('restrictAccess', 'on');
        toast.success('Logged out', { autoClose: 2000 });
        router.push('/');
    }

    

    const handleClickOnMenu = e => {
        setAnchorElMenu(anchorElMenu ? null : e.currentTarget);
    }

    useEffect(() => {
        setLoggedInContent(sessionStorage.getItem('restrictAccess') === 'on' ? true : false);
    });


    // const [key, setKey] = useState();
    // const [value, setValue] = useState();
    useEffect(() => {
        fetch('/api/packageInfo')
            .then(res => res.json())
            .then(data => {
                setPackages(data);
            });
    }, []);

    useEffect(() => {
        setCookieData(
            document.cookie
                .split(';')
                .map(i => i.split('='))
                .reduce((acc, [key, value]) =>
                    ({ ...acc, [key.trim()]: decodeURIComponent(value) }), {})
        )
    }, [cookies]);

    function isActive(route) {
        return route == router.pathname ? 'active' : '';
    }



    return (
        <>
            <nav className='nav'>
                <ul>
                    <Link href="/">
                        <li className={isActive('/'), 'underline'}>
                            <Typography>Home</Typography>
                        </li>
                    </Link>
                    <Link href='/src/Rough'>
                        <li className={isActive('/src/Rough'), 'underline'}>
                            <Typography>Rough</Typography>
                        </li>
                    </Link>
                    {
                        LoggedInContent &&
                        <Link href='/src/auth/Login'>
                            <li className={isActive('/src/auth/Login'), 'underline'}>
                                <Typography>Login</Typography>
                            </li>
                        </Link>
                    }
                    {
                        LoggedInContent &&
                        <Link href='/src/auth/Signup'>
                            <li className={isActive('/src/auth/Signup'), 'underline'}>
                                <Typography sx={{ TransitionEvent: '0.5s' }}>SignUp</Typography>
                            </li>
                        </Link>
                    }
                    <Link href='/src/Details'>
                        <li className={isActive('/src/Details'), 'underline'}>
                            <Typography>Details</Typography>
                        </li>
                    </Link>
                    {
                        // !LoggedInContent &&
                        <li className={isActive(''), 'underline'}>
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
                        // !LoggedInContent &&
                        <li className='underline' onClick={handleClickOnMinicart}>
                            <Minicart cookieData = {cookieData} />
                        </li>}










                    {
                        !LoggedInContent &&
                        <li className='underline' onClick={handleLogout}>
                            <Typography>Logout</Typography>
                        </li>
                    }
                </ul>
            </nav>
        </>
    )
}

export default Navbar
