export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;
  if (trueOrFalse) {
  const innerTask = true;   // Renamed from task
  const innerTask2 = false;  // Renamed from task2
}
  return [task, task2];
}
