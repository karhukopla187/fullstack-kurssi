import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from "@testing-library/user-event"
import axios from 'axios'
import App from './App.js'

jest.mock('axios')

describe("<App />", () => {
        test('axios mock', async () => {
            const stories = [
                { objectID: '1', title: 'tulos1' },
                { objectID: '2', title: 'tulos2' },
            ]
            axios.get.mockImplementationOnce(() =>
                Promise.resolve({ data: { hits: stories } })
            )
            render(<App />)
            await userEvent.click(screen.getByRole('button'))
            expect(items).toHaveLength(2)            
            expect(screen.getAllByRole('listitem')).toHaveLength(2)
        })

        test('render component', () => {
            render(<App />);
            const checkbox = screen.getByTestId("cbShowHide")
            expect(checkbox).toBeInTheDocument()
            expect(checkbox).not.toBeChecked()
            expect(screen.queryByTestId("box")).not.toBeInTheDocument()
        })

        test('toggle text by selecting checkbox', () => {
            render(<App />)
            const checkbox = screen.getByTestId("cbShowHide")
            //klikkaus
            userEvent.click(checkbox);
            expect(checkbox).toBeChecked()
            expect(screen.queryByTestId("box")).toBeInTheDocument()
            //toinen klikkaus
            userEvent.click(checkbox)
            expect(checkbox).not.toBeChecked()
            expect(screen.queryByTestId("box")).not.toBeInTheDocument()
        })
    })