import "../tableLayout.css";
import React from "react";

const Todos = ({ id, name }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
    </tr>
  );
};

const ShowTodoData = ({ list, listLength }) => {
  return (
    <div className="main-wrapper">
      <table className="users">
        <tbody>
          <tr>
            <th>id</th>
            <th>Name</th>
          </tr>
        </tbody>
        <tbody>
          {list.map((todo, index) => <Todos key={index} {...todo} />)}
        </tbody>
      </table>
    </div>
  );
};

export default ShowTodoData;
