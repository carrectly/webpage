import React, {FC} from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

type WrapperProps {
    onClick: FunctionStringCallback
}


const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  background-color: #000;
  border: 2px solid #fff;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    z-index: 1;
  }
`;

type MarkerProps {
    key: string;
    text: string;
    lat: string;
    lng: string;
    onClick: WrapperProps
}

const Marker = (props: MarkerProps): JSX.Element => {
    return (
        <Wrapper
        // onClick={props.onClick}
      />
    )

}

export default Marker;