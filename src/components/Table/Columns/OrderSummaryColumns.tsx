import React from 'react';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { PriceRangeCell } from '../Cells/TableCells';

const orderSummaryColumns: GridColDef[] = [
  { field: 'name', headerName: 'Service Name', flex: 1 },
  {
    field: 'price',
    headerName: 'Price',
    flex: 1,
    renderCell: (params: GridRenderCellParams) => (
      <PriceRangeCell props={params} />
    ),
  },
];

export default orderSummaryColumns;
