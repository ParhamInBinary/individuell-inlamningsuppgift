import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { describe, expect, it } from 'vitest';

import { SearchBar } from '../src';

const MockSearchBar = () => {
  const [searchedWord, setSearchedWord] = useState<string>('');
  const mockHandleSearch = () => {};
  return (
    <>
      <SearchBar
        searchedWord={searchedWord}
        setSearchedWord={setSearchedWord}
        handleSearch={mockHandleSearch}
      />
    </>
  );
};

describe('Searchbar', () => {
  it('should render searchbar', async () => {
    render(<MockSearchBar />);
    const searchBar = screen.getByLabelText(/Search/i);
    expect(searchBar).toBeInTheDocument();
  });

  it('should render searchBtn', () => {
    render(<MockSearchBar />);
    const searchBtn = screen.getByRole('button', { name: /Search/i });
    expect(searchBtn).toBeInTheDocument();
  });

  it('should reset searchbar after searchBtn is clicked', async () => {
    render(<MockSearchBar />);
    const user = userEvent.setup();

    // Find and click searchBtn
    const searchBtn = screen.getByRole('button', { name: /Search/i });
    expect(searchBtn).toBeInTheDocument();
    await user.click(searchBtn);

    // Find searchbar and assert it to be empty
    const searchBar = screen.getByLabelText(/Search/i);
    expect(searchBar).toBeInTheDocument();
    await waitFor(() => expect(searchBar).toHaveValue(''));
  });
});
