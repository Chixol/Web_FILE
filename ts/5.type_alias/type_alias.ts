/*
    타입 앨리어스 :
    - 커스텀 타입을 지정하는 방법으로 인터페이스와 유사하게 사용됨
    - type 키워드를 사용
*/
// let gender: '남' | '여'; // 아래같이 사용해야 함

type Gender = '남' | '여';
let gender: Gender = '남'; 

type CustomText = string;

console.log('==================================================');
//아래와 같이 선언을 해도 쓸 수 있음
type King = {
    name: string,
    tombName: string,
    birth: string,
    death: string
};

const taejo: King = {
    name: '이성계',
    tombName: '태조',
    birth: '1335-11-04',
    death: '1408-06-27'
}


console.log('==================================================');
