// A function named cleanSet that returns a string of all
// the set values that start with a specific string (startString).

export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const str = [];
  set.forEach((element) => {
    if (element && element.startsWith(startString)) {
      str.push(element.slice(startString.length));
      }
    });
  return str.join('-');
}
