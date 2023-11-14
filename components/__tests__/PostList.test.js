// components/__tests__/PostList.test.js
import { render, screen } from '@testing-library/react';
import PostList from '../PostList';

// Mocking fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      { id: 1, title: 'Test Post 1', body: 'This is the first test post.' },
      { id: 2, title: 'Test Post 2', body: 'This is the second test post.' }
    ])
  })
);

describe('PostList', () => {
  it('renders posts', async () => {
    render(<PostList />);
    const firstPostTitle = await screen.findByText('Test Post 1');
    const secondPostTitle = await screen.findByText('Test Post 2');
    expect(firstPostTitle).toBeInTheDocument();
    expect(secondPostTitle).toBeInTheDocument();
  });

  // Reset fetch mock after tests
  afterEach(() => {
    jest.resetAllMocks();
  });
});
