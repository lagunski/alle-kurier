import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerStyle = styled.div`
  display: flex;
  justify-content: center;
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: ${animation} 2s linear infinite;
`;

const View = styled.div`
  display: flex;
  justify-content: center;
`;

export const Spinner = () => {
  return (
    <View>
      <SpinnerStyle />
    </View>
  );
};
