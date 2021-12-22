import * as React from 'react';
import Image from 'next/image';
import { List, ListItem } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import StyledCarousel from '../StyledCarousel/StyledCarousel';
import { ModalProps } from '../../../utils/types';
import AddButton from '../Buttons/AddButton';
const wrapper = {
  position: 'absolute' as const,
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
            {serviceDetails.images.map((image, i) => (
              <Image
                src={image}
                alt={serviceDetails.name}
                layout="responsive"
                width={700}
                height={425}
                key={`card-slider-id-${i}`}
              />
            ))}
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
            <Typography sx={{ mt: 2 }}>Price:</Typography>
            <List sx={{ display: 'flex', flexDirection: 'row' }}>
              {serviceDetails.price &&
                serviceDetails.price.map((el, i) => (
                  <ListItem key={`price-variant-${i}`}>${el}</ListItem>
                ))}
            </List>

            {/* need to update once we have the hours field in the data */}
            {false ? (
              <Typography sx={{ mt: 2 }}>
                Time: ${serviceDetails.duration}
              </Typography>
            ) : (
              <div />
            )}
            <AddButton serviceObject={serviceDetails} />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
