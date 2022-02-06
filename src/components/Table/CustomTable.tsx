import React, { FC, useContext } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  Button,
  List,
  ListItem,
  TableCell,
} from '@mui/material';
import CartModal from '../Modal/CartModal';
import { Store } from '../../../utils/Store';
import { styled } from '@mui/material/styles';
import { customTableProps } from '../../../utils/types';
import { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const CustomTable: FC<customTableProps> = ({ cartItemsArray }) => {
  const { dispatch } = useContext(Store);
  const removeItemHandler = (itemId: number) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: itemId });
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Service Name</StyledTableCell>
            <StyledTableCell>Price Range</StyledTableCell>
            <StyledTableCell>Service Duration</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItemsArray.map((item) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell>
                <CartModal serviceObject={item} />
              </StyledTableCell>
              <StyledTableCell>
                <List sx={{ display: 'flex', flexDirection: 'row' }}>
                  {item.price &&
                    item.price.map((el, i) => (
                      <ListItem key={`price-variant-${i}`}>${el}</ListItem>
                    ))}
                </List>
              </StyledTableCell>
              <StyledTableCell>{item.duration}</StyledTableCell>
              <StyledTableCell>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => removeItemHandler(item.id)}
                >
                  x
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
