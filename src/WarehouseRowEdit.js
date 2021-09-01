import React, { useState, useEffect } from "react";
//import { Table, Button } from "reactstrap";
const WarehouseRowEdit = ({
  index,
  warehouses,
  setWarehouses,
  warehouseKey,
  item
}) => {
  //allows us to collect form data to make edit to the warehouse array
  const [formData, setFormData] = useState('');
  //allows us to update items in a particular warehouse
  const updateObj=(arr, index1, index2, value)=>{
   return arr[index1][index2] = value;
  };
  let newUpdate;
  //updates warehouses array with new formData
  useEffect(()=>{
    if (newUpdate) setWarehouses(newUpdate);
  }, [formData])
  const handleEdit = (e) => {
    setFormData(e.target.value)
     newUpdate = [...warehouses]
     console.log('new update', newUpdate)
     updateObj(newUpdate, index, warehouseKey, formData)
  }
  return (
    <td key={item} id={index}>
      <input onChange={(e) => handleEdit(e)}></input>
    </td>
  );
};

export default WarehouseRowEdit;
