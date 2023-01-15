import { Counter } from "./counter.component";
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

// describe('Counter', () => {
//   it('Counter display corrent initial value', () => {

//     const {getByTestId} = render(<Counter initialValue={0}/>)

//     const currentValue = Number(getByTestId('count').textContent)

//     expect(currentValue).toEqual(0)
//   })
// })


// describe('App', () => {
//   it('Render app', () => {
//     render(<Counter initialValue={0} />)

//     screen.debug()
//   })
// })

// it('App', () => {
//   const {rerender} = render(<Counter initialValue={0}/>)
//   rerender(<Counter initialValue={10} />)
// })

// test('render a counter', () => {
//   const {asFragment, getByText} = render(<Counter initialValue={2}/>)
//   expect(getByText('2'))
//   expect(asFragment()).toMatchSnapshot(`
//   <h3 data-testId="count">2</h3>`)
// })

describe('Render', () => {
  it('Render counter component', () => {

    const {getByTestId} = render(<Counter initialValue={0}/>)

    fireEvent.dblClick(screen.getByText('Add 1'))

    const currentValue = Number(getByTestId('count').textContent)

    expect(currentValue).toEqual(1)

  })
})