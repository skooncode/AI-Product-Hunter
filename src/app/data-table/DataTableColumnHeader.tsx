import React from 'react';
import { Column } from '@tanstack/react-table';

interface DataTableColumnHeaderProps<TData, TValue> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  title,
}: DataTableColumnHeaderProps<TData, TValue>) {
  return (
    <div className="flex items-center space-x-2">
        <span>{title}</span>
    </div>
  );
}