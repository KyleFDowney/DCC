export const convertObjectToArray = (obj) => {
  return Object.keys(obj).map(function (key) {
    return { [key]: obj[key] };
  });
}