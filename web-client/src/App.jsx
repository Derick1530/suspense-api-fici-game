import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import FiciGame from './page'
import SinglePost from './page/singlePost'

const App = () => {
    return (
        // Show a spinner while the profile is loading
        <div className='mx-auto w-full md:w-2/5 p-4 shadow-xl rounded-md bg-gray-900'>
            <Routes>
                <Route path='/' element={
                    <FiciGame />
                } />
                <Route path='/:id' element={
                    <SinglePost />
                } />
            </Routes>
        </div>
    )
}

export default App
