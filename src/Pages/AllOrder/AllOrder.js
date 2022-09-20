import React, { Fragment } from 'react'
import FilterBar from '../../components/FilterBar';
import OrderItem from '../../components/OrderItem';
function AllOrder() {
  return (
    <Fragment>
      <FilterBar/>
      <OrderItem/>
    </Fragment>
  )
}

export default AllOrder
