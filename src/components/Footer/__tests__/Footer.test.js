import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe(("Testing <Footer/>"), () => {
    test(("Testing Footer component with given params"), () => {
        render(<Footer website="https://www.publicissapient.com/" company="Publicis Sapient"/>);

        const footerWebsite = screen.getByText(/www/i);
        expect(footerWebsite).toBeInTheDocument();

        const footerCompany = screen.getByText(/Publicis Sapient/i);
        expect(footerCompany).toBeInTheDocument();
    })
})