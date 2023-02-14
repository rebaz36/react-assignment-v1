const formatDateTime = (timestamp) => {
  const date = new Date(timestamp);
  console.log(date.toISOString());
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, -1);
};
export default formatDateTime;
