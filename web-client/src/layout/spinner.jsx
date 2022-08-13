import React from 'react'
import { TbFidgetSpinner } from "react-icons/tb";

const Spinner = () => {
    return (
        <div className='h-80 flex justify-center items-center'>
            <TbFidgetSpinner className='animate-spin w-20 h-20' />
            <p className='text-center font-mono text-xl'>Loading state....</p>
        </div>
    )
}

export default Spinner