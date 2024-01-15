export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;
  if (trueOrFalse) {
    const task = true;   // Renamed from task
    const task2 = false;  // Renamed from task2
}
  return [task, task2];
}
