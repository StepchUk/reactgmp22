import React from 'react';
import { render, screen } from '@testing-library/react';
import MyButton from './MyButton';

describe('MyButton component test', () => {
  it('Gray button rendered', () => {
    render(<MyButton className="button__red">Red Button</MyButton>);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Red Button')).toBeInTheDocument();
  });

  it('MyButton snapshot', () => {
    const myBytton = render(<MyButton className="button__gray-blurred">Gray Button</MyButton>);

    expect(myBytton).toMatchSnapshot();
  });
});
