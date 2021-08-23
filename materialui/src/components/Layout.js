import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { format } from 'date-fns'     // Learn more on how to format date using this module https://www.npmjs.com/package/date-fns

import { AppBar, makeStyles, Toolbar } from '@material-ui/core';     // these are the core items to style

import Drawer from '@material-ui/core/Drawer';      // to create Drawer

import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';          // these are the core items to use with list
import { ListItem } from '@material-ui/core';
import { ListItemIcon } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { SubjectOutlined, SubjectRounded } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';

const drawerWidth = 240


// learn more on avatar https://www.youtube.com/watch?v=gEbSx5CCgSc&list=PL4cUxeGkcC9gjxLvV4VEkZ6H6H4yWuS58&index=17

const useStyles = makeStyles((theme) => {             // more on styles arrow function using theme
    return {
        pages: {
            background: '#d5d5d5',
            width: '100%',
            //padding:20   //or use theme.spacing
            padding: theme.spacing(3)       // base theme is 8px and times 3 equal to 24px
        },
        drawer: {
            width: drawerWidth
        },
        root: {
            display: 'flex'
        },
        drawerPaper: {
            width: drawerWidth,
            background: '#f9f9f9'
        },
        activePage: {
            background: '#d5d5d5'
        },
        title: {
            //padding: 20   //or use theme.spacing
            padding: theme.spacing(3)       // base theme is 8px and times 3 equal to 24px
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`  // fix appbar width after is 100% - above mentioned drawerwidth
        },
        appbardate: {
            flexGrow: 1                             // use this style to push date in left and other typography entries to right
        },
        avatarmargin: {
            marginLeft: theme.spacing(2)            // this will leave 16px(8px base px time 2)
        },
        toolbar: theme.mixins.toolbar               // use collection of mixins used by materialUI
    }
})


export default function Layout({ children }) {      // pass the children under Layout tag in app.js to here 

    const styles = useStyles()                      // assign useStyles to styles to use elsewhere
    const history = useHistory()                    // to change pages
    const location = useLocation()                  // this is to know what is the current page on brower

    const menuItems = [
        {
            text: 'Name List',
            icon: <SubjectOutlined color='secondary' />,
            path: '/'
        },
        {
            text: 'Create Address',
            icon: <SubjectRounded color='secondary' />,
            path: '/create'
        }
    ]
    return (

        <div className={styles.root}>

            <AppBar className={styles.appbar}        //* create appbar to show application navigation's bar *//
                elevation={0}                       //* this will remove the shadow like elevation effect under the appbar *//
            >
                <Toolbar>
                    <Typography className={styles.appbardate}>
                        Today is the {format(new Date(), 'dd MMMM Y')}
                    </Typography>
                    <Typography> User Name </Typography>
                    <Avatar className={styles.avatarmargin}
                        src="/img_avatar/appa-avatar.png" />
                </Toolbar>
            </AppBar>
            <Drawer                                 //* create drawer to show permanently on left and over-ride materialUI paper classes by our own drawerPaper styles
                className={styles.drawer}
                variant='permanent'
                anchor='left'
                classes={{ paper: styles.drawerPaper }}>

                <div>
                    <Typography variant='h5' className={styles.title} >
                        Address
                    </Typography>
                </div>


                <List>              {/* adding menulist direct into  drawer - method one*/}
                    <ListItem button>
                        <ListItemText primary="List Item" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Add New Item" />
                    </ListItem >
                    <ListItem button>
                        <ListItemText primary="Delete Item" />
                    </ListItem>
                </List>

                <List>              {/* adding menulist in const and using it into drawer - method two*/}
                    {menuItems.map(item => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => history.push(item.path)}     // onclick change the page
                            className={location.pathname == item.path ? styles.activePage : null}   // check current page path and show activepage color
                        >
                            <ListItemIcon> {item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>

            </Drawer>


            <div className={styles.pages}>          {/* use those styles in return*/}
                <div className={styles.toolbar}></div>  {/* this will bring content page below the appbar */}
                {children}

            </div>
        </div>
    )
}