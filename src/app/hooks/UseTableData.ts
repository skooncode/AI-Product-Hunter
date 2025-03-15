// hooks/useTableData.ts
import { useState, useEffect } from 'react';
import { PaginationState, SortingState } from '../interfaces/Table.interface';
import { User } from '../interfaces/User.interface';
import apiService from '../services/api.service';

export function UseTableData() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [rowCount, setRowCount] = useState(0);
  
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  
  const [sorting, setSorting] = useState<SortingState[]>([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      
      const sortColumn = sorting.length > 0 ? sorting[0].id : undefined;
      const sortDirection = sorting.length > 0 ? (sorting[0].desc ? 'desc' : 'asc') : undefined;
      
      const result = await apiService.getUsers(
        pagination.pageIndex,
        pagination.pageSize,
        sortColumn,
        sortDirection as 'asc' | 'desc' | undefined
      );
      
      setData(result.users);
      setRowCount(result.total);
      setLoading(false);
    }
    
    fetchData();
  }, [pagination.pageIndex, pagination.pageSize, sorting]);

  return {
    data,
    loading,
    rowCount,
    pagination,
    setPagination,
    sorting,
    setSorting,
  };
}