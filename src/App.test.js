import { render, screen } from '@testing-library/react';
import App from './App';

test('blocks the root page', () => {
  window.history.pushState({}, '', '/');

  render(<App />);

  expect(screen.getByText(/resume page unavailable/i)).toBeInTheDocument();
});

test('renders a profile-specific resume route', () => {
  window.history.pushState({}, '', '/data-engineer');

  render(<App />);

  expect(screen.getByText(/rishabh mahajan/i)).toBeInTheDocument();
});
