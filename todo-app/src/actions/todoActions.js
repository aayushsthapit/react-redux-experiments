export const FETCH_DATA = "FETCH_DATA";
export const RESET = "RESET";

export const storeDataToStore = (list, listlength, query) => ({
  type: FETCH_DATA,
  payload: {
    list,
    listlength,
    query
  }
});

export const reset = () => ({
  type: RESET
});
