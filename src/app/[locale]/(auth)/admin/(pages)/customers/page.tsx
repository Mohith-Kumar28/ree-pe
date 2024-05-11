import { promises as fs } from 'fs';
import path from 'path';
import { z } from 'zod';

import HeaderWrapper from '../../components/reusable-components/layout/header-wrapper';
import CustomersTable from './components/table/customers-table';
import { customerSchema } from './data/schema';

async function getCustomers() {
  const data = await fs.readFile(
    path.join(
      process.cwd(),
      'src/app/[locale]/(auth)/admin/(pages)/customers/data/customers.json',
    ),
  );

  const customers = JSON.parse(data.toString());

  return z.array(customerSchema).parse(customers);
}
const Customers = async () => {
  const customers = await getCustomers();

  return (
    <HeaderWrapper
      title="Customers!"
      subTitle="Here's a list of your Customers."
    >
      <CustomersTable customers={customers} />
    </HeaderWrapper>
  );
};

export default Customers;
