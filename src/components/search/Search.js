import React,{useState,useContext,useEffect} from 'react'
import ReactDOM from "react-dom";

const Search = ({handleChange,}) => {
  return (
    <div className='header'>
        {/* {console.log(search)} */}
    <input type='search' placeholder='find todo' onChange={handleChange}></input>
    </div>
  )
}

export default Search