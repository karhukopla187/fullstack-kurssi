import * as React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Testailu from './testistestailu';

describe('Testailu', () => {
  it('renders App component', async () => {
    render(<Testailu />);

    screen.debug();

    //React Testing Library is used to interact with your React components like a human being. 
    //What a human being sees is just rendered HTML from your React components, 
    //so that's why you see this HTML structure as output rather than two individual React components.


    //getByText
    // implicit assertion
    // because getByText would throw error
    // if element wouldn't be there
    screen.getByText('Search:');

    // explicit assertion
    // recommended
    expect(screen.getByText('Search:')).toBeInTheDocument();

    //getByRole
    //getByRole: it shows all the selectable roles if you provide a role that isn't available in the rendered component's HTML:
    screen.getByRole('');

    expect(screen.getByRole('textbox')).toBeInTheDocument();

    //getByLabelText: <label for="search" />
    //getByPlaceholderText: <input placeholder="Search" />
    //getByAltText: <img alt="profile" />
    //getByDisplayValue: <input value="JavaScript" />

    //For any element that isn't there yet but will be there eventually, use findBy over getBy or queryBy.
    //If you assert for a missing element, use queryBy. Otherwise default to getBy.

    //queryBy

    //every time you are asserting that an element isn't there, use queryBy
    //queryByText
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
    expect(screen.queryByText(/Signed in as/)).toBeNull();
    //queryByRole
    //queryByLabelText
    //queryByPlaceholderText
    //queryByAltText
    //queryByDisplayValue

    //The findBy search variant is used for asynchronous elements which will be there eventually
    //findByText
    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();

    // wait for the user to resolve
    await screen.findByText(/Signed in as/);

    //findByRole
    //findByLabelText
    //findByPlaceholderText
    //findByAltText
    //findByDisplayValue


    //All search variants can be extended with the All word:
    //getAllBy
    //queryAllBy
    //findAllBy
    //all of them return an array of elements and can be associated with the search types again.

    /*
    React Testing Library extends this API with its own assertive functions like toBeInTheDocument. 
    All these assertive functions come in an extra package which are already set up for you when using create-react-app.

    toBeDisabled
    toBeEnabled
    toBeEmpty
    toBeEmptyDOMElement
    toBeInTheDocument
    toBeInvalid
    toBeRequired
    toBeValid
    toBeVisible
    toContainElement
    toContainHTML
    toHaveAttribute
    toHaveClass
    toHaveFocus
    toHaveFormValues
    toHaveStyle
    toHaveTextContent
    toHaveValue
    toHaveDisplayValue
    toBeChecked
    toBePartiallyChecked
    toHaveDescription
    */

    /*
    The fireEvent function takes an element (here the input field by textbox role) and an event (here an event which has the value "JavaScript"). 
    The debug function's output should show the HTML structure before and after the event; 
    and you should see that the new value of the input field (here "JavaScript") gets rendered appropriately.
    */
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });

    expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument();

    //As alternative, we can also literally wait for an asynchronous update to happen with React Testing Library's waitFor function:
    waitFor(() =>
      expect(
        screen.getByText(/Searches for JavaScript/)
      ).toBeInTheDocument()
    );



    //the userEvent API mimics the actual browser behavior more closely than the fireEvent API. 
    //For example, a fireEvent.change() triggers only a change event 
    //whereas userEvent.type triggers a change event, but also keyDown, keyPress, and keyUp events.
    await userEvent.type(screen.getByRole('textbox'), 'JavaScript');
    //Whenever possible, use userEvent over fireEvent when using React Testing Library


  });
});


//fireEvent
describe('Search', () => {
  it('calls the onChange callback handler', () => {
    // Jest
    // const onChange = jest.fn();
    // Vitest
    const onChange = vi.fn();

    render(
      <Search value="" onChange={onChange}>
        Search:
      </Search>
    );

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});

//userEvent
describe('Search', () => {
  it('calls the onChange callback handler', async () => {
    // Jest
    // const onChange = jest.fn();
    // Vitest
    const onChange = vi.fn();

    render(
      <Search value="" onChange={onChange}>
        Search:
      </Search>
    );

    await userEvent.type(screen.getByRole('textbox'), 'JavaScript');

    expect(onChange).toHaveBeenCalledTimes(10);
  });
});