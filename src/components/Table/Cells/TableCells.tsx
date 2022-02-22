import { Button, List, ListItem } from '@mui/material';
import { GridRowModel } from '@mui/x-data-grid';
import React, { useContext } from 'react';
import { Store } from '../../../../utils/Store';
import { ServiceType } from '../../../../utils/types';

interface CellAttributes {
  row: GridRowModel<ServiceType>;
}

export const DeleteServiceCell: React.FC<CellAttributes> = ({ row }) => {
  const { dispatch } = useContext(Store);
  const removeItemHandler = (itemId: number) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: itemId });
  };
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => removeItemHandler(row.id)}
    >
      x
    </Button>
  );
};

export const PriceRangeCell: React.FC<CellAttributes> = ({ row }) => {
  return (
    <List sx={{ display: 'flex', flexDirection: 'row' }}>
      {row?.prices &&
        row.prices.map((price, index) => (
          <ListItem key={`price-variant-${index}`}>${price}</ListItem>
        ))}
    </List>
  );
};
