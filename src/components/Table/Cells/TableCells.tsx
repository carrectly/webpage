import { Button, List, ListItem } from '@mui/material';
import React, { useContext, FC } from 'react';
import { Store } from '../../../../utils/Store';
import { GridRenderCellParams } from '@mui/x-data-grid';

type cellAttributes = {
  props: GridRenderCellParams;
};

export const DeleteServiceCell: FC<cellAttributes> = ({ props }) => {
  const { dispatch } = useContext(Store);
  const removeItemHandler = (itemId: number) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: itemId });
  };
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => removeItemHandler(props.row.id)}
    >
      x
    </Button>
  );
};

export const PriceRangeCell: FC<cellAttributes> = ({ props }) => {
  return (
    <List sx={{ display: 'flex', flexDirection: 'row' }}>
      {props.row.price &&
        props.row.price.map(
          (
            el:
              | boolean
              | React.ReactChild
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined,
            i: any
          ) => <ListItem key={`price-variant-${i}`}>${el}</ListItem>
        )}
    </List>
  );
};
