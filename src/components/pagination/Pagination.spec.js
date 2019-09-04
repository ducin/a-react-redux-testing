import React from 'react'

// ARRANGE - given
// ACT - when
// ASSERT - then

// props:
// - liczba stron
// - <<, <, >, >> - display or not
// - current page
// - onChange

/*

// ILE STRON WYŚWIETLONYCH
// PROPER NUMBERS DISPLAYED
- nie pokazuje 0, ani -1 ani powyżej maxa itp
- given: pages = 15, page = 1
  then: (1, 2, 3)
- given: pages = 15, page = 2
  then: (1, 2, 3, 4)
- given: pages = 15, page = 3
  then: (1, 2, 3, 4, 5)
- given: pages = 15, page = 15
  then: (13, 14 ,15)
- given: pages = 15, page = 14
  then: (12, 13, 14 ,15)
- given: pages = 15, page = 13
  then: (11, 12, 13, 14 ,15)

// CURRENT PAGE IS EMPHASIZED
- given: pages = 15, page = 1
  then: page 1 has class selected

// DISABLE
- current page is always disabled
- if pages = 1, page = 1, last, next, prev, frist are disabled, 

- if page = 1, first(<<) is disabled, prev(<) is disabled
- if page = 2, first(<<) is enabled, prev(<) is enabled

- if pages = 15, page = 15, last(>>) is disabled, next(>) is disabled
- if pages = 15, page = 14, last(>>) is enabled, next(>) is enabled

// CALLBACKS INVOKED - spy
- given: pages=15, page=7
  when: click 6
  then: called once with 6
- given: pages=15, page=7
  when: click 7
  then: not called
- given: pages=15, page=1
  when: click <
  then: not called
  when: click <<
  then: not called
  when: click >
  then: called once with 2
  when: click >>
  then: called once with 15 (called twice in total)
- given: pages=15, page=15
  when: click >
  then: not called
  when: click >>
  then: not called
  when: click <
  then: called once with 14
  when: click <<
  then: called once with 1 (called twice in total)

// FLOW
- given: pages = 15, current=13
    then: (11, 12, 13, 14, 15)
          page 13 has class selected
  when: click 14
  then: (12, 13, 14, 15)
        page 14 has class selected

// AKTUALIZACJA PAGINACJI PO ZMIANIE LICZBY STRON
// + RESET
- given: pages = 15, page = 7
  when: pages = 25
  then: page = 1
- given: pages = 15, page = 7
  when: click >>
  then: clicked once with 15
  when: pages = 25
        click >>
  then: clicked once with 25 (clicked twice in total)

*/

import { shallow } from 'enzyme'
import { Pagination } from './Pagination'

describe('Pagination', () => {

  const getButtonLabels = wrapper => wrapper
    .find('.page').map(w => w.text())

  describe('Proper pages displayed', () => {

    [{
      currentPage: 1, pageCount: 1, expectedDisplayed: ['1']
    }, {
      currentPage: 2, pageCount: 3, expectedDisplayed: ['1', '2', '3']
    }, {
      currentPage: 1, pageCount: 15, expectedDisplayed: ['1', '2', '3']
    }, {
      currentPage: 2, pageCount: 15, expectedDisplayed: ['1', '2', '3', '4']
    }, {
      currentPage: 3, pageCount: 15, expectedDisplayed: ['1', '2', '3', '4', '5']
    }, {
      currentPage: 15, pageCount: 15, expectedDisplayed: ['13', '14', '15']
    }, {
      currentPage: 14, pageCount: 15, expectedDisplayed: ['12', '13', '14', '15']
    }, {
      currentPage: 13, pageCount: 15, expectedDisplayed: ['11', '12', '13', '14', '15']
    }].forEach(({ currentPage, pageCount, expectedDisplayed }) => {
      it(`
      given: current = ${currentPage}, pages = ${pageCount}
      then: should display ${expectedDisplayed}`, () => {
        const wrapper = shallow(<Pagination
          currentPage={currentPage}
          pageCount={pageCount} />)
  
  
        
  
  
        expect(getButtonLabels(wrapper)).toEqual(expectedDisplayed)
      })
    })

  })

  describe('Current page', () => {
    it(`
    given: current = 1, pages = 15
    then: page 1 has class selected`, () => {
      const wrapper = shallow(<Pagination
        currentPage={1}
        pageCount={15} />)
      

      expect(wrapper.find('.page').at(0).hasClass('selected')).toBeTruthy()
      expect(wrapper.find('.selected').text()).toContain('1')
      expect(wrapper.find('.selected')).toHaveLength(1)
    })
  })

  const toString = (obj) => JSON.stringify(obj)

  describe('Callback gets invoked', () => {
    [{
      given: { currentPage: 7, pageCount: 15 },
      actions: [{
        when: { click: 6 },
        then: [{ calledTimes: 1 }, { lastCalledWith: 6 }]
      }]
    }, {
      given: { currentPage: 7, pageCount: 15 },
      actions: [{
        when: { click: 7 },
        then: [{ calledTimes: 0 }]
      }]
    }, {
      given: { currentPage: 1, pageCount: 15 },
      actions: [{
        when: { click: '<' },
        then: [{ calledTimes: 0 }]
      }, {
        when: { click: '<<' },
        then: [{ calledTimes: 0 }]
      }, {
        when: { click: '>' },
        then: [{ calledTimes: 1 }, { lastCalledWith: 2 }]
      }, {
        when: { click: '>>' },
        then: [{ calledTimes: 2 }, { lastCalledWith: 15 }]
      }]
    }, {
      given: { currentPage: 15, pageCount: 15 },
      actions: [{
        when: { click: '>' },
        then: [{ calledTimes: 0 }]
      }, {
        when: { click: '>>' },
        then: [{ calledTimes: 0 }]
      }, {
        when: { click: '<' },
        then: [{ calledTimes: 1 }, { lastCalledWith: 14 }]
      }, {
        when: { click: '<<' },
        then: [{ calledTimes: 2 }, { lastCalledWith: 1 }]
      }]
    }].forEach(({ given: { currentPage, pageCount }, actions }) => {
      it(`
      given: current = ${currentPage}, pages = ${pageCount}
      ${actions.map(({ when, then }) => `
      when: ${ toString(when) }
      then: ${ toString(then) }
      `)}`, () => {
        // expect(2).toBe(4)
      });
    });
  })
})