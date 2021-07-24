export function clamp(x, from_x, to_x) {
  let newX;
  if (x < from_x) newX = from_x;
  if (x > to_x) newX = to_x;

  return newX;
}
