import { render, screen } from '@testing-library/react';
import ShipList from './ShipList';

describe('ShipList', () => {
  it('renders empty state when no ships', () => {
    render(<ShipList ships={[]} />);
    expect(screen.getByText('No ships found')).toBeInTheDocument();
  });
});