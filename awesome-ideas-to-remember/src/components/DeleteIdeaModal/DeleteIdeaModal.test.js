import { render, screen } from '@testing-library/react';
import React from 'react';

import DeleteIdeaModal from './DeleteIdeaModal';

describe('when rendered verify child components', () => {
  test('should verify x-button', () => {
    render(<DeleteIdeaModal isOpen onRequestClose={() => null} />);
    const buttonX = screen.getByTestId('delete-idea-x-button-test');
    buttonX.focus();

    expect(buttonX).toHaveFocus();
    expect(buttonX).toBeInTheDocument();
  });
});
