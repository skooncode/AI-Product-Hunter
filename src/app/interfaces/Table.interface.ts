export interface SortingState {
    id: string;
    desc: boolean;
  }
  
  export interface PaginationState {
    pageIndex: number;
    pageSize: number;
  }
  
  export interface ColumnDef<T> {
    id: string;
    header: string;
    accessorKey?: keyof T;
    cell?: (info: { row: { original: T } }) => React.ReactNode;
    enableSorting?: boolean;
  }