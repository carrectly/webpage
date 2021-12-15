import Image, { ImageProps } from 'next/image';
import styled from '@emotion/styled';
import React, { FC } from 'react';
import {BgImageContainerProps, BgImageProps} from '../../../utils/types'

const Container = styled.section<BgImageContainerProps>`
  position: relative;
  margin: 5px;
  align-items: ${(props) => props.alignItems};
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

const StyledImage = styled(Image)<ImageProps>`
  z-index: -20;
  border-radius: 5px;
`;

const InnerContainer = styled.div`
  font-family: roboto, sans-serif;
  font-style: normal;
  font-weight: 400;
  z-index: 20;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;


/**
 * <BgImage>
 *
 * The new next/image optimization setup handles background images oddly
 * It requires they be foreground images placed inside of a container
 * This component abstracts that logic away for better DX
 *
 * You can layer text and imagery on top of the background image
 * All you have to do is pass that text or imagery into this component
 *
 * Note: all images get processed through Webpack so you must import!
 * No absolute URLs as they will break during site generation
 *
 * @param { string } alignItems - vertical alignment of inner content
 * @param { string } imgalt - text description of the image
 * @param { string } imgsrc - url of the image, should be a JS module import
 * @param { string } justifyContent - horizontal alignment of inner content
 * @param { number } height - how tall the background image should be (default: 50vh)
 * @param { number } width - how wide image should be (default: 100%)
 */
const BgImage: FC<BgImageProps> = ({
  alignItems = 'center',
  children,
  imgalt = 'Background Image',
  imgsrc = '/images/wp_images/popular/showroom_detail.jpg',
  height = '215px',
  justifyContent = 'center',
  width = '320px',
}) => {
  return (
    <Container
      alignItems={alignItems}
      height={height}
      justifyContent={justifyContent}
      width={width}
    >
      <StyledImage
        alt={imgalt}
        src={imgsrc}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      {children && <InnerContainer>{children}</InnerContainer>}
    </Container>
  );
};

export default BgImage;
