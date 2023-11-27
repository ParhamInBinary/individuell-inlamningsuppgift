import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it } from 'vitest';

import App from '../src/App';

describe('App', () => {
  it('should render "empty search" error message on empty input', async () => {
    render(<App />);
    const user = userEvent.setup();

    // Find searchbar
    const searchBar = screen.getByLabelText(/Search/i);
    expect(searchBar).toBeInTheDocument();
    expect(searchBar).toHaveValue('');

    // Find and click searchBtn
    const searchBtn = screen.getByRole('button', { name: /Search/i });
    expect(searchBtn).toBeInTheDocument();
    await user.click(searchBtn);

    const emptySearchError = await screen.findByText('**Please enter a word**');
    await waitFor(() => expect(emptySearchError).toBeInTheDocument());
  });

  it('should render "word not found" error message on giberish input', async () => {
    render(<App />);
    const user = userEvent.setup();

    // Find searchbar
    const searchBar = screen.getByLabelText(/Search/i);
    expect(searchBar).toBeInTheDocument();
    expect(searchBar).toHaveValue('');

    // Recognize searchedbar typed into
    await user.type(searchBar, 'asd');
    await waitFor(() => {
      expect(searchBar).toHaveValue('asd');
    });

    // Find and click searchBtn
    const searchBtn = screen.getByRole('button', { name: /Search/i });
    expect(searchBtn).toBeInTheDocument();
    await user.click(searchBtn);
    await waitFor(() => expect(searchBar).toHaveValue(''));

    const wordNotFoundError = await screen.findByText('**Word not found**');
    await waitFor(() => expect(wordNotFoundError).toBeInTheDocument());
  });
});
