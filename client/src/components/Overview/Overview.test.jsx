import React from 'react';
import StyleSelector from './StyleSelector.jsx';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Overview from './Overview.jsx';
import ProductInfo from './ProductInfo.jsx';
import sampleData from '../../sampleData/sampleData.js';



describe('Overview component rendering', () => {
    let state = {
        product: sampleData.products,
        item: sampleData.styles[0].results[0]
      };

    describe('renders ProductInfo component', () => {
        beforeEach(() => {
         act(() => render(<ProductInfo product={state.product[0]} item={state.item}/>));
        });
        it('should show category', () => {
          expect(screen.getByText('Kicks', {exact: false})).toBeInTheDocument();
        });
        it('should show product name', () =>{
          expect(screen.getByText('Heir Force Ones', {exact: false})).toBeInTheDocument();
        });
      });
});