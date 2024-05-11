import { promises as fs } from 'fs';
import path from 'path';
import { z } from 'zod';

import HeaderWrapper from '../../components/reusable-components/layout/header-wrapper';
import SubscriptionsTable from './components/table/subscriptions-table';
import { subscriptionSchema } from './data/schema';

async function getSubscriptions() {
  const data = await fs.readFile(
    path.join(
      process.cwd(),
      'src/app/[locale]/(auth)/admin/(pages)/subscriptions/data/subscriptions.json',
    ),
  );

  const subscriptions = JSON.parse(data.toString());

  return z.array(subscriptionSchema).parse(subscriptions);
}
const Subscriptions = async () => {
  const subscriptions = await getSubscriptions();

  return (
    <HeaderWrapper
      title="Subscriptions!"
      subTitle="Here's a list of your Subscriptions."
    >
      <SubscriptionsTable subscriptions={subscriptions} />
    </HeaderWrapper>
  );
};

export default Subscriptions;
