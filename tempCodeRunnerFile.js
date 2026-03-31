let a = 10;

function test() {
  console.log(a); // ❌ TDZ (not global a!)
//   let a = 20;
}
test();