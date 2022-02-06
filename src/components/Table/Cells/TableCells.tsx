import { Button, List, ListItem } from '@mui/material';
import React, { useContext } from 'react';
import { Store } from '../../../../utils/Store';

export const DeleteServiceCell = ({ row }) => {
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

export const PriceRangeCell = ({ row }) => {
  return (
    <List sx={{ display: 'flex', flexDirection: 'row' }}>
      {row.price &&
        row.price.map((el, i) => (
          <ListItem key={`price-variant-${i}`}>${el}</ListItem>
        ))}
    </List>
  );
};
