import React from 'react';
import styled from 'styled-components';
import Input from '../Input/Input';

const Wrapper = styled.div`
  border: 0.2rem solid #e1e3e9;
  border-radius: 0.5rem;
  padding: 2.4rem;
  margin-bottom: 4rem;
`;

const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 1.6rem;
`;

const InputsWrapper = styled.div`
  display: flex;
  gap: 2.4rem;
`;

const FilterBar = () => {
  return (
    <Wrapper>
      <Title>Wyceń przesyłkę</Title>
      <InputsWrapper>
        <Input id='weight' label='Waga' unit='kg' />
        <Input id='length' label='Długość' unit='cm' />
        <Input id='height' label='Wysokość' unit='kg' />
        <Input id='width' label='Szerokość' unit='kg' />
      </InputsWrapper>
    </Wrapper>
  );
};

export default FilterBar;
