import { render, screen } from '@testing-library/react'
import NavBar from '../Nav-Bar';

describe("Testing <LoginForm />", () => {

    test("Testing the login form", async () => {
        render(<NavBar/>)

        const navbarBrand = screen.getByText(/brand name/i);
        expect(navbarBrand).toBeInTheDocument();
        expect(navbarBrand.closest('a')).toHaveAttribute('href', '#home')

        const navbarHome = screen.getByText(/home/i);
        expect(navbarHome).toBeInTheDocument();
        expect(navbarHome.closest('a')).toHaveAttribute('href', '/')

        const navbarAbout = screen.getByText(/about us/i);
        expect(navbarAbout).toBeInTheDocument();
        expect(navbarAbout.closest('a')).toHaveAttribute('href', '/about-us')

        const navbarContact = screen.getByText(/contact us/i);
        expect(navbarContact).toBeInTheDocument();
        expect(navbarContact.closest('a')).toHaveAttribute('href', '/contact-us')

        const navbarDropdown = screen.getByText(/dropdown/i);
        expect(navbarDropdown).toBeInTheDocument();
    })
})