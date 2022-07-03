import { render, screen } from '@testing-library/react';
import React from 'react';
import RelatedProducts from './RelatedProducts.jsx';

describe('Related Products test', () => {
    it('testing the test - Related', () => {
    render(<RelatedProducts />);
        expect(true).toBe(true)
    });
});