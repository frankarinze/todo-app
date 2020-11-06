import React,{useState,useContext,useEffect} from 'react'
import {TaskListContext} from '../../context/TaskListContext'
import ReactDOM from "react-dom";



const Search = ({handleChange,}) => {
  const { tasks } = useContext(TaskListContext);




  return (
    <div className='header'>
        {/* {console.log(search)} */}
    <input type='search' placeholder='find todo' onChange={handleChange}></input>
    </div>
  )
}

export default Search