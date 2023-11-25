import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it } from 'vitest';

import App from '../src/App';

describe('App', () => {
  it('should render empty search error message on empty input', async () => {
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

    const emptySearchError = screen.queryByText('**Please enter a word**');
    await waitFor(() => expect(emptySearchError).toBeInTheDocument());
  });
});
