'use client';

import { User } from '@/lib/types';
import { Table } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

export default function UsersTable({ users }: { users: User[] }) {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Username</Table.Th>
          <Table.Th>Firstname</Table.Th>
          <Table.Th>Lastname</Table.Th>
          <Table.Th>Job Title</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {users.map((user, idx) => (
          <Table.Tr key={idx}>
            <Table.Td>
              <Link className='text-blue-500 hover:text-blue-700' href={`/dashboard/people/${user.id}`}>
                {user.name}
              </Link>
            </Table.Td>
            <Table.Td>{user.firstName}</Table.Td>
            <Table.Td>{user.lastName}</Table.Td>
            <Table.Td>{user.jobTitle}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}
