export function distributeColumns(categories) {
  if (categories.length === 0) return [[], []];
  const col1 = [categories[0]];
  const col2 = categories.length > 1 ? [categories[1]] : [];
  let count1 = col1[0].questions.length;
  let count2 = col2.length > 0 ? col2[0].questions.length : 0;
  for (let i = 2; i < categories.length; i++) {
    if (count1 <= count2) {
      col1.push(categories[i]);
      count1 += categories[i].questions.length;
    } else {
      col2.push(categories[i]);
      count2 += categories[i].questions.length;
    }
  }
  return [col1, col2];
}
