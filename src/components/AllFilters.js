import React from "react";
import ToggleButton from "../ReusableComponent/ToggleButton";

const AllFilters = ({
  cityData,
  categoryData,
  typeData,
  activeData,
  checkedItems,
  handleChange,
}) => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <label htmlFor="city" className="">
            City
          </label>
          {cityData.map((item) => {
            return (
              <ToggleButton
                key={item}
                label={item}
                checkedItems={checkedItems}
                handleChange={handleChange}
              />
            );
          })}
        </div>
        <div className="col-md-2">
          <label htmlFor="city" className="">
            Category
          </label>
          {categoryData.map((item) => {
            return (
              <ToggleButton
                key={item}
                label={item}
                checkedItems={checkedItems}
                handleChange={handleChange}
              />
            );
          })}
        </div>
        <div className="col-md-2">
          <label htmlFor="city" className="">
            Type
          </label>
          {typeData.map((item) => {
            return (
              <ToggleButton
                key={item}
                label={item}
                checkedItems={checkedItems}
                handleChange={handleChange}
              />
            );
          })}
        </div>
        <div className="col-md-2">
          <label htmlFor="city" className="">
            Active
          </label>
          {activeData.map((item) => {
            return (
              <ToggleButton
                key={item}
                label={item}
                checkedItems={checkedItems}
                handleChange={handleChange}
              />
            );
          })}
        </div>
        
      </div>
    </div>
  );
};

export default AllFilters;
