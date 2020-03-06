import React from 'react';
import { render } from '@testing-library/react';

import SWProvider from '~/context/Context';

describe('CharactersList component', () => {
  it('there should be ten elements', () => {
    const { getAllByText } = render(<SWProvider />);

    console.log(getAllByText);
  });
})