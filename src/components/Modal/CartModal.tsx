import React, { FC, useState } from 'react';
import { Link, Box } from '@mui/material';
import { ServiceObject } from '../../../utils/types';
import ServiceDetialsModal from './ServiceDetailsModal';

const CartModal: FC<ServiceObject> = ({ serviceObject }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Link onClick={handleOpen}>{serviceObject.name}</Link>
      <ServiceDetialsModal
        open={open}
        onClose={handleClose}
        serviceDetails={serviceObject}
      />
    </Box>
  );
};

export default CartModal;
