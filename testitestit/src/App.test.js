import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from "@testing-library/user-event"
import App from './App.js'

jest.mock('axios')

describe("<App />", () => {

        //epäonnistuu koska axios
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
            render(<App />)
            const checkbox = screen.getByTestId("cb")
            expect(checkbox).toBeInTheDocument()
            expect(checkbox).not.toBeChecked()
            expect(screen.queryByTestId("box")).not.toBeInTheDocument()
        })

        test('checkbox togglaus', () => {
            render(<App />)
            const checkbox = screen.getByTestId("cb")
            //klikkaus
            userEvent.click(checkbox);
            expect(checkbox).toBeChecked()
            expect(screen.queryByTestId("box")).toBeInTheDocument()
            //toinen klikkaus
            userEvent.click(checkbox)
            expect(checkbox).not.toBeChecked()
            expect(screen.queryByTestId("box")).not.toBeInTheDocument()
            render(<Jokutoinen />)
            expect.jotain
        })
    })