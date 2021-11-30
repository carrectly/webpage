import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import StyledCarousel from '../StyledCarousel/StyledCarousel';
import BgImage from '../BgImage/BgImage';
interface ModalProps {
    open: boolean;
    onClose: () => void;
    serviceDetails: any;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ServiceDetailsModal({open, onClose, serviceDetails}: ModalProps) {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <StyledCarousel autoplay={true}>
            <BgImage imgsrc='/images/wp_images/popular/dent_removal.jpg' imgalt="test">
                <div/>
              </BgImage>

              <BgImage imgsrc='/images/wp_images/popular/ozone.jpg' imgalt="test">
                <div/>
              </BgImage>
          </StyledCarousel>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {serviceDetails.LONGDESCRIPTION}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}