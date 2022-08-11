import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter component tests', () => {
    test('renders counter button', () => {
        render(<Counter />);
        const button = screen.getByText(/Clicked/);
        expect(button).toBeInTheDocument();
    });

    test('updates count on click', () => {
        render(<Counter />);
        const button = screen.getByText(/Clicked/);
        fireEvent.click(button);
        fireEvent.click(button);
        expect(button.textContent).toBe('Clicked 2 Times!');
    });
});

