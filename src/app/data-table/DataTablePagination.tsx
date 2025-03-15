import React from 'react';
import { Table } from '@tanstack/react-table';
import { LuChevronLeft, LuChevronRight, LuChevronsLeft, LuChevronsRight } from 'react-icons/lu';

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  rowCount: number;
}

export function DataTablePagination<TData>({
  table,
  rowCount,
}: DataTablePaginationProps<TData>) {
  return (
    <div className="flex items-center justify-between px-2 py-4">
      <div className="flex-1 text-sm text-gray-700">
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="h-8 w-16 rounded-md border border-gray-300 bg-white text-sm"
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{' '}
          {Math.ceil(rowCount / table.getState().pagination.pageSize)}
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="rounded-md border border-gray-300 p-1 disabled:opacity-50"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <LuChevronsLeft className="h-4 w-4" />
          </button>
          <button
            className="rounded-md border border-gray-300 p-1 disabled:opacity-50"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <LuChevronLeft className="h-4 w-4" />
          </button>
          <button
            className="rounded-md border border-gray-300 p-1 disabled:opacity-50"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <LuChevronRight className="h-4 w-4" />
          </button>
          <button
            className="rounded-md border border-gray-300 p-1 disabled:opacity-50"
            onClick={() => table.setPageIndex(Math.ceil(rowCount / table.getState().pagination.pageSize) - 1)}
            disabled={!table.getCanNextPage()}
          >
            <LuChevronsRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}