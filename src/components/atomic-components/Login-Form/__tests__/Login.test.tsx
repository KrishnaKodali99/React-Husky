import { render, screen } from '@testing-library/react'
import LoginForm from '../Login-Form'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

describe("Testing <LoginForm />", () => {
    const LoginSubmit = (values: any): any => {
        console.log(values, "Hello");
    }

    test("Testing the login form", async () => {
        render( <LoginForm loginSubmitHandler={LoginSubmit} />)
        
        const email = screen.getByLabelText(/email/i);
        expect(email).toBeInTheDocument();

        const password = screen.getByLabelText(/password/i);
        expect(password).toBeInTheDocument();

        const btnSubmit = screen.getByRole('button', {name: /Submit/i})
        expect(btnSubmit).toBeInTheDocument();

        await act( async () => {
            userEvent.type(screen.getByLabelText(/email/i), 'sapient@publicisgroupe.net')
            userEvent.type(screen.getByLabelText(/password/i), 'PublicisSapient')

        });

    })
})