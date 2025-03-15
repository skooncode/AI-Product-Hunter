import React from 'react';
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getPaginationRowModel,
    getSortedRowModel,
    OnChangeFn,
    PaginationState,
} from '@tanstack/react-table';
import { DataTablePagination } from '@/app/data-table/DataTablePagination';
import { DataTableColumnHeader } from '@/app/data-table/DataTableColumnHeader';
import './DataTable.css';

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    loading?: boolean;
    rowCount: number;
    pagination: PaginationState;
    onPaginationChange: OnChangeFn<PaginationState>;
}

export function DataTable<TData, TValue>({
    columns,
    data,
    loading = false,
    rowCount,
    pagination,
    onPaginationChange,
}: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        manualPagination: true,
        manualSorting: true,
        pageCount: Math.ceil(rowCount / pagination.pageSize),
        state: {
            pagination,
        },
        onPaginationChange,
    });

    return (
        <div className="table-container">
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className="table-header">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        className="table-header-cell"
                                    >
                                        {header.isPlaceholder ? null : (
                                            <DataTableColumnHeader
                                                column={header.column}
                                                title={header.column.columnDef.header as string}
                                            />
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan={columns.length} className="px-4 py-4 text-center">
                                    Loading data...
                                </td>
                            </tr>
                        ) : table.getRowModel().rows.length === 0 ? (
                            <tr>
                                <td colSpan={columns.length} className="px-4 py-4 text-center">
                                    No results found.
                                </td>
                            </tr>
                        ) : (
                            table.getRowModel().rows.map((row) => (
                                <tr
                                    key={row.id}
                                    className="table-row"
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <td
                                            key={cell.id}
                                            className="table-cell"
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            <DataTablePagination table={table} rowCount={rowCount} />
        </div>
    );
}