import React from 'react';
import { Carousel, CarouselProps } from 'antd';
import styled from '@emotion/styled';
import { FC } from 'react';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
interface CustomCarouselProps extends CarouselProps {
  width?: string;
  arrowSpacing?: string;
}

const StyledCarousel = styled(Carousel)<CustomCarouselProps>`
  width: ${(props) => props.width};
  z-index: 22;
  > .slick-dots li button {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: #83509f;
  }
  > .slick-dots li.slick-active button {
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background: #cdafde;
  }

  > .slick-next {
    right: ${(props) => props.arrowSpacing};
    z-index: 22;
  }

  > .slick-prev {
    left: ${(props) => props.arrowSpacing};
    z-index: 22;
  }

  .slick-arrow {
    color: #bababa !important;
    width: 40px;
    height: 40px;
  }
  .slick-arrow:hover {
    color: #cdafde !important;
  }
`;

const StyledCarouselComponent: FC<CustomCarouselProps> = ({
  dots = false,
  arrows = false,
  effect,
  width = 'inherit',
  autoplay = false,
  children,
  arrowSpacing = '-25px',
}) => {
  return (
    <StyledCarousel
      dots={dots}
      arrows={arrows}
      effect={effect}
      width={width}
      autoplay={autoplay}
      arrowSpacing={arrowSpacing}
      prevArrow={<KeyboardArrowLeftOutlinedIcon />}
      nextArrow={<ChevronRightOutlinedIcon />}
    >
      {children}
    </StyledCarousel>
  );
};

export default StyledCarouselComponent;
