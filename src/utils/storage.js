const KEY = 'employees.v1';

export function loadEmployees() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; }
}
export function saveEmployees(list) {
  localStorage.setItem(KEY, JSON.stringify(list));
}