const formatDateTime = (timestamp) => {
  const date = new Date(timestamp);
  // FIX: return the local date in the following format 'YYYY-MM-DDTHH:mm:ss'
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
};
export default formatDateTime;
