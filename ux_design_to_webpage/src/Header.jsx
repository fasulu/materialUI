import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({

    typographyStyle: {
        flex: 1
        
    }

}));

const Header = () => {

    const classes = useStyles();

    return (
       <AppBar position='static'>
           <Toolbar>
               <Typography className={classes.typographyStyle}>
                   Nile.com :) You Are Next 
               </Typography>
               <AcUnitOutlinedIcon/>   
           </Toolbar>
       </AppBar>
    )
}

export default Header;