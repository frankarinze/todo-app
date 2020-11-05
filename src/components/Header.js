import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <h3>Todo App</h3>
      <input type='serach' placeholder='find todo' onChange={e => console.log(e.target.value)}></input>
    </div>
  )
}

export default Header