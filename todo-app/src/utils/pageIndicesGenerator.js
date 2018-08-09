export const pageIndicesGenerator = (per_page, listLength) => {
  let listArray;
  for (let i = 0; i < listLength / per_page; i++) {
    listArray.push(i);
  }
  console.log("INN", listArray);
};
