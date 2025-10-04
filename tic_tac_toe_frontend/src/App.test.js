import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  expect(screen.getByText(/Real-time Tic Tac Toe/i)).toBeInTheDocument();
});

test('X starts then O plays next', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button', { name: /Square/i });
  fireEvent.click(buttons[0]);
  expect(buttons[0].textContent).toBe('X');
  fireEvent.click(buttons[1]);
  expect(buttons[1].textContent).toBe('O');
});

test('reset board clears squares', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button', { name: /Square/i });
  fireEvent.click(buttons[0]);
  fireEvent.click(screen.getByRole('button', { name: /Reset Board/i }));
  expect(buttons[0].textContent).toBe('');
});
