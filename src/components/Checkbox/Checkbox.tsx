import React, { ChangeEvent, FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxWrapper = styled.div`
  display: flex;
`;
const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 10px;
  height: 10px;
  margin-top: 2px;
  margin-left: 0;
`;

const Label = styled.label`
  display: flex;
  font-size: 13px;
  font-weight: 300;
  margin-left: 5px;
`;
const Checkbox: FC<Props> = ({ label, checked, onChange, ...props }) => {
  return (
    <div>
      <CheckboxWrapper>
        <StyledCheckbox checked={checked} onChange={onChange} />
        <Label htmlFor={props.id}>{label}</Label>
      </CheckboxWrapper>
    </div>
  );
};

export default Checkbox;
