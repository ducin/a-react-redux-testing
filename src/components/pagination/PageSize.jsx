import React, { Fragment, memo, useState } from 'react'

export const PageSize = memo(({ availableSizes, onChange }) => {
  const [selectedSize, setSelectedSize] = useState(0)
  return <>
    <span>items per page</span>:
    {availableSizes.map( (size, idx) => <Fragment key={size}>
        { !!idx && ' | ' }
        <span onClick={() => {
          if (selectedSize !== size) {
            onChange(size)
            setSelectedSize(size)
          }
        }}>{ size }</span>
      </Fragment>
    )}
  </>
})
