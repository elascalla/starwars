import React from 'react';
import { render } from '@testing-library/react';

import { Characters } from '~/pages/Characters';

describe('CharactersList component', () => {
  it('there should be ten elements', () => {
    const { getByText, getByTestId } = render(<Characters />);

    expect(getByTestId('characters-list')).toContainElement(getByText('Luke Skywalker'));
  });
})