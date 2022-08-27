import React, { Suspense } from 'react'
import Spinner from '../layout/spinner';

import Screen from './screen';

const FiciGame = () => {
    return (
        <div className='border rounded-md bg-zinc-800 border-white p-4'>
            <p className='text-center text-3xl font-mono'>Fici Game</p>
            <Suspense fallback={<Spinner />}>
                <Screen />
            </Suspense>
        </div>
    )
}

export default FiciGame