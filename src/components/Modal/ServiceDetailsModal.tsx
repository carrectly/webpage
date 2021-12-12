import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import StyledCarousel from '../StyledCarousel/StyledCarousel';
import StyledEmotionButton from '../Buttons/StyledEmotionButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BgImage from '../BgImage/BgImage';
import { ModalProps } from '../../../utils/types';

const wrapper = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50vw',
  bgcolor: 'background.paper',
  boxShadow: 24,
};

export default function ServiceDetailsModal({
  open,
  onClose,
  serviceDetails,
}: ModalProps) {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={wrapper}>
          <StyledCarousel autoplay={true} arrows={true}>
            {serviceDetails.images.map((image) => ( 
              <Image
              src={image}
              alt={serviceDetails.name}
              layout="responsive"
              width={700}
              height={425}
            />
            ))}
            {/* <BgImage
            width='500'
              imgsrc="/images/wp_images/popular/dent_removal.jpg"
              imgalt="test"
            >
              <div />
            </BgImage>

            <BgImage  width='500' imgsrc="/images/wp_images/popular/ozone.jpg" imgalt="test">
              <div />
            </BgImage> */}
          </StyledCarousel>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {serviceDetails.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {serviceDetails.longDescription.split('✔').map((el: string) => {
              if (el.length > 1) {
                return <div>{`✔ ${el}`}</div>;
              }
            })}
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Typography sx={{ mt: 2 }}>
              Price: ${serviceDetails.price}
            </Typography>
            {/* need to update once we have the hours field in the data */}
            {false ? (
              <Typography sx={{ mt: 2 }}>
                Time: ${serviceDetails.price}
              </Typography>
            ) : (
              <div />
            )}
            <StyledEmotionButton bgColor="rgb(116, 55, 148)" textColor="#fff">
              Add <AddCircleOutlineIcon fontSize="small" />
            </StyledEmotionButton>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
