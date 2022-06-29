import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App.jsx';

describe('App test', () => {
    it('testing the test', () => {
    render(<App />);
        expect(true).toBe(true)
    });
});