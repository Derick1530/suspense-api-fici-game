import React, { lazy, Suspense } from 'react'
import FiciGame from './page/FiciGame';

const App = () => {
    return (
        // Show a spinner while the profile is loading
        <div className='mx-auto w-4/12 p-8 flex justify-center self-center shadow-xl rounded-md bg-gray-900'>
            <FiciGame />
        </div>
    )
}

export default App
