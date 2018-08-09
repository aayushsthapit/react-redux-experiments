export const queryGenerator = (params, data, type) => {
  if (type === "per_page") {
    params.per_page = data;
  }
  if (type === "name") {
    params.name = data;
  }
  if (type === "sort_by") {
    params.sort_by = data;
  }
  if (type === "sort_order") {
    params.sort_order = data;
  }
  if (type === "page") {
    params.page = data;
  }

  return params;
};
