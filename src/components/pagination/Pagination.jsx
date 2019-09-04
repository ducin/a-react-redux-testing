import React from 'react'

const range = (max) =>
  [...Array(max)].map((_, idx) => idx + 1)

export const Pagination = ({
  currentPage, pageCount
}) => {
  const pageNumbers = range(pageCount)
  return <div>
    {pageNumbers.map(n =>
      <span className="page">{ n }</span>
    )}
  </div>
}
