'use client';

import { User } from '@/app/interfaces/User.interface';
import { ColumnDef } from '@/app/interfaces/Table.interface';
import { DataTable } from '@/app/data-table/DataTable';
import { UseTableData } from '@/app/hooks/UseTableData';

export default function Home() {
  const columns: ColumnDef<User>[] = [
    {
      id: 'id',
      header: '#',
      accessorKey: 'id',
      enableSorting: true,
    },
    {
      id: 'name',
      header: 'Name',
      accessorKey: 'name',
      enableSorting: true,
    },
    {
      id: 'role',
      header: 'Areas of Impact',
      accessorKey: 'role',
      enableSorting: true,
    },
    {
      id: 'status',
      header: 'Status',
      accessorKey: 'status',
      cell: ({ row }) => {
        const status = row.original.status;
        return (
          <span className={`px-2 py-1 rounded-full text-xs ${
            status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {status}
          </span>
        );
      },
    },
    {
      id: 'createdAt',
      header: 'Launched on',
      accessorKey: 'createdAt',
      cell: ({ row }) => {
        return new Date(row.original.createdAt).toLocaleDateString();
      },
    },
  ];
  const {
    data,
    loading,
    rowCount,
    pagination,
    setPagination,
  } = UseTableData();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Products List</h1>
      <DataTable
        columns={columns}
        data={data}
        loading={loading}
        rowCount={rowCount}
        pagination={pagination}
        onPaginationChange={setPagination}
      />
    </div>
  );
}
