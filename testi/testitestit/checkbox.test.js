import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Cb from '../testitestit/checkbox';

describe("<App />", () => {

    test('render component', () => {
        render(<Cb />);
        const checkbox = screen.getByTestId("cbShowHide");
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();
        expect(screen.queryByTestId("box")).not.toBeInTheDocument();
    });
    test('toggle element by selecting checkbox', () => {
        render(<Cb />);
        const checkbox = screen.getByTestId("cbShowHide");
        // Execute the click event of the checkbox
        userEvent.click(checkbox);
        expect(checkbox).toBeChecked();
        expect(screen.queryByTestId("box")).toBeInTheDocument();
        // Execute the click event again
        userEvent.click(checkbox);
        expect(checkbox).not.toBeChecked();
        expect(screen.queryByTestId("box")).not.toBeInTheDocument();
    });

});