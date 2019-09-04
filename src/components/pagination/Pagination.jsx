import React from 'react'
import './pagination.css'

const range = (max) =>
  [...Array(max)].map((_, idx) => idx + 1)

export const Pagination = ({
  currentPage, pageCount, displayArrows, onChange
}) => {
  const pageNumbers = range(5)
    .map(p => p - 3 + currentPage)
    .filter(p => p >= 1 && p <= pageCount)

  const onChangeHandler = (page) => {
    if (currentPage !== page) {
      onChange(page)
    }
  }

  return <div>

    {displayArrows && <>
      <span className="page"
        disabled={currentPage === 1}
      > {"<<"} </span>

      <span className="page"
        disabled={currentPage === 1}
      > &lt; </span>
    </>}

    {pageNumbers.map(n => {
      const classes = 'page' + ((n === currentPage) ? ' selected' : '')
      return <span key={n} className={classes}
        onClick={ () => onChangeHandler(n) }
      >{ n }</span>
    }
    )}

    {displayArrows && <>
      <span className="page"
        disabled={currentPage === pageCount}
      > &gt; </span>

      <span className="page"
        disabled={currentPage === pageCount}
      > {">>"} </span>
    </>}

  </div>
}
