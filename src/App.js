import React, { memo } from "react";
import { useState } from "react";
import AllFilters from "./components/AllFilters";
import Table from "./components/Table";
import { Data } from "./data/Data";
import "./App.css";
import { useEffect } from "react";
import { useCallback } from "react";

const App = () => {
  const [tableData, setTableData] = useState(Data);
  console.log(tableData);

  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (event, category) => {
    // console.log(category);
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });

  };

  //  const [checkedState, setCheckedState] = useState(
  //    new Array(Data.length).fill(false)
  //  );

  // const handleOnChange = (position) => {
  //   const updatedCheckedState = checkedState.map((item, index) =>
  //     index === position ? !item : item
  //   );

  //   setCheckedState(updatedCheckedState);
  // }
  // console.log(checkedState);
  const columns = [
    { field: "id", header: "id" },
    { field: "name", header: "Name" },
    { field: "city", header: "city" },
    { field: "category", header: "category" },
    { field: "type", header: "type" },
    { field: "active", header: "Active" },
  ];

  const filterCityToggle = [...new Set(Data.map((item) => item.city))];
  const categoryToggle = [...new Set(Data.map((item) => item.category))];
  const typeToggle = [...new Set(Data.map((item) => item.type))];
  const activeToggle = [...new Set(Data.map((item) => item.active))];

  //  if (checkedItems.dallas) {
  //    let updatedList = [];
  //    updatedList = tableData.filter((item) => {
  //      return item.city === "dallas";
  //    });
  //    console.log(updatedList);
  //  }

  // const selectedCheckBox = Object.entries(checkedItems).map(([key, value]) => ({
  //   key,
  //   value,
  // }));

  // console.log(checkedItems);

  //  const myaraay= selectedCheckBox.map((item) => {
  //  var updatedList;
  //  return console.log(item.value === true, "yes valuye is true");

  // if (item.value === true) {
  //   updatedList = tableData.filter((tableItem) => {
  //     console.log(tableItem.city === item.key);
  //     return tableItem.name === item.key;
  //   });
  // }

  // console.log(updatedList);
  // return updatedList;
  // });

  const setFilteredTableData = useCallback(() => {
    const arr = Object.entries(checkedItems).map(([key, value]) => ({
      [key]: value,
    }));
    console.log(arr);

 
    
    arr.map((item) => {
     console.log(item);
      var updatedList = [];
     
      
      if (item.dallas === true) {
        updatedList = tableData.filter((item) => item.city === "dallas");
       
      } 
      if (item.denver === true) {
        updatedList = tableData.filter((item) => item.city === "denver");
      }
      if (item.one === true) {
           updatedList = tableData.filter((item) => item.category === "one");
      }
      setTableData(updatedList);
      if (item.dallas === false || item.one === false || item.denver === false) {
        setTableData(Data);
        console.log("code exucuted");
      }
    });
    

  }, [checkedItems, tableData]);

  useEffect(() => {
    setFilteredTableData();
  }, [checkedItems]);

  return (
    <div className="container">
      <AllFilters
        cityData={filterCityToggle}
        checkedItems={checkedItems}
        handleChange={handleChange}
        categoryData={categoryToggle}
        typeData={typeToggle}
        activeData={activeToggle}
      />
      <Table columns={columns} data={tableData} />
    </div>
  );
};

export default memo(App);
