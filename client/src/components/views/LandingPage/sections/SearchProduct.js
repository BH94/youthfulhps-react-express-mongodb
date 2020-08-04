import React, { useState } from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const { Search } = Input;

const StyledSearch = styled(Search)`
  margin-bottom: 2rem;
`;

const SearchProduct = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchHandler = (e) => {
    setSearchTerm(e.currentTarget.value);
    props.refresh(e.currentTarget.value);
  };

  return (
    <div>
      <StyledSearch
        placeholder="이곳에 입력하세요"
        onChange={searchHandler}
        value={searchTerm}
      ></StyledSearch>
    </div>
  );
};

export default SearchProduct;
