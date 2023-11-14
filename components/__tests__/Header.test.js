import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('renders the header component', () => {
    render(<Header />);
    expect(screen.getByText('My Simple Blog')).toBeInTheDocument();
  });
});
