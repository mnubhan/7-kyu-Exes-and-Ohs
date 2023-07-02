unction XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

function XO(str) {
  let x = str.match(/x/gi)
  let o = str.match(/o/gi)
  return x == null && o == null ? true : x==null||o==null ? false: x.length == o.length ? true : false
}

function XO(str) {
  var arr = str.toLowerCase().split("")
  var x = arr.filter(a=>a=="x").length
  var o = arr.filter(a=>a=="o").length
  return x == o || (x == 0 && o == 0) ? true: false
}
