import { render } from "@testing-library/react"
import { Button } from "../components/atoms/Button/Button"
import '@testing-library/jest-dom'

test("Render button", () => {
  render(<Button>TEST</Button>)
  expect(true).toBeTruthy()
})