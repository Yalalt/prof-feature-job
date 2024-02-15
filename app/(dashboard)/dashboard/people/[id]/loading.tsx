import { Skeleton } from '@mantine/core';
import React from 'react';

export default function Loading() {
  return (
    <div className='flex flex-col gap-5'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        Loading...
      </div>
    </div>
  );
}
