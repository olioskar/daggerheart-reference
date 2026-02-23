export function matchesSearch(item, searchLower) {
  if (!searchLower) return true;
  return item.q.toLowerCase().includes(searchLower) ||
    item.a.toLowerCase().includes(searchLower);
}
