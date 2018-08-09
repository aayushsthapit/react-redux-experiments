export const SET_VALUE = "SET_VALUE";

export const setValue = (index, xIsNext) => ({
  type: SET_VALUE,
  payload: {
    index: index,
    xIsNext: xIsNext
  }
});
