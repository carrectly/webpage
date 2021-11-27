import Image, {ImageProps} from "next/image"
import styled from '@emotion/styled';
import React, { ReactNode, FC } from 'react';

interface ContainerProps {
    alignItems: string;
    justifyContent: string;
    height: string;
    width: string;
}


const Container = styled.section<ContainerProps>`
  z-index: -5;
  position: relative;
  margin: 5px;
  align-items: ${ props => props.alignItems };
  display: flex;
  justify-content: ${ props => props.justifyContent };
  height: ${ props => props.height };
  width: ${ props => props.width };
`;

const StyledImage = styled(Image)<ImageProps>`
  border-radius: 5px;
`;


const InnerContainer = styled.div`
  z-index: 10;
  width: 100%;
  height: 100%;
`

interface BgImageProps {
    alignItems?: string;
    children: ReactNode;
    imgalt: string;
    imgsrc: string;
    height?: string;
    justifyContent?: string;
    width?: string;
}

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
const BgImage = ({ 
  alignItems = 'center',
  children,
  imgalt = 'Background Image',
  imgsrc,
  height = '215px',
  justifyContent = 'center',
  width = '320px'
}: BgImageProps): JSX.Element => {

  return(
    <Container
      alignItems={ alignItems }
      height={ height }
      justifyContent={ justifyContent }
      width={ width }
    >
      <StyledImage
        alt={ imgalt }
        src={ imgsrc }
        layout="fill"
        objectFit="cover"
        quality={ 100 }
      />
      { children && 
        <InnerContainer>
          { children }
        </InnerContainer>
      }
    </Container>
  )
}

export default BgImage