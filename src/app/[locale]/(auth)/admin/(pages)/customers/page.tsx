import { promises as fs } from 'fs';
import Image from 'next/image';
import path from 'path';
import { z } from 'zod';

import CustomersTable from './components/customers-table';
import { userSchema } from './data/schema';

async function getCustomers() {
  const data = await fs.readFile(
    path.join(
      process.cwd(),
      'src/app/[locale]/(auth)/admin/(pages)/customers/data/customers.json',
    ),
  );

  const customers = JSON.parse(data.toString());

  return z.array(userSchema).parse(customers);
}
const Customers = async () => {
  const customers = await getCustomers();

  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/customers-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/customers-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Customers!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your Customers.
            </p>
          </div>
          <div className="flex items-center space-x-2">{/* <UserNav /> */}</div>
        </div>
        <CustomersTable customers={customers} />
      </div>
    </>
  );
};

export default Customers;
