import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import SearchBar from './SeachBar';

describe('when rendered verify child components', () => {
  test('should verify input check', () => {
    render(<SearchBar />);
    const input = screen.getByTestId('input-test');
    expect(input.checked).toEqual(false);
    fireEvent(
      screen.getByTestId('input-test'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    );

    expect(screen.getByTestId('input-test')).toBeChecked();
  });

  test('should verify input decription', () => {
    render(<SearchBar />);

    expect(screen.getByText('Buscar somente em tags')).toBeInTheDocument();
  });
});
