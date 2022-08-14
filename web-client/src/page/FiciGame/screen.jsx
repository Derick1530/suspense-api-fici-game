import React from 'react'

const Screen = (props) => {
    const { resource } = props;
    const ficiData = resource.data.read()
    const ficiName = ficiData[0].name
    const ficiSymbol = ficiData[0].symbol

    return (
        <div className='border bg-gray-900 flex flex-col space-y-4 justify-center items-center border-white h-80 m-4'>
            <p className="p-4 font-mono text-lg">{ficiName}</p>
            <span className='text-9xl shadow-2xl rounded-full'>{ficiSymbol}</span>
        </div>
    )
}

export default Screen