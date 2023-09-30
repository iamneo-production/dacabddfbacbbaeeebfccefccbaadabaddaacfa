import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator Component', () => {
  it('renders Calculator without crashing', () => {
    render(<Calculator />);
  });

  it('displays the initial result as 0', () => {
    const { getByTestId } = render(<Calculator />);
    const resultDisplay = getByTestId('result-display');
    expect(resultDisplay).toHaveTextContent('0');
  });

  it('can perform addition', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    const twoButton = getByText('2');
    const addButton = getByText('+');
    const threeButton = getByText('3');
    const equalsButton = getByText('=');
    fireEvent.click(twoButton);
    fireEvent.click(addButton);
    fireEvent.click(threeButton);
    fireEvent.click(equalsButton);
    const resultDisplay = getByTestId('result-display');
    expect(resultDisplay).toHaveTextContent('5');
  });

  it('can perform subtraction', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    const fiveButton = getByText('5');
    const subtractButton = getByText('-');
    const twoButton = getByText('2');
    const equalsButton = getByText('=');
    fireEvent.click(fiveButton);
    fireEvent.click(subtractButton);
    fireEvent.click(twoButton);
    fireEvent.click(equalsButton);
    const resultDisplay = getByTestId('result-display');
    expect(resultDisplay).toHaveTextContent('3');
  });

  // Add more test cases for multiplication, division, and other calculator features.

  it('clears the result when Clear button is clicked', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    const fiveButton = getByText('5');
    const clearButton = getByText('C');
    fireEvent.click(fiveButton);
    fireEvent.click(clearButton);
    const resultDisplay = getByTestId('result-display');
    expect(resultDisplay).toHaveTextContent('0');
  });

  it('can perform Multiplication', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    const fiveButton = getByText('5');
    const mulButton = getByText('*');
    const twoButton = getByText('2');
    const equalsButton = getByText('=');
    fireEvent.click(fiveButton);
    fireEvent.click(mulButton);
    fireEvent.click(twoButton);
    fireEvent.click(equalsButton);
    const resultDisplay = getByTestId('result-display');
    expect(resultDisplay).toHaveTextContent('10');
  });
   
  
  it('can perform Division',()=>{
     const {getByText,getByTestId} = render(<Calculator/>);
     const fiveButton = getByText('10');
     const divButton = getByText('/');
     const twoButton=getByText('2');
     const equalsButton = getByText('=');
     fireEvent.click(fiveButton);
     fireEvent.click(divButton);
     fireEvent.click(twoButton);
     fireEvent.click(equalsButton);
     const resultDisplay=getByText('result-display');
     expect(resultDisplay).toHaveTextContent('5');
  })

});
