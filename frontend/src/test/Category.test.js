import React from 'react'
import { fireEvent, render , waitForElement, getByText} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SetCategory from '../pages/Category'

describe('Testes para o componente SetCagegory', () => {
  it('Quando uma categoria é enviada lança uma mensagem',  async () => {
    const { getByTestId } = render(<SetCategory/>)
    const fieldNode = await waitForElement(
      () => getByTestId('form-field')
    )

    fireEvent.change(fieldNode, {target : {value : 'cerveja'}})
    expect(fieldNode.value).toEqual('cerveja')

    const btnNode = await waitForElement(
      () => getByTestId('form-btn')
    )
    fireEvent.click(btnNode)
    
    const tableNode = await waitForElement(
      () => getByTestId('text')
    )
    console.log(tableNode.innerHTML)
    expect(tableNode.innerHTML).toEqual('categoria cerveja cadastrada')

  })
  it('Quando uma categoria é enviada lança uma mensagem',  async () => {
    const { getByTestId } = render(<SetCategory/>)
    const fieldNode = await waitForElement(
      () => getByTestId('form-field')
    )

    fireEvent.change(fieldNode, {target : {value : 'pitu'}})
    expect(fieldNode.value).toEqual('pitu')

    const btnNode = await waitForElement(
      () => getByTestId('form-btn')
    )
    fireEvent.click(btnNode)
    
    const tableNode = await waitForElement(
      () => getByTestId('text')
    )
    console.log(tableNode.innerHTML)
    expect(tableNode.innerHTML).toEqual('categoria pitu cadastrada')

  })
  it('Quando uma categoria é enviada vazia lança nenhuma mensagem',  async () => {
    const { getByTestId } = render(<SetCategory/>)
    const fieldNode = await waitForElement(
      () => getByTestId('form-field')
    )
    fireEvent.change(fieldNode, {target : {value : ''}})
    expect(fieldNode.value).toEqual('')

    const btnNode = await waitForElement(
      () => getByTestId('form-btn')
    )
    fireEvent.click(btnNode)
    
    const tableNode = await waitForElement(
      () => getByTestId('text')
    )
    console.log(tableNode.innerHTML)
    expect(tableNode.innerHTML).toEqual('')
  })
})