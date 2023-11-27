import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it } from 'vitest';

import App from '../src/App';

describe('Result', () => {
  it('should render result when word is searched', async () => {
    render(<App />);
    const user = userEvent.setup();

    // Find searchbar and recognize input
    const searchBar = screen.getByLabelText(/Search/i);
    expect(searchBar).toBeInTheDocument();
    expect(searchBar).toHaveValue('');
    await user.type(searchBar, 'hello');
    await waitFor(() => {
      expect(searchBar).toHaveValue('hello');
    });

    // Find and click searchBtn, reset searchbar
    const searchBtn = screen.getByRole('button', { name: /Search/i });
    expect(searchBtn).toBeInTheDocument();
    await user.click(searchBtn);
    await waitFor(() => expect(searchBar).toHaveValue(''));

    // Find result of searched word
    const resultCard = await waitFor(() => screen.findByTestId('resultCard'));
    expect(resultCard).toBeInTheDocument();

    // Find various info of the searched word
    expect(screen.getByText('hello')).toBeInTheDocument();
    expect(screen.getAllByTestId('phonetic')).toHaveLength(2);
    expect(screen.getByTestId('TextToSpeech')).toBeInTheDocument();
    expect(screen.getByText('noun')).toBeInTheDocument();
    expect(screen.getByText('greeting')).toBeInTheDocument();
    expect(screen.getByText(/bye/i)).toBeInTheDocument();
    expect(
      screen.getByText(/"Hello!" or an equivalent greeting./i)
    ).toBeInTheDocument();
    expect(screen.getByText(/How may I help you/i)).toBeInTheDocument();
  });
});
