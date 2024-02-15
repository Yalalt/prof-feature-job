import { Skeleton } from '@mantine/core';
import React from 'react'

const skeletons = new Array(10).fill(true);

export default function Loading() {
  return (
    <div className='flex flex-col gap-5'>
        <h1>People</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {
                skeletons.map((skeleton, index) => (
                    <div key={index} className='flex flex-col items-center w-full h-full rounded bg-slate-100 dark:bg-slate-700 p-5 gap-2'>
                        <Skeleton height={100} circle mb={'xl'} />
                        <Skeleton height={8} width={'50%'} />
                        <Skeleton height={8} width={'50%'} mt={6} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}
