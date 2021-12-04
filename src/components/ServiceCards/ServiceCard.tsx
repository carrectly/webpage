import styled from '@emotion/styled';
import { AppBar, AppBarProps, CardProps, Box } from '@mui/material';
import * as React from 'react';
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
import ServiceDetialsModal from '../Modal/ServiceDetailsModal';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import AddButton from '../Buttons/AddButton'

//interfaces are used for objects and classes
//types are used for

interface ServiceObject {
  serviceObject: ServiceCardProps;
}

interface ServiceCardProps {
  ID: string;
  SERVICE: string;
  PRICE: string;
  SHORTDESCRIPTION: string;
  LONGDESCRIPTION: string;
  IMAGE: string;
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
  z-index: 15;
`;

const ServiceCard: React.FC<ServiceObject> = ({ serviceObject }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <BgImage imgsrc={serviceObject.IMAGE} imgalt="test">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignContent="space-between"
          sx={{
            width: '100%',
            height: '100%',
            padding: '10px',
            background:
              'linear-gradient(180deg, rgba(39, 39, 39, 0.8) 45%, rgba(39, 39, 39, 0) 94.67%)',
          }}
        >
          <Title>{serviceObject.SERVICE}</Title>
          <Typography
            variant="body1"
            color="white"
            fontFamily="roboto, sans-serif"
          >
            {serviceObject.SHORTDESCRIPTION}
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            sx={{ width: '100%' }}
          >
            <StyledEmotionButton
              handleClick={handleOpen}
              bgColor="#fff"
              textColor="rgb(116, 55, 148)"
            >
              More <InfoIcon fontSize="small" />
            </StyledEmotionButton>
            <AddButton serviceObject={serviceObject} />
          </Box>
        </Box>
      </BgImage>
      <ServiceDetialsModal
        open={open}
        onClose={handleClose}
        serviceDetails={serviceObject}
      />
    </div>
  );
};

export default ServiceCard;
