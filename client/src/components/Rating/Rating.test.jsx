import { render, screen } from '@testing-library/react';
import React from 'react';
import Rating from './Rating.jsx';

describe('Rating test', () => {
    it('testing the test - Rating', () => {
    render(<Rating />);
        expect(true).toBe(true)
    });
});