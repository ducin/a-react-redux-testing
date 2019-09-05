import React from 'react'

import { TableContainer } from './TableContainer'

/**

PAGE SIZE > LIST
- given: size=10
  then: displayed: 10
  when: change size=20
  then: displayed: 20
        called once
- analogous: bigger -> smaller
- given: size=10
  then: displayed: 10
  when: change size=10
  then: displayed: 10
        not called
- given: no size
  then: displayed: 10 (becase availableSizes is hardcoded)

- first page not full
  given: size=30, items:20
  then: displayed=20
- second page not full
  given: size=30, items:50
  then: displayed=30 (1st page)
  when: change currentPage: 
  then: displayed=20 (2nd page)

PAGE SIZE > PAGINATION

- 10 -> 20
  given: items: 100, size=10
  then: pages= 10
  when: change size=20
  then pages=5
- analogous: 20 -> 10

- reset current page
  given: items: 100, size=10 (all pages->10)
  when: change page: last
  change size: 20 (all pages -> 5)
  then: current page = 1

SEPARATE FILE - FILTERS

MISCELLANEOUS (OTHERS)
- if only 1 page
  given: items=30, size=30
  then: don't display pagination at all
  when: size=20
  then: pagination becomes visible
- if empty data set
  then: "NO ITEMS"
        don't display pagination/pagesize at all

*/

describe('Table Container', () => {

  it('', () => {
    
  })

})
