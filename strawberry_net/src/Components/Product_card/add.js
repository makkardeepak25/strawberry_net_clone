export function fixed(value) {
  let b = value.split("");
  let c = b[1].split("");
  let d = [b[0], ...c].join("");
  //console.log(d);
  let a = +d;
  return a.toFixed(2);
}
