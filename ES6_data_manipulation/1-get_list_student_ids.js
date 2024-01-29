// A function named getListStudentIds that returns an array of ids from a list of objects.

export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.map((obj) => obj.id);
}
