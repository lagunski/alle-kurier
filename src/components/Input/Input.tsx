import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  unit: string;
  label: string;
}

const Label = styled.label`
  font-weight: 600;
  margin-bottom: 0.4rem;
  display: block;
`;

const InputWrapper = styled.div`
  display: flex;
`;

const StyledInput = styled.input`
  width: 4.8rem;
  height: 4rem;
  border-radius: 0;
  border: 0.1rem solid #e1e3e9;
  text-align: center;
  padding: 0;
  &:focus {
    outline: none;
    padding: 0;
  }
`;

const Point = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #e9ecef;
  border: 1px solid #e1e3e9;
  border-left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input: FC<Props> = ({ unit, label, ...props }) => {
  return (
    <div>
      <Label htmlFor={props.id}>{label}</Label>
      <InputWrapper>
        <StyledInput
          id={props.id}
          onKeyPress={event => {
            if (!/[0-9.]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          min={0}
          {...props}
          // onBlur={el.onBlurHandler}
          // defaultValue={el.value}
        />
        <Point>{unit}</Point>
      </InputWrapper>
    </div>
  );
};

export default Input;
