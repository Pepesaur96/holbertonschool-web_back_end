export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;
  if (trueOrFalse) {
      task = true;   // Renamed from task
      task2 = false;  // Renamed from task2
}
  return [task, task2];
}
