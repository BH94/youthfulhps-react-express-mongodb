import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';

const { TextArea } = Input;

const StyledTextArea = styled(TextArea)`
  border: none;
  width: 100%;
  font-size: 1.5rem;
  border-radius: 30px;
  /* background: #e0e5ec; */
  background: none;
  box-shadow: inset 6px 6px 12px #6f7a64, inset -6px -6px 12px #96a488;
  color: white;
  padding-left: 10px;

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

const CommonTextArea = (props) => {
  return <StyledTextArea {...props} />;
};

export default CommonTextArea;
