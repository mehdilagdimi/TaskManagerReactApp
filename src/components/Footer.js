import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <p> Task Manager Copyright &copy; 2022</p>
        {/* <a href='/about'>About</a> */}
        <Link to='/about'>About</Link>
        </footer>
  )
}

export default Footer