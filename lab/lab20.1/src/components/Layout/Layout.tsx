import { Fragment, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

import MainNavigation from './MainNavigation'

type Props = {
  children?: ReactNode
}

const Layout = (props: Props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      {/* <main>{props.children}</main> */}
    </Fragment>
  )
}

export default Layout
