import { render, screen } from '@testing-library/react';
import React from 'react';

import Card from './Card';

const mockIdeaData = {
  title: 'Travel to the moon',
  description: 'this idea is awesome, but i dont`t have idea to how do it.',
  tags: 'Moon,Nasa,Travel'
};

describe('when rendered verify Card component', () => {
  test('should verify component receive our props', () => {
    render(<Card idea={mockIdeaData} />);

    expect(screen.getByText('Travel to the moon')).toBeInTheDocument();
    expect(
      screen.getByText(
        'this idea is awesome, but i dont`t have idea to how do it.'
      )
    ).toBeInTheDocument();
    expect(screen.queryByTestId('tags-test').textContent).toBe(
      '#Moon, #Nasa, #Travel, '
    );
  });
});
