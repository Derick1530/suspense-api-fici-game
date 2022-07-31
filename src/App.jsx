import React, { lazy, Suspense } from 'react'
import Spinner from './layout/spinner';
const FiciGame = lazy(() => import('./page/FiciGame'));

const App = () => {
    return (
        // Show a spinner while the profile is loading
        <div className='mx-auto w-4/12 p-8 flex justify-center self-center shadow-xl rounded-md bg-gray-900'>
            <Suspense fallback={<Spinner />}>
                <FiciGame />
            </Suspense>
        </div>
    )
}

export default App
