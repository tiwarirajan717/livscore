import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit"></IconButton>
                <Typography>Cric Liv Score</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
