import React, { useState } from 'react'
import {Button, Menu, MenuItem , Typography} from '@material-ui/core';
// import { ToggleButton } from '@mui/material';


const Rough = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    
    const handleOpenMenu = e => {
        setAnchorEl(e.currentTarget);
    }
    
    const handleMenuClose = () => {
        setAnchorEl(null);
    }


    return (
        <div>
            <Button aria-controls='menu' onClick={handleOpenMenu} color = "secondary" varient = "outlined">Hey there</Button>
            <Menu onClick={handleMenuClose} id = 'menu' anchorEl={anchorEl} open = {Boolean(anchorEl)}>
                <MenuItem onClick={handleMenuClose}>My Account afafe</MenuItem>
                <MenuItem onClick={handleMenuClose}>My Account </MenuItem>
                <MenuItem onClick={handleMenuClose}>My Account </MenuItem>
                <MenuItem onClick={handleMenuClose}>My Account </MenuItem>
            </Menu>
        </div>
    )
}

export default Rough
