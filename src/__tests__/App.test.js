import api from '~/service/api';

describe('CharactersList component', () => {
  it('there should be ten elements', async () => {
    const response = await api.get('people/');
    
    expect(response.data.results).toHaveLength(10);
  });
})