import React, { useState, useEffect } from "react";
import Warehouse from "./Warehouse";
const App = () => {
  //sets warehouses to be displayed by child components
  const [warehouses, setWarehouses] = useState(null);
  //determines which warehousers are currently being edited
  const [activeWarehouses, setActiveWarehouses] = useState([]);
  //checks if there has been enough delay to display error
  const [delay, setDelay] = useState(true);

  useEffect(() => {
    let unmounted = false;
    fetch("http://localhost:3000/warehouses")
      .then((res) => res.json())
      .then((data) => {
        setWarehouses(data);
        console.log("after fetch", data);
      })
      .catch((err) => {
        console.error(err);
      });
    return () => (unmounted = true);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setDelay(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    console.log(warehouses);
    setWarehouses(warehouses);
  }, [activeWarehouses, warehouses]);

  return (
    <div className="App container">
      {warehouses
        ? warehouses.map((warehouse) => (
            <div id={warehouse.id}>
              <Warehouse
                warehouse={warehouse}
                index={warehouses.indexOf(warehouse)}
                warehouses={warehouses}
                setWarehouses={setWarehouses}
                activeWarehouses={activeWarehouses}
                setActiveWarehouses={setActiveWarehouses}
              />
            </div>
          ))
        : !delay && (
            <>
              <h1>Data not found-</h1>
              <h2 style={{ color: "red" }}>
                cd into server and run npm start to start up server
              </h2>
            </>
          )}
    </div>
  );
};

export default App;
