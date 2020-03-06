import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import CharacterList from '~/components/CharacterList';

describe('CharactersList component', () => {
  it('there should be ten elements', () => {
    const { getByTestId, getByText } = render(<CharacterList />);

    fireEvent.click(getByText('Add'));

    expect(getByTestId('character-list')).toContainElement(getByText('10'));
  });
})