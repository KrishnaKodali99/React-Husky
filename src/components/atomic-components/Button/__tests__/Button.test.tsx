import { fireEvent, render, screen } from '@testing-library/react';

import CustomButton from '../Button';
import {SUBMIT, SUCCESS, FAILURE} from '../../../../types/constants'

let btnOnClick = false
const mockFunc = () :any => {
    console.log({"Button":"CLICK"});
    btnOnClick = true
}

describe("Testing <Button />", () => {
    test('testing button with className=success', () => {
        render(<CustomButton action={mockFunc} caption={"Test Button"} usage={SUCCESS}/>);

        const btnCaption = screen.getByRole('button', {name: 'Test Button'})
        expect(btnCaption).toBeInTheDocument();
        
        fireEvent.click(btnCaption)
        expect(btnOnClick).toBe(true);
    });

    test('testing button with className=submit', () => {
        render(<CustomButton action={mockFunc} caption={"Test Button"} usage={SUBMIT}/>);

        const btnCaption = screen.getByRole('button', {name: 'Test Button'})
        expect(btnCaption).toBeInTheDocument();

        fireEvent.click(btnCaption)
        expect(btnOnClick).toBe(true);
    });

    test('testing button with className=failure', () => {
        render(<CustomButton action={mockFunc} caption={"Test Button"} usage={FAILURE}/>);
        
        const btnCaption = screen.getByRole('button', {name: 'Test Button'})
        expect(btnCaption).toBeInTheDocument();
        
        fireEvent.click(btnCaption)
        expect(btnOnClick).toBe(true);
    });

    test('testing button having action and not usage', () => {
        render(<CustomButton action={mockFunc} caption={"Test Button"} usage={""} />);
        
        const btnCaption = screen.getByRole('button', {name: 'Test Button'})
        expect(btnCaption).toBeInTheDocument();
        
        fireEvent.click(btnCaption)
        expect(btnOnClick).toBe(true);
    });

    test('testing button having caption', () => {
        render(<CustomButton action={() => {}} caption={"Test Button"} usage={""} />);
        
        const btnCaption = screen.getByRole('button', {name: 'Test Button'})
        expect(btnCaption).toBeInTheDocument();
        
        fireEvent.click(btnCaption)
        expect(btnOnClick).toBe(true);
    });
});