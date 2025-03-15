import React from 'react';
import { Column } from '@tanstack/react-table';
import { LuChevronDown, LuChevronUp, LuChevronsUpDown } from 'react-icons/lu';

interface DataTableColumnHeaderProps<TData, TValue> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
}: DataTableColumnHeaderProps<TData, TValue>) {
  return (
    <div className="flex items-center space-x-2">
        <span>{title}</span>
    </div>
  );
}