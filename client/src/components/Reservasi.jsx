import React, { useState } from 'react'
import { CheckinSide } from './CheckinSide'
import { Table } from './Table'

export const Reservasi = () => {

    return (
        <div className='flex bg-gray-100 items-center justify-center p-40'>
            <div className='flex flex-row gap-8 justify-center'>
                <div className='flex flex-col gap-8 justify-between'>
                    <h1 className='text-black font-semibold'>Choose Tables</h1>
                    <div className='flex flex-col gap-y-16 justify-evenly'>
                        <div className='flex flex-row gap-12 justify-between'>
                            <Table tabelStatus={"Reserved"} tableName={"T1"} reserverName={"John Cienna 11.30am"} chairCount={3} />
                            <Table tabelStatus={"Checked-in"} tableName={"T2"} chairCount={1} />
                            <Table tabelStatus={"Reserved"} tableName={"T3"} reserverName={"Cateryne 11.30am"} chairCount={2} />
                        </div>
                        <div className='flex flex-row gap-12 justify-between'>
                            <Table tabelStatus={"Checked-in"} tableName={"T4"} chairCount={1} />
                            <Table tabelStatus={"Free"} tableName={"T5"} chairCount={2} />
                            <Table tabelStatus={"Checked-in"} tableName={"T6"} chairCount={3} />
                        </div>
                        <div className='flex flex-row gap-12 justify-between'>
                            <Table tabelStatus={"Reserved"} tableName={"T7"} reserverName={"Donald 11.30am"} chairCount={2} />
                            <Table tabelStatus={"Free"} tableName={"T8"} chairCount={3} />
                            <Table tabelStatus={"Free"} tableName={"T9"} chairCount={1} />
                        </div>
                    </div>

                    <div className='flex flex-row items-center bg-white text-black gap-10 p-4 rounded-md'>
                        <p className='text-sm font-medium'>Table</p>
                        <div className='flex flex-row items-center gap-2'>
                            <div className='rounded-sm bg-green-400 w-2 h-2'></div>
                            <p className='text-xs'>Free: 3</p>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <div className='rounded-sm bg-amber-400 w-2 h-2'></div>
                            <p className='text-xs'>Reserved: 3</p>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <div className='rounded-sm bg-amber-600 w-2 h-2'></div>
                            <p className='text-xs'>Checked-in: 3</p>
                        </div>
                    </div>
                </div>
                <CheckinSide />
            </div>

        </div>
    )
}
