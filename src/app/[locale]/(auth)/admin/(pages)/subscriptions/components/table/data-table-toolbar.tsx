'use client';

import { Cross2Icon } from '@radix-ui/react-icons';
import type { Table } from '@tanstack/react-table';

import {
  priorities,
  statuses,
} from '@/app/[locale]/(auth)/admin/(pages)/customers/data/data';
import { DataTableFacetedFilter } from '@/components/reusable-components/table/data-table-faceted-filter';
import { DataTableViewOptions } from '@/components/reusable-components/table/data-table-view-options';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { NewSubscriptionSheet } from '../new-subscription/new-subscription-sheet';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter customers..."
          value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('title')?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn('status') && (
          <DataTableFacetedFilter
            column={table.getColumn('status')}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn('priority') && (
          <DataTableFacetedFilter
            column={table.getColumn('priority')}
            title="Priority"
            options={priorities}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 size-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />

      <NewSubscriptionSheet />
    </div>
  );
}
