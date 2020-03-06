import React from 'react';
import { render } from '@testing-library/react';

import CharacterList from '~/components/CharacterList';

describe('CharactersList component', () => {
  it('there should be ten elements', async () => {
    const { getByTestId, getByText } = render(<CharacterList />);

    expect(getByTestId('character-list')).toContainElement(getByText('0'));
  });
})