import React, { Component } from "react";
import TableFilter from "../components/TableFilter"
import TableList from "../components/TableList"
import TableOrder from "../components/TableOrder"
import employees from '../employees.json'
import API from "../utils/Api";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import EmployeeDetails from "../components/EmployeeDetails";


function Search() {
  const [ tableManager, setList ]= useState( { list: employees, filter: '', order: 'id' } )
  console.log( `[Search] tableManager:`, tableManager )

  function updateFilter( filter ){
    console.log( `employees: `, employees )
    const filterList = employees.filter( employee => employee.name.toLowerCase().indexOf( filter.toLowerCase() )>-1 )
    setList( { ...tableManager, filter, list: filterList })
  }

  function updateOrder( order ){
    const newOrderForList = tableManager.list.sort(function(a, b) {
      return a[order] > b[order] ? 1 : -1;
    })
    setList( { ...tableManager, order, list: newOrderForList })
  }

  return(
      <div class="row d-flex justify-content-center container">

          <h1>Employee List</h1>
          <form>
              <TableFilter filter={tableManager.filter} updateFilter={updateFilter} />
              <TableOrder order={tableManager.order} updateOrder={updateOrder} />
          </form>

          <TableList employees={tableManager.list} />
      </div>
  )
}

export default Search