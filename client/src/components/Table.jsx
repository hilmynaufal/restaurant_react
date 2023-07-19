import React from 'react'

export const Table = ({ tabelStatus, tableName, reserverName, chairCount }) => {
    var tableColor;
    switch (tabelStatus) {
        case "Reserved":
            tableColor = 'border-amber-400'
            break;
        case "Checked-in":
            tableColor = 'border-amber-600'
            break;
        default:
            tableColor = 'border-green-400'
            break;
    }
    const color = `bg-white border-solid rounded-3xl ${tableColor} border-8 px-2 py-2`;
    return (
        <div className='flex flex-col gap-1'>
            <div className='flex flex-row mx-4 gap-2 justify-center'>
                {[...Array(chairCount)].map((x, i) => <div className='bg-gray-300 w-10 h-2 rounded-full' />)}
            </div>
            <button className={color}>
                <div className='flex flex-col'>
                    <h1 className='text-black text-sm font-semibold'>{tableName}</h1>
                    <p className='text-black text-xs'>{reserverName ?? tabelStatus}</p>
                </div>
            </button>
            <div className='flex flex-row mx-4 gap-2 justify-center'>
                {[...Array(chairCount)].map((x, i) => <div className='bg-gray-300 w-10 h-2 rounded-full' />)}
            </div>
        </div>

    )
}
