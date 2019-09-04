import React from 'react'

import { EmployeeList } from '../employees/EmployeeList'
import { PageSize } from './PageSize';
import { Pagination } from './Pagination';

// data -> this.props.data
export class TableContainer extends React.Component {

  availableSizes = [10, 20, 30]

  // availableSizes, onChange
  render(){
    return <div>
      <Pagination
        currentPage={1}
        pageCount={10}
        displayArrows={true}
        onChange={() => {}}
      />

      <PageSize
        availableSizes={this.availableSizes}
        onChange={() => {}}
      />

      <EmployeeList employees={this.props.employees} />
    </div>
  }

}
