import PaginationContainer from '@/components/pagination-container';
import UserCard from '@/components/user-card';
import { db } from '@/lib/db';
import { users } from '@/lib/schema';
import { count } from 'drizzle-orm';
import Link from 'next/link';

const PER_PAGE = 20;

async function getUsers(page: number) {
    const countRes = await db.select({ value: count() }).from(users);

    const offsetSkip = (page - 1) * PER_PAGE;

  const data = await db.query.users.findMany({
    limit: PER_PAGE,
    offset: offsetSkip,
  });

  const userCount = countRes[0].value;
  const numPages = Math.ceil(userCount / PER_PAGE);

  return {
    data: data,
    count: userCount,
    numPages: numPages,
  }
}

interface IProps {
  searchParams: { page: number };
}

export default async function Page({ searchParams }: IProps) {
  const page = searchParams.page || 1;
//   console.log(page);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await getUsers(page);

  return (
    <div className='flex flex-col gap-5'>
      <h1 className='font-bold text-xl'>People</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      {res.data.map((user) => (
        <div key={user.id}>
          <Link href={`/dashboard/people/${user.id}`}>
            <UserCard user={user} />
          </Link>
        </div>
      ))}
      </div>
      <PaginationContainer total={res.numPages} value={page} />
    </div>
  );
}
