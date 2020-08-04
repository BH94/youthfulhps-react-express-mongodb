import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';

const StyledInput = styled(Input)`
  border: none;
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  height: 3rem;
  border-radius: 50px;

  background: #828f76;
  box-shadow: inset 6px 6px 12px #6f7a64, inset -6px -6px 12px #96a488;
  color: white;
  padding-left: 10px;

  margin-bottom: 1rem;
  padding: 2rem 1rem;

  /* rgba(26, 122, 213, 0.2) */
  &:focus {
    border: none;
    box-shadow: inset 6px 6px 12px #6f7a64,
      inset -6px -6px 12px rgba(36, 164, 255, 0.2);
  }

  &::placeholder {
    color: white;
    font-size: 1.2rem;
  }
`;

const CommonInput = (props) => {
  return <StyledInput {...props} />;
};

export default CommonInput;
