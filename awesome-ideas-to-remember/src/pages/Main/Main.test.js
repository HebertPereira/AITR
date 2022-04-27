import { render, screen } from '@testing-library/react';
import React from 'react';

import Main from './Main';

describe('when rendered verify component', () => {
  test('should verify child exists', () => {
    render(<Main />);

    expect(screen.getByTestId('search-bar-test')).toBeInTheDocument();
  });
});
