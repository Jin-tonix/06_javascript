/* 01_ optional-chaining-operator(옵셔널 체이닝 연산자)
ES11(ECMAScript2020)에서 도입된 연산자로 죄항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고
그렇지 않으면 우항의 프로퍼티 참조를 이어간다. 
*/

var obj = null;
// TypeError: Cannot read properties of null (reading 'value')
// let val = obj.value;
var val = obj?.value;
console.log(val);

// 옵셔널 체이닝 연산자 이전에는 논리연산자 &&를 사용한 단축 평가로 확인했다.
// 단, 빈 문자열과 같은 Falsy 값을 false 취급해서 생기는 문제가 있다.
var str = '';
// len에 str 즉 빈 문자열이 담긴다
// var len = str && str.length;     
// 빈 문자열은 null 또는 undefined가 아니므로 문자열의 길이 값이 담긴다
var len = str?.length; 
console.log(len);