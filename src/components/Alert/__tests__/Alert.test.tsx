import { render, screen } from "@testing-library/react";
import Alert from "../Alert";

describe(("Testing <Alert />"), () => {
    test(("Testing danger alert message"), () => {
        render(<Alert type="danger" message="danger alert message"/>)
        screen.getByText(/danger alert message/i)
    })

    test(("Testing info alert message"), () => {
        render(<Alert type="info" message="info alert message"/>)
        screen.getByText(/info alert message/i)
    })

    test(("Testing success alert message"), () => {
        render(<Alert type="success" message="success alert message"/>)
        screen.getByText(/success alert message/i)
    })

    test(("Testing any other alert message"), () => {
        render(<Alert type="test-alert" message="test alert message"/>)
        screen.getByText(/alert not working/i)
    })

    test(("Testing any other alert random message"), () => {
        render(<Alert type="test-alert-random" message="test alert random message"/>)
        screen.getByText(/alert not working/i)
    })
})