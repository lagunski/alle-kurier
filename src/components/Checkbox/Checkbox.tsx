import React, { ChangeEvent, FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelTop?: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxWrapper = styled.div`
  display: flex;
  justify-items: center;
  margin-top: 1.2rem;
`;
const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 1rem;
  height: 1rem;
  margin-left: 0;
`;

const Label = styled.label`
  display: flex;
  font-size: 1.2rem;
  font-weight: 300;
  margin-left: 0.8rem;
`;

const LabelTop = styled.label`
  display: block;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 0;
`;
export const Checkbox: FC<Props> = ({ label, checked, onChange, labelTop, ...props }) => {
  return (
    <div>
      {labelTop && <LabelTop>{labelTop}</LabelTop>}
      <CheckboxWrapper>
        <StyledCheckbox checked={checked} onChange={onChange} />
        <Label htmlFor={props.id}>{label}</Label>
      </CheckboxWrapper>
    </div>
  );
};
