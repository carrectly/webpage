import React from 'react'
import { Carousel, CarouselProps } from 'antd';
import styled from '@emotion/styled';
import { FC } from 'react';

const StyledCarousel = styled(Carousel)<CarouselProps>`
  width: 20vw;
  z-index: 10;
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
  .ant-carousel .slick-prev,
  .ant-carousel .slick-prev:hover {
    left: 10px;
    z-index: 12;
    color: white;
    font-size: 20px;
    height: 30px;
  }

  .ant-carousel .slick-next,
  .ant-carousel .slick-next:hover {
    right: 10px;
    z-index: 12;
    color: white;
    font-size: 20px;
    height: 30px;
  }
`;

const StyledCarouselComponent: FC = ({ children }) => {
    return <StyledCarousel>{children}</StyledCarousel>;
  };


export default StyledCarouselComponent;
