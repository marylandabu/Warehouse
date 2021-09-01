import { Table, Button } from "reactstrap";
import WarehouseRow from "./WarehouseRow";
import WarehouseRowEdit from "./WarehouseRowEdit";
const Warehouse = ({
  warehouse,
  index,
  warehouses,
  setWarehouses,
  setActiveWarehouses,
  activeWarehouses,
}) => {
  const warehouseKeys = Object.keys(warehouse);
  const warehouseValues = Object.values(warehouse);

  return (
    <div className="App container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Table>
          <thead>
            <tr>
              {warehouseKeys.map((key) => (
                <th key={key}>{key.toLocaleUpperCase()}</th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              {warehouseValues.map((item) =>
                activeWarehouses.includes(index) ? (
                  <WarehouseRowEdit
                    item={item}
                    index={index}
                    warehouseKey={warehouseKeys[warehouseValues.indexOf(item)]}
                    warehouses={warehouses}
                    setWarehouses={setWarehouses}
                  />
                ) : (
                  <WarehouseRow item={item} />
                )
              )}

              <td>
                <Button
                  color="success"
                  size="sm"
                  className="mr-2"
                  onClick={() =>
                    setActiveWarehouses([...activeWarehouses, index])
                  }
                >
                  Edit
                </Button>
                <Button
                  color="success"
                  size="sm"
                  className="mr-2"
                  type="submit"
                  onClick={() =>
                    setActiveWarehouses([
                      ...activeWarehouses.filter((i) => i !== index),
                    ])
                  }
                >
                  Save
                </Button>
                <Button
                  color="danger"
                  onClick={() =>
                    setWarehouses(
                      warehouses.filter(
                        (particularWarehouse) =>
                          warehouses.indexOf(particularWarehouse) !== index
                      )
                    )
                  }
                  size="sm"
                >
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </form>
    </div>
  );
};

export default Warehouse;
