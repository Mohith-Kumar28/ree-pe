import { z } from 'zod';

export const subscriptionSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  price: z.number(),
  quantity: z.number(),
  date: z.string(),
});

export type Subscription = z.infer<typeof subscriptionSchema>;
