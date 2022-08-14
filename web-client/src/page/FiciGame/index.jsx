import React, { Suspense, useState } from 'react'
import Spinner from '../../layout/spinner';
import { createResource } from './fetchFici';
import Screen from './screen';

const FiciGame = () => {
    const [fici, setFici] = useState('Fire')
    const resource = createResource(fici);

    return (
        <div className='border rounded-md bg-zinc-800 border-white p-4'>
            <p className='text-center text-3xl font-mono'>Fici Game</p>
            <Suspense fallback={<Spinner />}>
                <Screen resource={resource} />
            </Suspense>
            <ul className='flex justify-center gap-2 items-center'>
                <li onClick={() => setFici('Fire')} className='p-4 border hover:cursor-pointer text-2xl shadow-lg  bg-gray-900 border-white'>Fire</li>
                <li onClick={() => setFici('Rock')} className='p-4 border hover:cursor-pointer text-2xl shadow-lg  bg-gray-900 border-white'>Rock</li>
                <li onClick={() => setFici('Water')} className='p-4 border hover:cursor-pointer text-2xl shadow-lg  bg-gray-900 border-white'>Water</li>
                <li onClick={() => setFici('Air')} className='p-4 border hover:cursor-pointer text-2xl shadow-lg  bg-gray-900 border-white'>Air</li>
            </ul>
        </div>
    )
}

export default FiciGame