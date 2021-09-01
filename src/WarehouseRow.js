//import React, { useState, useEffect } from "react";
//import { Table, Button } from "reactstrap";
const WarehouseRow = ({item}) => {
  return (
    <td
      key={item}
      id={item}
    >
      {item}
    </td>
  );
};

export default WarehouseRow;
