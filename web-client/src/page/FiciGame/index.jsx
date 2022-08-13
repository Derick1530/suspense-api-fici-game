import React, { useState } from 'react'

const FiciGame = () => {
    const [fici, setFici] = useState('🔥')
    return (
        <div className='border rounded-md bg-zinc-800 border-white p-4'>
            <p className='text-center text-3xl font-mono'>Fici Game</p>
            <div className='border bg-gray-900 flex justify-center items-center border-white h-80 m-4'>
                <span className='text-9xl shadow-2xl rounded-full'>{fici}</span>
            </div>
            <ul className='flex justify-center gap-2 items-center'>
                <li onClick={() => setFici('🔥')} className='p-4 border text-2xl shadow-lg  bg-gray-900 border-white'>🔥</li>
                <li onClick={() => setFici('🪨')} className='p-4 border text-2xl shadow-lg  bg-gray-900 border-white'>🪨</li>
                <li onClick={() => setFici('💧')} className='p-4 border text-2xl shadow-lg  bg-gray-900 border-white'>💧</li>
                <li onClick={() => setFici('🌀')} className='p-4 border text-2xl shadow-lg  bg-gray-900 border-white'>🌀</li>

            </ul>
        </div>
    )
}

export default FiciGame