import React from 'react';
import './App.css';
import { EmployeeList } from './components/employees/EmployeeList';

import { getEmployees } from './data'
import { TableContainer } from './components/pagination/TableContainer';
const employees = getEmployees().slice(0, 100)

function App({ all = true }) {
  // const sum = calculateData(all)
  const sum = 125
  return (
    <div className="App">
      elo: {sum}
      <EmployeeList employees={employees} />

      <hr />

      <TableContainer employees={employees} />
    </div>
  );
}

export default App;
