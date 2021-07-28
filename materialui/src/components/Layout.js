import React from 'react';
import { makeStyles } from '@material-ui/core';     // import makeStyles

const useStyles = makeStyles({                      // create and declare styles
    pages: {
        background: '#d5d5d5',
        width: '100%'
    }
})

export default function Layout({ children }) {      // pass the children under Layout tag in app.js to here 

    const styles = useStyles()                      // assign useStyles to styles to use elsewhere

    return (

        <div>

            <div className={styles.pages}>          {/* use those styles in return*/}

                {children}

            </div>
        </div>
    )
}