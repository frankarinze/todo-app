import React from 'react'
import Search from './search/Search'
import { Link, useHistory } from "react-router-dom";


const Header = () => {
  return (
    <div className='header'>
       <Link className="btn btn-primary" to="/add">Add Todo</Link>
    </div>
  )
}

export default Header