import React from 'react'
import { useSession } from 'next-auth/client'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  appbar: {
    margin: theme.spacing(0, 0, 2, 0),
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  toolbar: {
    justifyContent: 'space-between',
  }
}))

const MainMenu = () => {
  const classes = useStyles()
  const [session, loading] = useSession()

  return (
    <AppBar color="transparent" className={classes.appbar} position="static">
      <Toolbar className={classes.toolbar}>
        <Button href="/">
          Your site
        </Button>
        <Grid>
          {!session && <Button href="/api/auth/signin">Sign in</Button>}
          {session && <>
            Signed in as {session.user.email}
            <Button href="/api/auth/signout">Sign out</Button>
          </>}
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default MainMenu