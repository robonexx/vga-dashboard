import React, { ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import SearchIcon from '../icons/SearchIcon';

const Form = styled.form`
  max-width: 29.5rem;
  height: 3.125rem;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 30px;
  background-color: #646e6d33;

  @media screen and (min-width: 769px) {
    width: 29.5rem;
  }

  .submit_btn {
    margin-left: 1rem;
    margin-top: 0.5rem;
    padding: 1rem;
    position: relative;
    background: transparent;
    color: #ffffff;
    border: 0;
    border-radius: 50%;
    outline: none;
    font-size: 1.6rem;
    filter: drop-shadow(1px 1px 4px #121212);
  }
`;

const Input = styled.input`
  margin: 0;
  padding: 4px 6px;
  font-size: 0.75rem;
  border: 0;
  border-radius: 5px;
  height: 100%;
  outline: none;
  color: #fff;
  background-color: transparent;

  &::placeholder {
    color: #fff;
  }
`;

type SearchProps = {
    searchQuery: string; 
    handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleOnSubmit: (event: FormEvent) => void;
  };

const SearchBar: React.FC<SearchProps> = ({
  handleOnChange,
  handleOnSubmit,
  searchQuery,
}) => {
  return (
    <>
      <Form onSubmit={handleOnSubmit} id='form1'>
        <button className='submit_btn' type='submit' form='form1'>
          <SearchIcon />
        </button>
        <Input
          className='search'
          type='text'
          placeholder='Search anything... '
          onChange={handleOnChange}
          value={searchQuery}
        />
      </Form>
    </>
  );
};

export default SearchBar;
