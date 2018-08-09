import React from "react";
import { queryGenerator } from "../utils/queryGenerator";
import fetchData from "../services/todoService";
const QUERY_TYPE = "per_page";

const selectMenu = ({ storeDataToStore, query }) => {
  return (
    <div>
      <select
        onClick={event =>
          fetchData(
            storeDataToStore,
            queryGenerator(query, event.target.value, QUERY_TYPE),
            event.target.value
          )
        }
      >
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
    </div>
  );
};

export default selectMenu;
