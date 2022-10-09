import React, { ChangeEvent, FC } from 'react';
import styled from 'styled-components';
import Input from '../Input/Input';
import { Filters } from '../../interfaces/Filters';
import { Checkbox } from '../Checkbox/Checkbox';

const Wrapper = styled.div`
  border: 0.2rem solid #e1e3e9;
  border-radius: 0.5rem;
  padding: 2.4rem;
  margin-bottom: 4rem;
`;

const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 2.4rem;
`;

const InputsWrapper = styled.div`
  display: flex;
  gap: 2.4rem;
  margin-bottom: 4rem;
`;

const CheckboxesWrapper = styled.div`
  display: flex;
  gap: 2.4rem;
`;

interface Props {
  filters?: Filters;
  setFilters: (filters: Filters) => void;
}

export const FilterBar: FC<Props> = ({ filters, setFilters }) => {
  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>, filterName: keyof Filters) => {
    setFilters({ ...filters, [filterName]: +e.currentTarget.value });
  };

  const checkboxChangeHandler = (e: ChangeEvent<HTMLInputElement>, filterName: keyof Filters) => {
    setFilters({ ...filters, [filterName]: e.target.checked });
  };

  return (
    <Wrapper>
      <Title>Wyceń przesyłkę</Title>
      <InputsWrapper>
        <Input value={filters?.maxWeight || ''} onChange={e => inputChangeHandler(e, 'maxWeight')} id='weight' label='Waga' unit='kg' />
        <Input value={filters?.maxLength || ''} onChange={e => inputChangeHandler(e, 'maxLength')} id='length' label='Długość' unit='cm' />
        <Input value={filters?.maxHeight || ''} onChange={e => inputChangeHandler(e, 'maxHeight')} id='height' label='Wysokość' unit='cm' />
        <Input value={filters?.maxWidth || ''} onChange={e => inputChangeHandler(e, 'maxWidth')} id='width' label='Szerokość' unit='cm' />
      </InputsWrapper>
      <CheckboxesWrapper>
        <Checkbox
          labelTop='Nadanie'
          label='W punkcie'
          checked={filters?.fromPointShipment || false}
          onChange={e => checkboxChangeHandler(e, 'fromPointShipment')}
        />
        <Checkbox
          label='Podjazd kuriera'
          checked={filters?.fromDoorShipment || false}
          onChange={e => checkboxChangeHandler(e, 'fromDoorShipment')}
        />
        <Checkbox
          labelTop='Odbiór'
          label='W punkcie'
          checked={filters?.toPointDelivery || false}
          onChange={e => checkboxChangeHandler(e, 'toPointDelivery')}
        />
        <Checkbox
          label='Podjazd kuriera'
          checked={filters?.toDoorDelivery || false}
          onChange={e => checkboxChangeHandler(e, 'toDoorDelivery')}
        />
      </CheckboxesWrapper>
    </Wrapper>
  );
};
