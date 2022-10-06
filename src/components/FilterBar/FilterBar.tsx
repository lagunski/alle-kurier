import React, { ChangeEvent, FC, useState } from 'react';
import styled from 'styled-components';
import Input from '../Input/Input';
import { Filters } from '../../interfaces/Filters';
import Checkbox from '../Checkbox/Checkbox';

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
  margin-bottom: 40px;
`;

const CheckboxesWrapper = styled.div`
  display: flex;
  gap: 2.4rem;
`;

interface Props {
  filters?: Filters;
  setFilters: (filters: Filters) => void;
}

const FilterBar: FC<Props> = ({ filters, setFilters }) => {
  const [checkedFromPoint, setCheckedFromPoint] = useState(false);
  const [checkedFromDoor, setCheckedFromDoor] = useState(false);
  const [checkedToPoint, setCheckedToPoint] = useState(false);
  const [checkedToDoor, setCheckedToDoor] = useState(false);
  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>, filterName: keyof Filters) => {
    setFilters({ ...filters, [filterName]: +e.currentTarget.value });
  };
  return (
    <Wrapper>
      <Title>Wyceń przesyłkę</Title>
      <InputsWrapper>
        <Input value={filters?.maxWeight || ''} onChange={e => inputChangeHandler(e, 'maxWeight')} id='weight' label='Waga' unit='kg' />
        <Input value={filters?.maxLength || ''} onChange={e => inputChangeHandler(e, 'maxLength')} id='length' label='Długość' unit='cm' />
        <Input value={filters?.maxHeight || ''} onChange={e => inputChangeHandler(e, 'maxHeight')} id='height' label='Wysokość' unit='kg' />
        <Input value={filters?.maxWidth || ''} onChange={e => inputChangeHandler(e, 'maxWidth')} id='width' label='Szerokość' unit='kg' />
      </InputsWrapper>
      <CheckboxesWrapper>
        <Checkbox label={'W punkcie'} checked={checkedFromPoint} onChange={e => setCheckedFromPoint(e.target.checked)} />
        <Checkbox label={'Podjazd kuriera'} checked={checkedFromDoor} onChange={e => setCheckedFromDoor(e.target.checked)} />
        <Checkbox label={'W punkcie'} checked={checkedToPoint} onChange={e => setCheckedToPoint(e.target.checked)} />
        <Checkbox label={'Podjazd kuriera'} checked={checkedToDoor} onChange={e => setCheckedToDoor(e.target.checked)} />
      </CheckboxesWrapper>
    </Wrapper>
  );
};

export default FilterBar;
