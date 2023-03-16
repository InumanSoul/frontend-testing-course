import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import Contact from "./contact"


describe('Contact page form', () => {
  it('Form send successfully', () => {
    render(<MemoryRouter><Contact/></MemoryRouter>)
    const nameInput = screen.getByLabelText(/name/i)
    userEvent.type(nameInput, 'Jane Doe')
    const wishInput = screen.getByLabelText(/wish/i)
    userEvent.type(wishInput, 'Pass testing course')
    const message = screen.getByLabelText(/message/i)
    userEvent.type(message, 'I learned all the semantic rules!')
    const send = screen.getByText(/submit/i)
    userEvent.click(send)
    expect(screen.getByText(/your message was sended/i)).toBeInTheDocument()
  })
})