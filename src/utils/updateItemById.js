const updateItemById = (array, id, newDataObject) => {
  const index = array.findIndex((item) => item.id === id);
  array[index] = newDataObject;
  return array;
};
export default updateItemById;
