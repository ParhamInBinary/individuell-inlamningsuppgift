import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it } from 'vitest';

import App from '../src/App';

describe('Searchbar', () => {
  it('should render searchbar', async () => {
    render(<App />);
    const searchBar = screen.getByLabelText(/Search/i);
    expect(searchBar).toBeInTheDocument();
  });

  it('should render searchBtn', () => {
    render(<App />);
    const searchBtn = screen.getByRole('button', { name: /Search/i });
    expect(searchBtn).toBeInTheDocument();
  });

  it('should reset searchbar after searchBtn is clicked', async () => {
    render(<App />);
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
