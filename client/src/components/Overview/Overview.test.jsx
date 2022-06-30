import { render, screen } from '@testing-library/react';
import React from 'react';
import Overview from './Overview.jsx';

describe('Overview component is existing', () => {
    it('testing component existance', () => {
    render(<Overview />);
        expect(true).toBe(true)
    });
});