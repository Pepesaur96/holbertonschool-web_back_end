export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;
if (trueOrFalse) {
  task = true;  // Removed 'var'
  task2 = false;  // Removed 'var'
}
  return [task, task2];
}