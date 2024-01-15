export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;
  if (trueOrFalse) {
  var innerTask = true;   // Renamed from task
  var innerTask2 = false;  // Renamed from task2
}
  return [task, task2];
  }