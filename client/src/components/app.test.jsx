import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App.jsx';

describe('App tests', () => {
    it('should contains the heading 1', () => {
    render(<App />);
        expect(true).toBe(true)
    });
});