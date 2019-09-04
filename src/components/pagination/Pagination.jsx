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
    {pageNumbers.map(n =>
      <span key={n} className="page">{ n }</span>
    )}
  </div>
}
