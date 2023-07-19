import React from 'react'
import { useState } from 'react'

export const CheckinSide = () => {

    const [search, setSearch] = useState('')
    return (
        <div className='bg-white flex flex-col p-10 gap-6 rounded-lg w-96'>
            <input className='w-full bg-gray-200 text-gray-400 p-2' value={search} onChange={(e) => setSearch(e.target.value)}></input>
            <div className='flex flex-row gap-2'>
                <button className='bg-amber-500 text-xs px-2 py-1'>Reserved (6)</button>
                <button className='bg-gray-200 text-xs px-2 py-1 text-gray-400'>Checked In (3)</button>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-black text-xs font-semibold'>11.30am</p>
                <button className='bg-gray-200 text-black'>
                    <div className='flex flex-row justify-between items-center p-2'>
                        <div className='flex flex-row gap-2 items-center'>
                            <div className='rounded-full bg-gray-300 px-3 py-1'>T1</div>
                            <p className='text-sm'>John Cienna</p>
                        </div>
                        <p className='text-xs font-extralight'>5 person</p>
                    </div>
                </button>
                <button className='bg-white text-black'>
                    <div className='flex flex-row justify-between items-center p-2'>
                    <div className='flex flex-row gap-2 items-center'>
                            <div className='rounded-full bg-gray-300 px-3 py-1'>T1</div>
                            <p className='text-sm'>John Cienna</p>
                        </div>
                        <p className='text-xs font-extralight'>5 person</p>
                    </div>
                </button>
                <button className='bg-white text-black'>
                    <div className='flex flex-row justify-between items-center p-2'>
                    <div className='flex flex-row gap-2 items-center'>
                            <div className='rounded-full bg-gray-300 px-3 py-1'>T1</div>
                            <p className='text-sm'>John Cienna</p>
                        </div>
                        <p className='text-xs font-extralight'>5 person</p>
                    </div>
                </button>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-black text-xs font-semibold'>11.30am</p>
                <button className='bg-gray-200 text-black'>
                    <div className='flex flex-row justify-between items-center p-2'>
                        <div className='flex flex-row gap-2 items-center'>
                            <div className='rounded-full bg-gray-300 px-3 py-1'>T1</div>
                            <p className='text-sm'>John Cienna</p>
                        </div>
                        <p className='text-xs font-extralight'>5 person</p>
                    </div>
                </button>
                <button className='bg-white text-black'>
                    <div className='flex flex-row justify-between items-center p-2'>
                    <div className='flex flex-row gap-2 items-center'>
                            <div className='rounded-full bg-gray-300 px-3 py-1'>T1</div>
                            <p className='text-sm'>John Cienna</p>
                        </div>
                        <p className='text-xs font-extralight'>5 person</p>
                    </div>
                </button>
                <button className='bg-white text-black'>
                    <div className='flex flex-row justify-between items-center p-2'>
                    <div className='flex flex-row gap-2 items-center'>
                            <div className='rounded-full bg-gray-300 px-3 py-1'>T1</div>
                            <p className='text-sm'>John Cienna</p>
                        </div>
                        <p className='text-xs font-extralight'>5 person</p>
                    </div>
                </button>
            </div>
            <div className='flex flex-row gap-4 justify-evenly'>
                <button className='border border-solid border-amber-500 text-xs text-amber-500 p-2 w-full'>Cancel</button>
                <button className='bg-amber-500 text-xs p-2 text-white w-full'>Check-in</button>
            </div>
        </div>
    )
}
