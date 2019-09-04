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

describe('Pagination', () => {
  it('should ...', () => {
    
  })
})
