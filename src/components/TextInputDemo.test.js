import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './TextInputDemo';

test('renders the app', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Recoil Playground/i);
  expect(linkElement).toBeInTheDocument();
});

test('count renders', () => {
  const { getByTestId } = render(<App />);
  const inputField = getByTestId('text-input');
  fireEvent.input(inputField, { target: { value: '123' } });

  const textRender = getByTestId('text-render');
  expect(textRender).toHaveTextContent('Text: 123');

  const characterCount = getByTestId('character-count');
  expect(characterCount).toHaveTextContent('Character count: 3');
});
