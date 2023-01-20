import React from "react";

const Table = ({ columns, data }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {columns.map((head) => {
              return <th key={head.header}>{head.header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            return (
              <tr key={row.id}>
                {columns.map((col) => {
                  return <td key={col.field}>{row[col.field]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
