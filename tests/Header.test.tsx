import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { Header } from '../src';

describe('Header', () => {
  it('should render header', () => {
    render(<Header />);
    const header = screen.getByText('Dictionary');
    expect(header).toBeInTheDocument();
  });
});
