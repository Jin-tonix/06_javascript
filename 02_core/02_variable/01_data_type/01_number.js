/*
자바의 경우 정수와 실수를 구분해 int, long, float, dobule등과 같은 다양한 숫자 타입을 제공한다.
하지만 자바스크립트의 경우 하나의 숫자 타입만 존재하고 모든 수를 실수로 처리한다.
*/

// 자바의 변수 표현식
//자료형 변수명 = 10;



var integer = 10;
var dobule = 5.5;
var gegative = -10;

console.log(10 === 10.0);

console.log(10 / 4);

/* 
Infinity :양의 무한대
-infinity: 음의 무한대
null : 산술 연산 불가
*/

console.log(10/0);
console.log(10/-10);
console.log(1*'문자열');
