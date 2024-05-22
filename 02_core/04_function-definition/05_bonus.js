/*
Variable Environment
컨텍스트 실행시 최초의 스냅샷을 유지하고 있으며 컨텍스트를 생성할때 가장 먼저 정보를 담고
이를 복사하여 LexicalEnvironment를 만들어 이후에 LexicalEnvironment를 주로 활용한다.
이로 인해 초기에는 LexicalEnvironment와 같은 상태를 유지한다..

LexicalEnvironment
변수, 함수, 선언 및 스코프를 관리하는데 사용되는 내부 데이터 구조

1. Environment Record(환경 레코드) : 변수 및 함수 선언을 저장하고 식별자와 매핑하는 방법을 제공하여
현재 스코프 내의 식별자를 관리한다. 변수명과 해당 변수가 가리키는 값, 함수 선언등을 기록한다.

2.Reference to the outer environment(외부 환경에 대한 참조): 현재 Lexical Environment가 포함된 
외부 Lexical Environment에 대한 참조를 포함하고 이를 통해 중첩된 스코프(스코프 체인)이 형성되며 변수나 함수를
찾을 때 외부 Lexical Environment로 계속 해서 올라가게 된다.
*/

function outerFuntion(){
    let outerVariable ="Outer";

    function innerFunction(){
        let innerVariable = "Inner";

        console.log("inner : " , outerVariable); // 내부 함수에서 외부 함수의 변수 접근 가능
        console.log("inner : " , innerVariable); // 내부 함수에서 내부 변수 접근 가능
    }
    
    console.log("Outer : " , outerVariable); // 외부 함수에서 외부 변수 접근 가능
    //console.log("Outer : " , innerVariable); // 오류 발생 

    innerFunction();
}

outerFuntion();