import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from 'reactstrap';
import { Table } from "reactstrap"

function ExceptionList(){
    return(
        <Table
  bordered
>
  <thead>
    <tr>
      <th>
        No.
      </th>
      <th>
        ExceptionId
      </th>
      <th>
        TradeId
      </th>
      <th>
        Counterparty
      </th>

      <th>
        Trade Date
      </th>
      <th>
        Exception Type
      </th>
      <th>
        Status
      </th>
      <th>
        Priority
      </th>
      <th>
        Description
      </th>
      <th>
        Created By
      </th>
      <th>
        Created At
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        1
      </th>
      <td>
        Mark
      </td>
      <td>
        Otto
      </td>
      <td>
        @mdo
      </td>
    </tr>
    <tr>
      <th scope="row">
        2
      </th>
      <td>
        Jacob
      </td>
      <td>
        Thornton
      </td>
      <td>
        @fat
      </td>
    </tr>
    <tr>
      <th scope="row">
        3
      </th>
      <td>
        Larry
      </td>
      <td>
        the Bird
      </td>
      <td>
        @twitter
      </td>
    </tr>
  </tbody>
</Table>
    )
}


export default ExceptionList;