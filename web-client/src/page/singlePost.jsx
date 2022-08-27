import React, { Suspense } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../layout/spinner'

const LoadData = ({ resource }) => {
    return (
        <div className='border bg-gray-900 flex flex-col space-y-4 justify-center items-center border-white h-80 m-4'>
            <p className="p-4 font-mono text-lg"></p>
            <span className='text-9xl shadow-2xl rounded-full'></span>
        </div>
    )
}

const SinglePost = () => {
    const { id } = useParams()
    return (
        <div className='border rounded-md bg-zinc-800 border-white p-4'>
            <p className='text-center text-3xl font-mono'>Fici Game</p>
            <Suspense fallback={<Spinner />}>
                <LoadData />
            </Suspense>
        </div>
    )
}

export default SinglePost