import React, { FC } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { customTableProps } from '../../../utils/types';

const ServicesDataTable: FC<customTableProps> = ({
  cartItemsArray,
  columns,
}) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={cartItemsArray} columns={columns} hideFooter={true} />
    </div>
  );
};

export default ServicesDataTable;
