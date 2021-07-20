import { render, screen } from '@testing-library/react';

import CustomCard from '../Card';
import { LEFT, RIGHT, TOP } from '../../../../types/constants';

describe("Testing <CustomeCard/>" , () =>{
    test(("Testing carOrientaion='center' background=1"), ()=>{
        let cardDetails = {
            image: "https://picsum.photos/200",
            title: "My Custom Card",
            body: (<span><h1>This is the body inside center tag</h1></span>)
        }
        render(<CustomCard cardDetails = {cardDetails} cardOrient={TOP} background={1}/>)

        const cardTitle = screen.getByText("My Custom Card")
        expect(cardTitle).toBeInTheDocument();

        const cardBody = screen.getByText(/This is the body inside center tag/i)
        expect(cardBody).toBeInTheDocument();
    })

    test(("Testing carOrientaion='center' background=2"), ()=>{
        let cardDetails = {
            image: "https://picsum.photos/200",
            title: "My Custom Card",
            body: (<span><h1>This is the body inside center tag</h1></span>)
        }
        render(<CustomCard cardDetails = {cardDetails} cardOrient={TOP} background={2}/>)

        const cardTitle = screen.getByText("My Custom Card")
        expect(cardTitle).toBeInTheDocument();

        const cardBody = screen.getByText(/This is the body inside center tag/i)
        expect(cardBody).toBeInTheDocument();
    })

    test(("Testing carOrientaion='left' background=1"), ()=>{
        let cardDetails = {
            image: "https://picsum.photos/200",
            title: "My Custom Card",
            body: (<span><h1>This is the body inside left tag</h1></span>)
        }
        render(<CustomCard cardDetails = {cardDetails} cardOrient={LEFT} background={1}/>)

        const cardTitle = screen.getByText("My Custom Card")
        expect(cardTitle).toBeInTheDocument();

        const cardBody = screen.getByText(/This is the body inside left tag/i)
        expect(cardBody).toBeInTheDocument();
    })

    test(("Testing carOrientaion='left' background=2"), ()=>{
        let cardDetails = {
            image: "https://picsum.photos/200",
            title: "My Custom Card",
            body: (<span><h1>This is the body inside left tag</h1></span>)
        }
        render(<CustomCard cardDetails = {cardDetails} cardOrient={LEFT} background={2}/>)

        const cardTitle = screen.getByText("My Custom Card")
        expect(cardTitle).toBeInTheDocument();

        const cardBody = screen.getByText(/This is the body inside left tag/i)
        expect(cardBody).toBeInTheDocument();
    })

    test(("Testing carOrientaion='right' background=1"), ()=>{
        let cardDetails = {
            image: "https://picsum.photos/200",
            title: "My Custom Card",
            body: (<span><h1>This is the body inside right tag</h1></span>)
        }
        render(<CustomCard cardDetails = {cardDetails} cardOrient={RIGHT} background={1}/>)

        const cardTitle = screen.getByText("My Custom Card")
        expect(cardTitle).toBeInTheDocument();

        const cardBody = screen.getByText(/This is the body inside right tag/i)
        expect(cardBody).toBeInTheDocument();
    })

    test(("Testing carOrientaion='right' background=2"), ()=>{
        let cardDetails = {
            image: "https://picsum.photos/200",
            title: "My Custom Card",
            body: (<span><h1>This is the body inside right tag</h1></span>)
        }
        render(<CustomCard cardDetails = {cardDetails} cardOrient={RIGHT} background={2}/>)

        const cardTitle = screen.getByText("My Custom Card")
        expect(cardTitle).toBeInTheDocument();

        const cardBody = screen.getByText(/This is the body inside right tag/i)
        expect(cardBody).toBeInTheDocument();
    })
});
