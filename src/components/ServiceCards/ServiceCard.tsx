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
import StyledEmotionButton from '../Buttons/StyledEmotionButton';
import InfoIcon from '@mui/icons-material/Info';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

interface ServiceCardProps {
  name: string;
  image: string;
  shortDescription: string;
}

const Title = styled.div`
  font-family: roboto, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  text-transform: uppercase;
  color: #fff;
  text-align: left;
  margin: 0;
`;

const ServiceCard = ({ name, image, shortDescription }: ServiceCardProps): JSX.Element => {
  return (
    <BgImage imgsrc={image} imgalt="test">
      <Box display="flex" flexDirection="column" justifyContent="space-between" alignContent="space-between" sx={{width: '100%', height: '100%', padding: '10px'}}>
        <Title>{name}</Title>
        <Typography variant="body1" color="white" fontFamily="roboto, sans-serif">{shortDescription}</Typography>
        <Box display="flex" flexDirection="row" justifyContent="space-between" sx={{width: '100%'}}>
          <StyledEmotionButton bgColor="#fff" textColor="rgb(116, 55, 148)">
            More <InfoIcon fontSize="small" />
          </StyledEmotionButton>
          <StyledEmotionButton bgColor="rgb(116, 55, 148)" textColor="#fff">
            Add <AddCircleOutlineIcon fontSize="small" />
          </StyledEmotionButton>
        </Box>
      </Box>
    </BgImage>
  );
};

export default ServiceCard;
