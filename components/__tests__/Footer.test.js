import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  it('renders the footer component', () => {
    render(<Footer />);
    expect(screen.getByText('© 2023 My Simple Blog')).toBeInTheDocument();
  });
});
