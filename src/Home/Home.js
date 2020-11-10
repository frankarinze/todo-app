import React, { useState, useEffect, useContext } from 'react'
import Search from '../components/search/Search'
import TodoList from '../components/TodoList'
import { useSearch } from '../hooks/useSearch'
import Header from '../components/Header'


const Home = () => {

    return (
        <>
        <Header/>
        <TodoList/>
        </>
    )
}


export default Home

