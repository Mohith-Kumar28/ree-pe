import { promises as fs } from 'fs';
import Image from 'next/image';
import path from 'path';
import { z } from 'zod';

import { columns } from './components/columns';
import { DataTable } from './components/data-table';
import { userSchema } from './data/schema';

async function getUsers() {
  const data = await fs.readFile(
    path.join(
      process.cwd(),
      'src/app/[locale]/(auth)/admin/(pages)/users/data/users.json',
    ),
  );

  const users = JSON.parse(data.toString());

  return z.array(userSchema).parse(users);
}
const Users = async () => {
  const users = await getUsers();
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/users-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/users-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Users!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your Users.
            </p>
          </div>
          <div className="flex items-center space-x-2">{/* <UserNav /> */}</div>
        </div>
        <DataTable data={users} columns={columns} />
      </div>
    </>
  );
};

export default Users;
