import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it } from 'vitest';

import App from '../src/App';

const mockWord = 'hello';

describe('App', () => {
  it('should render result when word is searched', async () => {
    render(<App />);
    const user = userEvent.setup();

    // Find searchbar and recognize input
    const searchBar = screen.getByLabelText(/Search/i);
    expect(searchBar).toBeInTheDocument();
    expect(searchBar).toHaveValue('');
    await user.type(searchBar, mockWord);
    await waitFor(() => {
      expect(searchBar).toHaveValue(mockWord);
    });

    // Find and click searchBtn, reset searchbar
    const searchBtn = screen.getByRole('button', { name: /Search/i });
    expect(searchBtn).toBeInTheDocument();
    await user.click(searchBtn);
    await waitFor(() => expect(searchBar).toHaveValue(''));

    // Find result of searched word
    const resultCard = await waitFor(() => screen.findByTestId('resultCard'));
    expect(resultCard).toBeInTheDocument();
  });
});
