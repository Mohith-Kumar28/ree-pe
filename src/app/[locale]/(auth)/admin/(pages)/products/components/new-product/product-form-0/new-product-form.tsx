'use client';

import { Bird, Rabbit, TurtleIcon } from 'lucide-react';
import { useState } from 'react';

import { CurrencyPicker } from '@/components/reusable-components/atoms/currency-picker';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export const Form = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('inr');
  return (
    <ScrollArea className="h-[80vh] w-full rounded-md  p-4 shadow-sm">
      {/* <div
        className="relative hidden  flex-col items-start gap-8 md:flex"
        x-chunk="dashboard-03-chunk-0"
      > */}
      <form className="grid  w-full items-start gap-6 ">
        <fieldset className="grid gap-6 rounded-lg border p-4">
          <legend className="-ml-1 px-1 text-sm font-medium">Details</legend>

          <div className="grid gap-3">
            <Label htmlFor="product-name">Name</Label>
            <Input id="product-name" type="text" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="product-description">Description</Label>
            <Textarea id="product-description" className="min-h-[9.5rem]" />
          </div>
        </fieldset>
        <fieldset className="grid gap-6 rounded-lg border p-4">
          <legend className="-ml-1 px-1 text-sm font-medium">Pricing</legend>
          <div className="grid gap-3">
            <Label htmlFor="product-name">Amount</Label>
            <div className="relative flex">
              <Input id="product-name" type="number" />
              <div className="absolute right-0 top-0">
                <CurrencyPicker
                  value={selectedCurrency}
                  setValue={setSelectedCurrency}
                />
              </div>
            </div>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="role">Role</Label>
            <Select defaultValue="system">
              <SelectTrigger>
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="system">System</SelectItem>
                <SelectItem value="user">User</SelectItem>
                <SelectItem value="assistant">Assistant</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-3">
            <Label htmlFor="model">Model</Label>
            <Select>
              <SelectTrigger
                id="model"
                className="items-start [&_[data-description]]:hidden"
              >
                <SelectValue placeholder="Select a model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="genesis">
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <Rabbit className="size-5" />
                    <div className="grid gap-0.5">
                      <p>
                        Neural{' '}
                        <span className="font-medium text-foreground">
                          Genesis
                        </span>
                      </p>
                      <p className="text-xs" data-description>
                        Our fastest model for general use cases.
                      </p>
                    </div>
                  </div>
                </SelectItem>
                <SelectItem value="explorer">
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <Bird className="size-5" />
                    <div className="grid gap-0.5">
                      <p>
                        Neural{' '}
                        <span className="font-medium text-foreground">
                          Explorer
                        </span>
                      </p>
                      <p className="text-xs" data-description>
                        Performance and speed for efficiency.
                      </p>
                    </div>
                  </div>
                </SelectItem>
                <SelectItem value="quantum">
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <TurtleIcon className="size-5" />
                    <div className="grid gap-0.5">
                      <p>
                        Neural{' '}
                        <span className="font-medium text-foreground">
                          Quantum
                        </span>
                      </p>
                      <p className="text-xs" data-description>
                        The most powerful model for complex computations.
                      </p>
                    </div>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </fieldset>
        <Button type="submit" className="sticky bottom-0 left-0">
          Save changes
        </Button>
      </form>
      {/* </div> */}
    </ScrollArea>
  );
};
