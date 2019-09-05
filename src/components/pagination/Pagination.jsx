import React, { useCallback } from 'react'
import './pagination.css'

const range = (max) =>
  [...Array(max)].map((_, idx) => idx + 1)

export const Pagination = ({
  currentPage, pageCount, displayArrows, onChange
}) => {
  const pageNumbers = range(5)
    .map(p => p - 3 + currentPage)
    .filter(p => p >= 1 && p <= pageCount)

  const onChangeHandler = useCallback((page) => {
    if (currentPage !== page && page > 0 && page <= pageCount) {
      onChange(page)
    }
  }, [currentPage, pageCount, onChange])

  return <div className="pagination">

    {displayArrows && <>
      <button className="page"
        disabled={currentPage === 1}
        onClick={ () => onChangeHandler(1) }
      > {"<<"} </button>

      <button className="page"
        disabled={currentPage === 1}
        onClick={ () => onChangeHandler(currentPage - 1) }
      > &lt; </button>
    </>}

    {pageNumbers.map(n => {
      const classes = 'page' + ((n === currentPage) ? ' selected' : '')
      return <button key={n} className={classes}
        onClick={ () => onChangeHandler(n) }
      >{ n }</button>
    }
    )}

    {displayArrows && <>
      <button className="page"
        disabled={currentPage === pageCount}
        onClick={ () => onChangeHandler(currentPage + 1) }
      > &gt; </button>

      <button className="page"
        disabled={currentPage === pageCount}
        onClick={ () => onChangeHandler(pageCount) }
      > {">>"} </button>
    </>}

  </div>
}
