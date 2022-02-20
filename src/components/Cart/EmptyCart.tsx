import React from 'react';
import Image from 'next/image';
import { Box, Typography, Button } from '@mui/material';
import NextLink from 'next/link';

const EmptyCart = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        padding: '50px 0 50px 0',
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        fontWeight="bold"
        textAlign={'center'}
        color="primary"
      >
        Your shopping cart is empty
      </Typography>
      <Box sx={{ display: 'relative', width: '80%' }}>
        <Image
          src="/images/home/empty-cart.png"
          alt="empty cart"
          layout="responsive"
          width={700}
          height={425}
          priority
        />
      </Box>
      <NextLink href="/services" passHref>
        <Button variant="contained" color="primary" sx={{ width: '80vw' }}>
          Add Services
        </Button>
      </NextLink>
    </Box>
  );
};

export default EmptyCart;
