import React from 'react'
import { TbFidgetSpinner } from "react-icons/tb";

const Spinner = () => {
    return (
        <div className='h-80 flex justify-center items-center'>
            <TbFidgetSpinner className='animate-spin w-10 h-10' />
        </div>
    )
}

export default Spinner