import React from 'react'

import { shallow, mount } from 'enzyme'

import { PageSize } from './PageSize'

// integracyjne:

// jeśli wybrane np. size 10, to liczba elementów wyświetlanych w TableContainer <= 10

// unity:

// - [low] czy wszystkie rozmiary wyświetlone
// - default size // sprawdzenie klasy CSS jaki rozmiar obecnie
// - [high] jak kliknę dany rozmiar, to czy się zmieni
// - callback wywołany po kliknięciu w rozmiar inny niż aktualny
// - callback nie wywołany po kliknięciu w aktualny rozmiar

expect.extend({
  toContainAll: (actual, expectedItems) => {
    const pass = expectedItems.every(el => actual.includes(el))
    const message = () =>
`Miało być inaczej typie!
Dał(e/a)ś: ${ actual }
A miało być: ${expectedItems}`

    return {
      pass,
      message,
    }
  }
})

describe('PageSize', () => {
  it('should display all availbale sizes', () => {
    const sizes = [10, 25, 50]
    const wrapper = shallow(<PageSize availableSizes={sizes} />)

    // expect(sizes.every(el => wrapper.text().includes(el + ''))).toBeTruthy()
    expect(wrapper.text()).toContainAll(sizes)
  })

  const getBtnByLabel = (wrapper, label) => wrapper.find('span')
    .filterWhere(node => node.text().includes(label))

  it('should invoke callback function when clicked', () => {
    const spy = jest.fn()
    const sizes = [10, 25, 50]
    const wrapper = shallow(<PageSize
        availableSizes={sizes}
        onChange={spy} />)

    getBtnByLabel(wrapper, '25').simulate('click')

    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith(25)
  })

  it('should invoke callback only if new size is different than old one', () => {
    const spy = jest.fn()
    const sizes = [10, 25, 50]
    const wrapper = mount(<PageSize
        availableSizes={sizes}
        onChange={spy} />)
    
    getBtnByLabel(wrapper, '25').simulate('click')

    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenLastCalledWith(25)

    getBtnByLabel(wrapper, '10').simulate('click')

    expect(spy).toHaveBeenCalledTimes(2)
    expect(spy).toHaveBeenLastCalledWith(10)

    getBtnByLabel(wrapper, '10').simulate('click')

    // FILTERED OUT!
    expect(spy).toHaveBeenCalledTimes(2)
  })
})
