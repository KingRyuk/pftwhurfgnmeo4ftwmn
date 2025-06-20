// Utility functions for localStorage
export function savePlanner(name, data) {
  localStorage.setItem(`planner_${name}`, JSON.stringify(data));
}

export function loadPlanner(name) {
  const raw = localStorage.getItem(`planner_${name}`);
  return raw ? JSON.parse(raw) : null;
}

export function listPlanners() {
  return Object.keys(localStorage)
    .filter(k => k.startsWith("planner_"))
    .map(k => k.replace("planner_", ""));
}
