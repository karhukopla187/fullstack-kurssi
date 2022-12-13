import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';

describe("<App />", () => {

    test('render component', () => {
        render(<App />);
        const checkbox = screen.getByTestId("cbShowHide");
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();
        expect(screen.queryByTestId("box")).not.toBeInTheDocument();
    });
    test('toggle element by selecting checkbox', () => {
        render(<App />);
        const checkbox = screen.getByTestId("cbShowHide");
        //klikkaus
        userEvent.click(checkbox);
        expect(checkbox).toBeChecked();
        expect(screen.queryByTestId("box")).toBeInTheDocument();
        //toinen klikkaus
        userEvent.click(checkbox);
        expect(checkbox).not.toBeChecked();
        expect(screen.queryByTestId("box")).not.toBeInTheDocument();
    });

});