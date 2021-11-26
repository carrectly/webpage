import styled from '@emotion/styled';
import { AppBar, AppBarProps, CardProps, Box } from '@mui/material';
import { FC } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Carousel, CarouselProps } from 'antd';
import BgImage from '../BgImage/BgImage';
import StyledEmotionButton from '../Buttons/StyledEmotionButton'
import InfoIcon from '@mui/icons-material/Info';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const ServiceCard = (): JSX.Element => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
    >
      <BgImage imgsrc="/images/wp_images/7-scaled.jpg" imgalt="test">
        <Typography variant="h3">Testing here</Typography>
        <StyledEmotionButton color="white">More <InfoIcon/></StyledEmotionButton>
        <StyledEmotionButton color="purple">Add <AddCircleOutlineIcon/></StyledEmotionButton>
      </BgImage>
    </Box>
  );
};

export default ServiceCard;
