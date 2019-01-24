//Task 1
function printWindowValues() {
  for (var propertyName in window){
    console.log(window[propertyName]);
  }
}
printWindowValues();

//Task 2
function expTen(value) {
  let answer = 1;
  for (var i = 0; i < 10; i++){
    answer *= value;
  }
  return answer;
}
console.log(expTen(2));

//Task 3
function getFuncRes(func, value) {
  return func(value);
}
getFuncRes(console.log, 'Hello World');
