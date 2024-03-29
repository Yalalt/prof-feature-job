'use client';
import { Pagination } from '@mantine/core';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function PaginationContainer({ total, value }: { total: number; value: number }) {
  const [activePage, setActivePage] = useState(value);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    const page = searchParams.get('page');
    if(page) {
        const num = parseInt(page);
        setActivePage(num);
    }
  }, [activePage, searchParams]);

  function handleChange(page: number) {
    setActivePage(page);
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    replace(`${pathname}?${params.toString()}`);
  }

  return <Pagination total={total} onChange={handleChange} value={activePage} />;
}
