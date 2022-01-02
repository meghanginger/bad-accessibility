import * as React from "react"
import { Link } from "gatsby"
import Nav from "../components/nav";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home text-2xl" to="/">
        {title} 
      </Link>
    )
  }

  return (
    <div className="global-wrapper bg-cream min-h-screen" data-is-root-path={isRootPath}>
      <header className="global-header bg-berry">
        <div className="p-1 p-4 container mx-auto">
          {header}
          <Nav />
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-pink relative bottom-0">
        <div className="p-1 py-4 container mx-auto ">
          Sign up for our newsletter <Link to="/newsletter">HERE</Link>!
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.w3.org/TR/WCAG21/">no accessibility in mind :)</a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
