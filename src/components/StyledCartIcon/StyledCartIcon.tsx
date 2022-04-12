import React, { FC, useContext } from 'react';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import dynamic from 'next/dynamic';
import { Store } from '../../../utils/Store';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const StyledCartIcon: FC = () => {
  const { state } = useContext(Store);
  const { cartItems } = state;
  return (
    <StyledBadge badgeContent={cartItems.length} color="warning">
      <ShoppingCartIcon sx={{ color: 'white' }} />
    </StyledBadge>
  );
};

export default dynamic(() => Promise.resolve(StyledCartIcon), { ssr: false });
