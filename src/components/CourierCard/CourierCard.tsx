import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 0.2rem solid ${props => props.color};
  padding: 2.4rem;
  border-radius: 0.5rem;
`;

const Price = styled.div`
  color: ${props => props.color};
  font-weight: 600;
`;

const Title = styled.div`
  color: #4d4b47;
  font-size: 2.4rem;
  font-weight: 900;
  margin-bottom: 0.4rem;
`;

interface Props {
  color: string;
  name: string;
  price: number;
}

const CourierCard: FC<Props> = ({ color, name, price }) => {
  return (
    <Wrapper color={color}>
      <Title>{name}</Title>
      <Price color={color}>{price} zł</Price>
    </Wrapper>
  );
};

export default CourierCard;
