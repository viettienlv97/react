import React from 'react'
import MainNavigation from './MainNavigation'
import { Outlet } from 'react-router-dom'
import classes from './Layout.module.css'

const Layout = () => {
  return (
    <>
      {/* <MainNavigation /> */}
      <main className={classes.main}>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
