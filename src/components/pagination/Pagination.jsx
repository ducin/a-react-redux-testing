import React from 'react'

const range = (max) =>
  [...Array(max)].map((_, idx) => idx + 1)

export const Pagination = ({
  currentPage, pageCount
}) => {
  const pageNumbers = range(5)
    .map(p => p - 3 + currentPage)
    .filter(p => p >= 1 && p <= pageCount)
  return <div>
    <span className="page"> {"<<"} </span>

    <span className="page"> &lt; </span>

    {pageNumbers.map(n => {
      const classes = 'page' + ((n === currentPage) ? ' selected' : '')
      return <span key={n} className={classes}>{ n }</span>
    }
    )}

    <span className="page"> &gt; </span>

    <span className="page"> {">>"} </span>

  </div>
}
