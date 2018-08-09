import * as http from "../utils/http";

const fetchData = async (storeDataToStore, params) => {
  const dataStoring = await http.get("/todo", params);

  storeDataToStore(
    dataStoring.data.data.data,
    dataStoring.data.data.listLength,
    params
  );
};

export default fetchData;
