import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { makeServer } from './mirage-setup';

let server = undefined;

beforeEach(() => {
  server = makeServer();
  server.logging = false;
});

afterEach(() => {
  server.shutdown();
});

test('renders the app', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Recoil Playground/i);
  expect(linkElement).toBeInTheDocument();
});
